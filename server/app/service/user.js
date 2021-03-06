const moment = require('moment');
const fs = require('fs');
const xlsx = require('node-xlsx');
const { v4: uuidv4 } = require('uuid');
const Service = require('egg').Service;
const { genPassword } = require('../untils/md5.js');

const tableName = 'user';

class UserService extends Service {
  
  async register(query) {
    const {
      app
    } = this;
    const {
      userName,
      phone,
      pwd
    } = query;
    const data = await app.mysql.query(`insert into ${tableName} (username, password, phone) values('${userName}', '${genPassword(pwd)}', '${phone}')`);
    if(data) {
      return {
        code: 200
      };
    } else {
      return '注册失败'
    }
  }

  async login(body) {
    const {
      app
    } = this;
    const {
      name,
      pwd
    } = body;
    const data = await app.mysql.query(`select * from ${tableName} where username='${name}' and password='${genPassword(pwd)}'`);
    if(data.length) {
      const res = data[0];
      const token = app.jwt.sign({
        username: res['username']
      }, app.config.jwt.secret);
      return {
        token,
        userInfo: {
          userName: res['username']
        }
      };
    } else {
      return '用户名或者密码错误';
    }
  }

  async list(query) {
    const {
      app
    } = this;
    const {
      userName = '',
      phone = '',
      current = 1,
      pageSize = 10
    } = query;

    let data = await app.mysql.query(`select * from ${tableName} where (username like '%${userName}%' or '${userName}'='') and (phone like '%${phone}%' or '${phone}'='') order by create_time desc `);
    const total = data.length;
    data = data.splice((current-1) * pageSize, pageSize);
    if (data) {
      data.forEach((item) => {
        item['create_time'] = moment(item['create_time']).format('YYYY-MM-DD HH:mm:ss');
        item['update_time'] = moment(item['update_time']).format('YYYY-MM-DD HH:mm:ss');
      })
      return {
        list: data,
        current: parseInt(current),
        pageSize,
        total
      }
    } else {
      return '查询失败';
    }
  }

  async del(body) {
    const {
      app
    } = this;
    console.log(body)
    const {
      id
    } = body;
    const data = await app.mysql.query(`delete from ${tableName} where id=${id}`);
    console.log(data)
    if (data) {
      return {
        code: 200
      };
    } else {
      return '删除失败';
    }
  }

  async export(query) {
    const {
      app
    } = this;
    const {
      userName = '',
      phone = '',
    } = query;
    let data = await app.mysql.query(`select * from ${tableName} where (username like '%${userName}%' or '${userName}'='') and (phone like '%${phone}%' or '${phone}'='') order by create_time desc `);
    if (data) {
      let res = [];   
      let title = ['ID', '姓名', '手机号', '创建时间', '修改时间'];
      res.push(title);
      data.forEach((item) => {
        let arr = []
        item['create_time'] = moment(item['create_time']).format('YYYY-MM-DD HH:mm:ss');
        item['update_time'] = moment(item['update_time']).format('YYYY-MM-DD HH:mm:ss');
        arr.push(item['id']);
        arr.push(item['username']);
        arr.push(item['phone']);
        arr.push(item['create_time']);
        arr.push(item['update_time']);
        res.push(arr);
      });

      let buffer =  xlsx.build([{
        name: 'sheet1',
        data: res
      }]);
      const uuid = uuidv4();
      fs.writeFileSync(`./app/public/${uuid}.xlsx`, buffer, {
        'flag': 'w'
      });
      return {
        url: `http://26.26.26.1:7001/public/${uuid}.xlsx`
      }
    } else {
      return '查询失败';
    }
  }
}

module.exports = UserService
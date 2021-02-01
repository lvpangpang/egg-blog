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
    console.log(genPassword(pwd));
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
}

module.exports = UserService
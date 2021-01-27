const Service = require('egg').Service;

const tableName = 'user';

class UserService extends Service {
  
  async register(query) {
    const {
      app
    } = this;
    const {
      userName,
      phone
    } = query;
    const data = await app.mysql.query(`insert into ${tableName} (username, password, phone) values('${userName}', '123', '${phone}')`);
    return data;
  }

  async login(query) {
    const {
      app
    } = this;
    const {
      userName,
      pwd
    } = query;
    const data = await app.mysql.query(`select * from ${tableName} where username='${userName}' and password='${pwd}'`);
    if(data.length) {
      const token = app.jwt.sign({
        username: data[0]['username']
      }, app.config.jwt.secret);
      return token;
    } else {
      return null;
    }
  }
}

module.exports = UserService
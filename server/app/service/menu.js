const Service = require('egg').Service;

const tableName = 'menu';

class MenuService extends Service {
  async list() {
    const {
      app
    } = this;
    const data = await app.mysql.query(`select * from ${tableName}`);
    let res = [];

    // 组装第一级
    data.forEach((item) => {
      if (item.level===1) {
        item.childMenus = [];
        res.push(item);
      }
    });

    // 组装2,3级
    res.forEach((item) => {
      let parentId = item['id'];
      data.forEach((item1) => {
        if (item1['parent_menu_id']===parentId) {
          let parentId1 = item1['id'];
          item1.childMenus = [];
          item.childMenus.push(item1);
          data.forEach((item2) => {
            if (item2['parent_menu_id']===parentId1) {
              item1.childMenus.push(item2);
            }
          })
        }
      })
    })

    if (data) {
      return {
        menu: res
      };
    } else {
      return '获取数据失败'
    }
  }
}

module.exports = MenuService
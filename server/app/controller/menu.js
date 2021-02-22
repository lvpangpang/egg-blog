'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async list() {
    const {
      ctx
    } = this;
    const data = await ctx.service.menu.list();
    return data;
  }
}

module.exports = UserController;

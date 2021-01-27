'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const {
      ctx
    } = this;
    await ctx.service.user.register(ctx.query);
    ctx.body = {
      code: 200,
      msg: 'ok'
    }
  }
  async login() {
    const {
      ctx
    } = this;
    const data = await ctx.service.user.login(ctx.query);
    ctx.body = {
      code: 200,
      data: {
        token: data
      }
    }
   }
}

module.exports = UserController;

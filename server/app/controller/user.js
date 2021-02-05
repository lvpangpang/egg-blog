'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async register() {
    const {
      ctx
    } = this;
    const data = await ctx.service.user.register(ctx.query);
    return data;
  }

  async login() {
    const {
      ctx
    } = this;
    const data = await ctx.service.user.login(ctx.request.body);
    return data;
  }

  async list() {
    const {
      ctx
    } = this;
    const data = await ctx.service.user.list(ctx.query);
    return data;
  }
  
  async del() {
    const {
      ctx
    } = this;
    console
    const data = await ctx.service.user.del(ctx.request.body);
    return data;
  }
}

module.exports = UserController;

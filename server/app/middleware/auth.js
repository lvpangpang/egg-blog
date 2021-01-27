module.exports = (options, app) => {
  return async function (ctx, next) {
    const {
      request
    } = ctx
    //拿到不需要验证的token的路由
    const {
      publicRoutes
    } = app.config
    //判断当前路由是否需要验证token
    console.log(ctx)
    const index = publicRoutes.indexOf(request.path);
    if (request.path === '/user/login') {
      await next()
    } else {
      // //把Bearer 截取掉，解析的时候不需要加上Bearer
      const token = (ctx.headers.authorization || '').substring(7)
      // 解析token
      try {
        ctx.state.userInfo = await app.jwt.verify(token, app.config.jwt.secret)
        await next()
      } catch (err) {
        ctx.body = {
          code: 401,
          msg: '登陆失效,请重新登陆',
          data: null,
        }
      }
    }
  }
}

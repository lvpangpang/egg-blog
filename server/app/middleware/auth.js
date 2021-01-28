module.exports = (options, app) => {
  return async function (ctx, next) {
    const {
      request
    } = ctx
    const {
      publicRoutes
    } = app.config
    const index = publicRoutes.indexOf(request.path.split('?')[0]);
    if (index===-1) {
      await next()
    } else {
      // 把Bearer 截取掉，解析的时候不需要加上Bearer
      const token = (ctx.headers.xToken || '').substring(7)
      // 解析token
      try {
        ctx.state.userInfo = await app.jwt.verify(token, app.config.jwt.secret)
        await next()
      } catch (err) {
        ctx.body = {
          code: 401,
          msg: '登陆失效,请重新登陆'
        }
      }
    }
  }
}

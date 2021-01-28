module.exports = () => {
  return async function handlerRes(ctx, next) {
    try {
      const res = await next()
      console.log(res)
      if (res) {
        if (typeof res === 'string') {
          ctx.body = {
            msg: res,
            code: 500,
          }
        } else {
          const {
            data,
            ...rest
          } = res
          ctx.body = {
            msg: 'ok',
            code: 200,
            data,
            ...rest
          }
        }
      }
    } catch (err) {
      const status = err.status || 500
      const msg = err.message || '服务器错误'
      ctx.body = {
        msg,
        code: status,
      }
    }
  }
}

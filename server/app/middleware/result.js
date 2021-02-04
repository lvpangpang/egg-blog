module.exports = () => {
  return async function handlerRes(ctx, next) {
    try {
      const res = await next()

      if (res) {
        if (typeof res === 'string') {
          ctx.body = {
            code: 500,
            msg: res
          }
        } else {
          const {
            ...rest
          } = res
          ctx.body = {
            code: 200,
            data: {
              ...rest
            }
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

const isProd = /116.62.139.102/.test(window.location.host)

const API_HOST_MAP = {
  dev: 'http://127.0.0.1:7001',
  prod: 'http://116.62.139.102:3000'
}

export default function() {
  if(isProd){
    return API_HOST_MAP.prod
  } else {
    return API_HOST_MAP.dev
  }
}

const params = {
  appid: 'wx46f82cb9d312a68a',
  secret: '56aa6a924f10f8b473c378c692993fe9',
  touser: 'ogMwa631uyHapoA-Ij4tVCAVUbCg',
  template_id: 'w-mvk4GNq5pH9ENYa7l5AVGpLLhwG-9UOWejecqK8-U',
}

const LOVE_DAY_START = '6/11/2022';
const API = {
  weather: 'https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=101200301&city=',
  txt: 'https://api.shadiao.pro/chp',
}

const listConfig = {
  data: {
    nowDate: {
      value: '',
      color: '#57E6E2',
    },
    city: {
      value: '鄂州',
      color: '#9CA2A0',
    },
    weather: {
      value: '',
      color: '#9CA2A0',
    },
    low: {
      value: '',
      color: '#7CD47D',
    },
    high: {
      value: '',
      color: '#CBA476',
    },
    loveDate: {
      value: '',
      color: '#AEC5C8',
    },

    txt: {
      value: '',
      color: '#3C4244',
    },
  },
}

/* 上述代码是需要自定义的配置项 */
function verifyEmpty() {
  var flag = ''
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      if (!params[key]) {
        flag = key
        break
      }
    }
  }
  return flag
}

// 校验为空
if (verifyEmpty()) {
  console.error(
    '警告：请完善 “/src/config/config.js中的配置项: ' +
      verifyEmpty() +
      '”的内容,再执行代码！'
  )
  process.exit(0)
}

module.exports = {
  params,
  listConfig,
  API,
  LOVE_DAY_START,
}

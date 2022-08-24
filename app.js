const { params, listConfig } = require('./src/config/config')
const getToken = require('./src/getToken/index')
const sendMessage = require('./src/sendMessage/index')
const getTxt = require('./src/getTxt/index')
const getWeather = require('./src/getWeather/index')
const getLoveDay = require('./src/getLoveDay/index')

async function start() {
  let access_token

  const txt = await getTxt();
  listConfig.data.txt.value = txt;

  const weather = await getWeather();
  const { week, wea, tem1: high, tem2: low } = weather;
  listConfig.data.low.value = `${low}℃`;
  listConfig.data.high.value = `${high}℃`;
  listConfig.data.nowDate.value = `今天是 ${new Date().toLocaleDateString()} ${week}`;
  listConfig.data.weather.value = wea;
  listConfig.data.loveDate.value = getLoveDay();

  try {
    access_token = await getToken(params)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }

  sendMessage({
    ...params,
    access_token,
    ...listConfig,
  })
    .then((res) => {
      if (res.data && res.data.errcode) {
        console.error('发送失败', res.data)
        return
      }
      console.log('发送成功-请在微信上查看对应消息')
    })
    .catch((err) => console.error('发送失败', err))
}

start()

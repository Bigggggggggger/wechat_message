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

  if (listConfig.data.loveDate.value % 100 === 0) {
    listConfig.data.loveDate.color = '#E3493F';
    listConfig.data.txt.value = `今天是我们在一起的第 ${getLoveDay() / 100} 个百日纪恋日，记得找阿川要小蛋糕哟~ （づ￣3￣）づ╭❤～`
    listConfig.data.txt.color = '#F16514'
  }
  
  console.log(listConfig)

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

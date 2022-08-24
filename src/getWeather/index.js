const axios = require('axios')
const { API } = require('../config/config')

const getWeather = async () => { 
    const result = await axios.get(API.weather);
    return result?.data?.data?.[0];
}

module.exports = getWeather;

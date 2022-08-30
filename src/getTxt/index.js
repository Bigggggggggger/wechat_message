const axios = require('axios');
const { API } = require('../config/config')

const getTxt = async () => { 
    const result = await axios.get(API.txt);
    return result?.data?.data?.text;
}

module.exports = getTxt;

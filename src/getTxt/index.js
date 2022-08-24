const axios = require('axios');

const getTxt = async () => { 
    const result = await axios.get('https://api.shadiao.pro/chp');
    return result?.data?.data?.text;
}

module.exports = getTxt;

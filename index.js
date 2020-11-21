require('dotenv').config()
const axios = require('axios');
const fs = require('fs/promises');

const main = async () => {
    const file = await fs.readFile('./IMG_0533.jpg');

    const params = new URLSearchParams();
    params.append('id', process.env.AI_MAKER_ID);
    params.append('apikey', process.env.AI_MAKER_API_KEY);
    params.append('base64', file.toString('base64'));

    const response = await axios.post('https://aimaker.io/image/classification/api', params);
    console.log(response.data);
}

main().then(() => { console.log('done'); });
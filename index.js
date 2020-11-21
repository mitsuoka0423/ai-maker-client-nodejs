require('dotenv').config()
const axios = require('axios');
const fs = require('fs/promises');

const main = async () => {
    const file = await fs.readFile('./IMG_0533.jpg');

    const response = await axios.post('https://aimaker.io/image/classification/api', {
        id: process.env.AI_MAKER_ID,
        apikey: process.env.AI_MAKER_API_KEY,
        base64: file.toString('base64'),
    });
    console.log(response.data);
}

main().then(() => { console.log('done'); });
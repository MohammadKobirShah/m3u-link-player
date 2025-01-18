const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const DRM_SERVER_URL = 'https://m3u.yuvraj49.xyz/p/nWydGaL5FEDg/license/key?id=522';

    const response = await fetch(DRM_SERVER_URL, {
        method: 'POST',
        headers: {
            'Origin': 'https://watch.tataplay.com',
            'Referer': 'https://watch.tataplay.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.1 Safari/537.36',
            'Content-Type': req.headers['content-type'],
        },
        body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
};

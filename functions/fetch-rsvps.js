const https = require('https');

exports.handler = function (event, context, callback) {
  const token = process.env.NETLIFY_KEY;
  const siteId = process.env.SITE_ID;
  const apiQuery = 'submissions?access_token=';
  const baseApiUrl = 'https://api.netlify.com/api/v1/sites';

  const apiUrl = `${baseApiUrl}/${siteId}/${apiQuery}${token}`;

  console.log(apiUrl, 'API');

  const options = {
    hostname: 'api.netlify.com',
    port: 443,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const objectApi = Object.assign({}, options,
    { path: apiUrl }
  );

  const req = https.request(objectApi, (res) => {
    console.log(res, 'UNNNN RES');
    res.setEncoding('utf8');
    let body = '';

    res.on('data', data => {
      body += data;
    });

    res.on('end', () => {
      body = JSON.parse(body);
      console.log(body, 'BODY RESSS');
    });
  });

  req.end();
};
const https = require('https');

exports.handler = function (event, context, callback) {
  const token = process.env.NETLIFY_KEY;
  const siteId = process.env.SITE_ID;
  // const apiQuery = 'submissions?access_token=';
  // const baseApiUrl = 'https://api.netlify.com/api/v1/sites';

  const options = {
    hostname: 'api.netlify.com',
    port: 443,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // const apiUrl = `${baseApiUrl}/${siteId}/${apiQuery}${token}`;

  const apiOptions = Object.assign({}, options, {
    path: `/api/v1/sites/${siteId}/submissions?access_token=${token}`
  });

  const req = https.request(apiOptions, (res) => {
    console.log(res, 'fldsjfldjkdjs');
    res.setEncoding('utf8');
    let body = '';

    res.on('data', (data) => {
      console.log(data, 'flkdsjfldjfkldj');
      body += data;
    });

    res.on('end', () => {
      body = JSON.parse(body);

      console.log(body, 'kldjfklgjfdklgfdk');
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body
      });
    });
  });

  req.end();
  // callback(null, {
  //   statusCode: 200,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json'
  //   },
  //   body: apiUrl
  // });
  // return apiUrl;
};
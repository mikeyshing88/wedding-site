const https = require('https');

exports.handler = function (event, context, callback) {
  const token = process.env.NETLIFY_KEY;
  const siteId = process.env.SITE_ID;

  const options = {
    hostname: 'api.netlify.com',
    port: 443,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const apiOptions = Object.assign({}, options, {
    path: `/api/v1/sites/${siteId}/submissions?access_token=${token}`
  });

  const req = https.request(apiOptions, (res) => {
    res.setEncoding('utf8');

    res.on('data', data => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: data
      });
    });
  });

  req.end();
};
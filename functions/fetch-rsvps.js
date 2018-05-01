const fetch = require('node-fetch');

exports.handler = function (event, context, callback) {
  const token = process.env.NETLIFY_KEY;
  const siteId = process.env.SITE_ID;
  const apiQuery = 'submissions?access_token=';
  const baseApiUrl = 'https://api.netlify.com/api/v1/sites';

  const apiUrl = `${baseApiUrl}/${siteId}/${apiQuery}${token}`;

  console.log(apiUrl, 'API');

  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 410,
      body: 'Unsupported Request Method'
    });
  }
  try {
    const payload = JSON.parse(event.body);
    console.log(payload, 'PAYLOAD');
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ text: payload.text })
    }).then((res) => {
      console.log(res, 'fldjfkdjflj');
      callback(null, { statusCode: 204 });
    }).catch((e) => {
      callback(null, { statusCode: 500, body: `Internal Server Error: ${e}` });
    });
  } catch (e) {
    callback(null, { statusCode: 500, body: `Internal Server Error: ${e}` });
  }
};
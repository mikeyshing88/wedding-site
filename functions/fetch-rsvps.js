const fetch = require('node-fetch');

exports.handler = function (event, context, callback) {
  const token = process.env.NETLIFY_KEY;
  const siteId = process.env.SITE_ID;
  const apiQuery = 'submissions?access_token=';
  const baseApiUrl = 'https://api.netlify.com/api/v1/sites';

  const apiUrl = `${baseApiUrl}/${siteId}/${apiQuery}${token}`;

  console.log(apiUrl, 'API');

  fetch(apiUrl)
    .then((res) => {
      console.log(res, 'fldjfkdjflj');
      console.log(res.json(), 'HHISHISHS');
    });
};
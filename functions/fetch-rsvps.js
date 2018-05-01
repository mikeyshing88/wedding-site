exports.handler = function (event, context, callback) {
  const token = process.env.NETLIFY_KEY;
  const siteId = process.env.SITE_ID;
  const apiQuery = 'submissions?access_token=';
  const baseApiUrl = 'https://api.netlify.com/api/v1/sites';

  const apiUrl = `${baseApiUrl}/${siteId}/${apiQuery}${token}`;
  console.log(apiUrl);
  const api = {
    url: apiUrl
  };
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: api
  });
  // return apiUrl;
};
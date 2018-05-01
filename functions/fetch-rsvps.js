require('whatwg-fetch');

exports.handler = function (event, context, callback) {
  const token = process.env.NETLIFY_KEY;
  const siteId = process.env.SITE_ID;
  const apiQuery = 'submissions?access_token=';
  const baseApiUrl = 'https://api.netlify.com/api/v1/sites';

  const apiUrl = `${baseApiUrl}/${siteId}/${apiQuery}${token}`;

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response;

    throw error;
  }

  return fetch(apiUrl, { credentials: 'same-origin' })
    .then(checkStatus)
    .then((res) => {
      return res.json();
    }).catch((error) => {
      /* eslint no-console: 0 */
      console.error('error', error);
    });
};
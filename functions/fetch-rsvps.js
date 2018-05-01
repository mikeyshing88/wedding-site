exports.handler = function (event, context, callback) {
  // var id = event.queryStringParameters.id;
  const token = process.env.NETLIFY_KEY;
  console.log(token, 'fdlkjflkdjflkj');
};
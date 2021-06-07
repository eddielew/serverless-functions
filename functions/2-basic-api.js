const items = require("../assets/data");

exports.handler = async (event, context, cb) => {
  //   console.log(event);
  //   console.log(context);
  //   console.log(cb);
  return {
    headers: { "Access-Control-Allow-Origin": "*" }, //CORS Error Fixed
    statusCode: 200,
    body: JSON.stringify(items),
  };
};

const items = require("../assets/data");

exports.handler = async (event, context, cb) => {
  //   console.log(event);
  //   console.log(context);
  //   console.log(cb);
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};

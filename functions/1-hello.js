//domain/.netlify/functions/1-hello

// const person = { name: "john" };

exports.handler = async (event, context, cb) => {
  //   console.log(event);
  //   console.log(context);
  //   console.log(cb);
  return {
    statusCode: 200,
    // body: JSON.stringify(person),
    body: "Our First Netlify Function Example ",
  };
};

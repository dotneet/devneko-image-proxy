const aws = require("aws-sdk");
const s3 = new aws.S3();

module.exports = (ctx) => {
  const params = {
    Bucket: ctx.bucket,
    Key: ctx.key,
  };
  return new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

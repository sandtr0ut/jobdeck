require("dotenv").config(); // Configure dotenv to load in the .env file
const express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");
console.log("Working");

router.post("/", function(req, res) {
  console.log("req.body", req.body);
  // Configure aws with your accessKeyId and your secretAccessKey
  console.log("process.env.AWSAccessKeyId", process.env.AWSAccessKeyId);
  console.log("process.env.AWSSecretKey", process.env.AWSSecretKey);
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    region: "us-east-1" // Put your aws region here
  });
  AWS.config.update({
    region: "us-east-1" // Put your aws region here
  });

  const S3_BUCKET = process.env.Bucket;
  // Now lets export this function so we can call it from somewhere else
  //   const s3 = new aws.S3(); // Create a new instance of S3
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  // Set up the payload of what we are sending to the S3 api
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: `${fileName}`,
    // Body: `${fileName}`.data,
    //Expires: 500,
    ContentType: `application/${fileType}`
  };
  console.log("s3Params", s3Params);
  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }
    // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved.
    console.log("data", data);
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    console.log(returnData);
    // Send it all back
    res.json({ success: true, data: { returnData } });
  });
});

module.exports = router;

const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/uploads", require("./routes/api/uploads"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//====================AWS3 TESTING=================================

// var aws = require("aws-sdk");
// require("dotenv").config(); // Configure dotenv to load in the .env file
// // Configure aws with your accessKeyId and your secretAccessKey
// function aws3() {
//   aws.config.update({
//     region: "us-east-1", // Put your aws region here
//     accessKeyId: process.env.AWSAccessKeyId,
//     secretAccessKey: process.env.AWSSecretKey
//   });

//   const S3_BUCKET = process.env.bucket;
//   // Now lets export this function so we can call it from somewhere else
//   exports.sign_s3 = (req, res) => {
//     const s3 = new aws.S3(); // Create a new instance of S3
//     const fileName = req.body.fileName;
//     const fileType = req.body.fileType;
//     // Set up the payload of what we are sending to the S3 api
//     const s3Params = {
//       Bucket: S3_BUCKET,
//       Key: fileName,
//       Expires: 500,
//       ContentType: fileType,
//       ACL: "public-read"
//     };
//     // Make a request to the S3 API to get a signed URL which we can use to upload our file
//     s3.getSignedUrl("putObject", s3Params, (err, data) => {
//       if (err) {
//         console.log(err);
//         res.json({ success: false, error: err });
//       }
//       // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved.
//       const returnData = {
//         signedRequest: data,
//         url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
//       };
//       // Send it all back
//       res.json({ success: true, data: { returnData } });
//     });
//   };
// }

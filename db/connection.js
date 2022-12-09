const mongoose = require("mongoose");

const connectDB = (url) => {
  //The second argument {} has a series of flags to avoid deprecation errors in the console
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

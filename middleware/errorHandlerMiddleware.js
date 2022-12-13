const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    //If the error is coming from the instance of the CustomAPIError class, access the status code and the message properties of it and pass them to status and json express middlewares respectively
    return res.status(err.statusCode).json({ msg: err.message });
  }
  //Otherwise, return this message
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;

class CustomAPIError extends Error {
  //This class takes two parameters, the error message and the statusCode
  constructor(message, statusCode) {
    //Since this is basically a child class of the Error class, we invoke the "message" constructor of the parent class (Error) with super()
    super(message);
    //Create the statusCode property and set it to whatever we passed as status code in the cunstructor
    this.statusCode = statusCode;
  }
}

//Instanciate the class we just created and store it in a variable for exporting it
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

//We have to export both the class and the instance of it, so that we can check if the gotten error in the errorHandlerMiddleware file is an instance of this class or not
module.exports = {
  createCustomError,
  CustomAPIError,
};

//Takes a controller function as paramenter and returns another asynct function.
const asyncWrapper = (fn) => {
  //And pass (req, res, next) from express to this function we are returning
  return async (req, res, next) => {
    try {
      //Await for the passed function to be settled
      //And pass (req, res, next) wrapper function to the function we are receiving as parameter returning
      await fn(req, res, next);
    } catch (error) {
      //Passes the error to the next middleware which will be handled by the express' built-inn middleware handler if a custom one is not setup 
      next(error);
    }
  };
};

module.exports = asyncWrapper;

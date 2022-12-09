//Takes a controller function as paramenter and returns another asynct function.
const asyncWrapper = (fn) => {
  //And pass (req, res, next) from express to this function we are returning
  return async (req, res, next) => {
    try {
      //Await for the passed function to be settled
      //And pass (req, res, next) wrapper function to the function we are receiving as parameter returning
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;

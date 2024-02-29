const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;

/**
 * Express middleware that handles promise rejections and forwards them to 
 * the error handler if they are not caught . This is useful in cases where you have 
 * asynchronous code inside your route handlers or other middleware functions **/
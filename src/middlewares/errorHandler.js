export default (err, req, res, _next) => {
  console.log("errorHandler atteint");
  console.log("err.status:", err.status);
  console.log("err:", err);
  res.status(err.status || 500).json({
    success: false,
    error: {
      code: err.code || "INTERNAL_ERROR",
      message: err.message,
      details: err.details,
    },
  });
};
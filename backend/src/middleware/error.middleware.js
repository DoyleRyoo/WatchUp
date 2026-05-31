const errorMiddleware = (err, req, res, next) => {
  console.error(`[Error Handler] ${err.stack || err}`);

  const statusCode = err.statusCode || 500;
  const message = err.message || '서버 내부 오류가 발생했습니다.';

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    timestamp: new Date().toISOString()
  });
};

module.exports = errorMiddleware;
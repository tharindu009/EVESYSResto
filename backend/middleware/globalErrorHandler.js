import config from '../config/config.js';

globalErrorHandler = (err, res, req, next) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        statusCode: statusCode,
        message: err.message,
        errorStack: config.nodeEnv === 'development' ? err.stack : "",
    })
}

export default globalErrorHandler
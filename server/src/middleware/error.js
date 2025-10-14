class ApiError extends Error {
    constructor(code, message, errors) {
        super(message);
        this.code = code;
        this.errors = errors;
    }
}
const notFound = (_req, _res, next) => next(new ApiError(404, 'Không tìm thấy trang'));
const errorHandler = (err, _req, res, _next) => {
    const code = err.code || err.status || 500;
    const payload = { status: 'error', message: err.message || 'Lỗi server' };

    if (process.env.NODE_ENV !== 'production' && err.stack) payload.stack = err.stack;

    if (err.errors) payload.errors = err.errors;
    res.status(code).json(payload);
};
module.exports = { ApiError, notFound, errorHandler };

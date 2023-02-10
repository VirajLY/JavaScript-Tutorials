class AppError extends Error{
    constructor(errMsg){
        super();
        const {statusCode, message} = errMsg;
        this.statusCode = statusCode;
        this.message = message;
    }
}
module.exports = AppError;
const sendErrorResponse = (error, req, res) => {
    const {statusCode, message} = error;
    res.status(statusCode).json({
        message:message || "Internal Error"
    });
}
module.exports = sendErrorResponse;
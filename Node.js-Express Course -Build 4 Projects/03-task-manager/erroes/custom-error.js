class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}
const createCutomError = (msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}
module.exports = {createCutomError,CustomAPIError}
class APIError extends Error
{
    constructor(status , message ="Something Went Wrong",stack="",errors=[])
    {
        super(message)
        this.status = status
        this.message = message
        this.errors = errors
        this.data = null
        this.success = false
        if (stack)
        {
            this.stack = stack
        }
        else
        {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {APIError}
class ErrorHandler extends Error
{
    public statusCode: number;
    public success: boolean;

    constructor(success:boolean, message:string, statusCode:number )
    {
        super(message);
        this.success= success;
        this.statusCode= statusCode;
    }
}

export default ErrorHandler;
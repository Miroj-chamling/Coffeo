class ErrorHandler extends Error
{
    public statusCode: number;
    public success: boolean;
    public field: string;

    constructor(success:boolean, message:string, statusCode:number, field: string )
    {
        super(message);
        this.success= success;
        this.statusCode= statusCode;
        this.field = field;
    }
}

export default ErrorHandler;
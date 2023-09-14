const ErrorCode:any= {
    UnrecognizedError: 'UnrecognizedError',
    BadRequest: 'BadRequest',
    FAILED_PRECONDITION: 'FAILED_PRECONDITION',

    VIDEO_NOT_FOUND: 'VIDEO_NOT_FOUND',
    INVALID_ARGUMENT: 'INVALID_ARGUMENT',
}

export default ErrorCode;
export type ErrorCodeType = typeof ErrorCode[keyof typeof ErrorCode];

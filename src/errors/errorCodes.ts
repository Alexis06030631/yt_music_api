const ErrorCode:any= {
    UnrecognizedError: 'UnrecognizedError',
    BadRequest: 'BadRequest',
    FAILED_PRECONDITION: 'FAILED_PRECONDITION',

    VIDEO_NOT_FOUND: 'VIDEO_NOT_FOUND',
    INVALID_ARGUMENT: 'INVALID_ARGUMENT',
    INVALID_TYPE_SEARCH: 'INVALID_TYPE_SEARCH',
    INVALID_TYPE_DOWNLOAD: 'INVALID_TYPE_DOWNLOAD',
    INVALID_TYPE_QUALITY: 'INVALID_TYPE_QUALITY',
    DOWNLOAD_LINK_NOT_FOUND: 'DOWNLOAD_LINK_NOT_FOUND',
}

export default ErrorCode;
export type ErrorCodeType = typeof ErrorCode[keyof typeof ErrorCode];

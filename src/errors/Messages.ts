import ErrorCodes from './errorCodes';

const Messages = {
    [ErrorCodes.BadRequest]: (error:any) => `The request was malformed. Message: ${error.message}`,
    [ErrorCodes.FAILED_PRECONDITION]: (error:any) => `${error.code}. The request failed because a precondition was not met. Message: ${error.message}\nPlease contact the developer of the library (https://instagram.com/leko_system).`,


    [ErrorCodes.UnrecognizedError]: (error:any) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${error.code}`,
    [ErrorCodes.VIDEO_NOT_FOUND]: (error:any) => `The video was not found. ID: ${error.id}`,
    [ErrorCodes.INVALID_ARGUMENT]: (message:string) => `The argument was invalid. Message: ${message}`,
};

export default Messages;
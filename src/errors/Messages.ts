import YTErrorCodes from './errorCodes';

const Messages = {
    [YTErrorCodes.BadRequest]: (error:any) => `The request was malformed. Message: ${error.message}`,
    [YTErrorCodes.FAILED_PRECONDITION]: (error:any) => `${error.code}. The request failed because a precondition was not met. Message: ${error.message}\nPlease contact the developer of the library (https://instagram.com/leko_system).`,


    [YTErrorCodes.UnrecognizedError]: (error:any) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${error.code}`
};

export default Messages;
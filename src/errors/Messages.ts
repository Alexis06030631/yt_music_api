import ErrorCodes from './errorCodes';

const Messages = {
    [ErrorCodes.BadRequest]: (error:any) => `The request was malformed. Message: ${error.message}`,
    [ErrorCodes.FAILED_PRECONDITION]: (error:any) => `${error.code}. The request failed because a precondition was not met. Message: ${error.message}\nPlease contact the developer of the library (https://instagram.com/leko_system).`,


    [ErrorCodes.UnrecognizedError]: (error:any) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${error.code}`,
    [ErrorCodes.VIDEO_NOT_FOUND]: (error:any) => `The video was not found. ID: ${error.id}`,
    [ErrorCodes.INVALID_ARGUMENT]: (message:string) => `The argument was invalid. Message: ${message}`,
    [ErrorCodes.INVALID_TYPE_SEARCH]: (error:any) => `The type of search was invalid. Type Available: ${error.typesAvailable}. Type Requested: ${error.typeRequested}`,
    [ErrorCodes.INVALID_TYPE_DOWNLOAD]: (error:any) => `The type of download was invalid. Type Available: ${error.typesAvailable}. Type Requested: ${error.typeRequested}`,
    [ErrorCodes.INVALID_TYPE_QUALITY]: (error:any) => `The type of quality was invalid. Type Available: ${error.typesAvailable}. Type Requested: ${error.typeRequested}`,
    [ErrorCodes.DOWNLOAD_LINK_NOT_FOUND]: (error:any) => `The download link was not found for the parameters Type: ${error.typeRequested} and Quality: ${error.qualityRequested}`,
    [ErrorCodes.DECHIPHER_ERROR]: (error:any) => `An error occurred while deciphering the download link. Message: ${error.message}\nPlease contact the developer of the library (https://instagram.com/leko_system).`,

    [ErrorCodes.CURRENTLY_NOT_SUPPORTED]: () => `This feature is currently not supported. This feature will be available in the next version of the library. Please contact the developer of the library (https://instagram.com/leko_system).`,
    [ErrorCodes.INVALID_TYPE_BUILDER]: (type:string) => `The type of builder ${type} was invalid. Please contact the developer of the library (https://instagram.com/leko_system).`,
    [ErrorCodes.INVALID_TYPE_PAGE]: (types:any[]) => `The type of page was invalid. Type Available: ${types}`,
};

export default Messages;
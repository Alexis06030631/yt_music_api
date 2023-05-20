import MeteoErrorCodes from './errorCodes';

const Messages = {
    [MeteoErrorCodes.UnknownID]: `The ID you provided is unknown, invalid or, in some cases, the ID method is not supported.`,
    [MeteoErrorCodes.PlaceNotFound]: (placeName:string) => `The place "${placeName}" was not found.`,
    [MeteoErrorCodes.BadRequest]: (details:string) => `The request was malformed. Message: ${details}`,


    [MeteoErrorCodes.UnrecognizedError]: (code:any) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${code}`
};

export default Messages;
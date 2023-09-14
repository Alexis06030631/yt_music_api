import Messages from './Messages';
import ErrorCodes, {ErrorCodeType} from "./errorCodes";
import errorCode from "./errorCodes";

export function makeAxiosError (message: string, error:any, ...args: any[]): Error {
    const msg = (message in ErrorCodes)? Messages[message]: null

    if (typeof msg === 'function') return new Error(msg(...(args as [string])));
    if (!args?.length) {
        new Error(`An unknown error has occurred: ${message}`);
        delete error.headers
        // @ts-ignore
        return new Error(error)
    }
    args.unshift(msg);
    return new Error(String(...args));
}



/**
 * Extend an error of some sort into a YTjsError.
 * @param {Error} Base Base error to extend
 * @returns {YTjsError}
 * @ignore
 */
function makeYTjsErrorError(Base:ErrorConstructor) {
    return class YTjsError extends Base {
        public code: ErrorCodeType;
        constructor(code:ErrorCodeType, ...args:any[]) {
            super(message(code, args));
            this.code = code;
            Error.captureStackTrace?.(this, YTjsError);
        }

        get name() {
            return `${super.name} [${this.code}]`;
        }
    };
}

/**
 * Format the message for an error.
 * @param {string} code The error code
 * @param {Array<*>} args Arguments to pass for util format or as function args
 * @returns {string} Formatted string
 * @ignore
 */
function message(code:ErrorCodeType, args:any[]): string {
    if (!(code in errorCode)) throw new Error('Error code must be a valid YTjsErrorCodes');
    const msg = Messages[code];
    if (!msg) throw new Error(`No message associated with error code: ${code}.`);
    if (typeof msg === 'function') { // @ts-ignore
        return msg(...args);
    }
    if (!args?.length) return msg;
    args.unshift(msg);
    return String(...args);
}

export const YTjsErrorError = makeYTjsErrorError(Error)
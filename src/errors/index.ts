import Messages from './Messages';
import ErrorCodes from "./errorCodes";

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
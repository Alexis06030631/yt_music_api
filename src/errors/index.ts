import Messages from './Messages';
import ErrorCodes from "./errorCodes";

export function makeAxiosError (error: string, ...args: any[]) {
    const msg = (error in ErrorCodes)? Messages[error]: Messages[ErrorCodes.UnrecognizedError];

    if (typeof msg === 'function') return new Error(msg(...(args as [string])));
    if (!args?.length) return new Error(msg);
    args.unshift(msg);
    return new Error(String(...args));
}
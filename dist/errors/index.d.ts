import { ErrorCodeType } from "./errorCodes";
export declare function makeAxiosError(message: string, error: any, ...args: any[]): Error;
export declare const YTjsErrorError: {
    new (code: ErrorCodeType, ...args: any[]): {
        code: ErrorCodeType;
        readonly name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};

import { AxiosError, AxiosResponse } from 'axios';
declare function requestToYtApi(url: string, body: object, header?: object): Promise<AxiosResponse | AxiosError>;
export { requestToYtApi, };

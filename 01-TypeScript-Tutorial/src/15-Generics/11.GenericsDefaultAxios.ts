/* ########## GENERICS - DEFAULT TYPE  ########## */

// axios example

// const { data } = axios.get(someUrl);

// data is of structure {name: string}
// axios.get<{name:string}[]>(someUrl);

// Default Response

// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>;
// }

// export interface AxiosResponse<T = any, D = any> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: InternalAxiosRequestConfig<D>;
//   request?: any;
// }

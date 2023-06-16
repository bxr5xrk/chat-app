import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

export async function request<T>(options: AxiosRequestConfig<T>): Promise<T> {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL + '/api/',
  });

  const onSuccess = (response: AxiosResponse<T>) => {
    const { data } = response;
    return data;
  };

  function onError(error: AxiosError) {
    return Promise.reject(error.response);
  }

  const response = client(options).then(onSuccess).catch(onError);

  return response;
}

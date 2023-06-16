import axios, { AxiosError, AxiosResponse } from 'axios';

export async function request<T>(options: Record<string, unknown>): Promise<T> {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL + '/',
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

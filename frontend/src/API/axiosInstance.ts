import axios, { type AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: (import.meta as any).env.VITE_URL,
});

export default axiosInstance;

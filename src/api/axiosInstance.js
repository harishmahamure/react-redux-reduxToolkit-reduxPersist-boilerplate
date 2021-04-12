import axios from "axios";
import URL from "./config";

const axiosInstance = axios.create({
	baseURL: URL,
	timeout: 60000,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});

axiosInstance.defaults.params = {};

axiosInstance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		console.log(request);
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);
export default axiosInstance;

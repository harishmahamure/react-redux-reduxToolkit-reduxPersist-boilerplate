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

export default axiosInstance;

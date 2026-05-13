import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_TMDB_BASE_URL;
const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const ACCESS_TOKEN = process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN;

export const api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${ACCESS_TOKEN}`,
	},
	params: {
		api_key: API_KEY,
	},
});

api.interceptors.request.use((config) => {
	if (__DEV__) {
		console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`);
	}
	return config;
});

api.interceptors.response.use(
	(res) => res.data,
	(error) => {
		console.log(error);

		const status = error.response.status;

		if (status === 401) {
			console.error("Unauthorized: Wrong token or key");
		} else if (status === 404) {
			console.error("Source not found");
		} else if (error.request) {
			console.error("Please check your internet connection");
		} else {
			console.error("Error: ", error.message);
		}

		return Promise.reject(error);
	}
);

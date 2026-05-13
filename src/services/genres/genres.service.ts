import { api } from "../../api/api";
import { GenresResponse } from "../../types/genres/genres.types";

export const getGenreList = async (): Promise<GenresResponse> => {
	try {
		const res = await api.get<GenresResponse>("/genre/movie/list");
		return res.data;
	} catch (error) {
		console.error("Error: ", error);
		throw error;
	}
};

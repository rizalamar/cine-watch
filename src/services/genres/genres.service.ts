import { api } from "../../api/api";
import { Genre, GenresResponse } from "../../types/genres/genres.types";

export const getGenreList = async (): Promise<Genre[]> => {
	try {
		const res = await api.get<GenresResponse>("/genre/movie/list");
		return res.data.genres;
	} catch (error) {
		console.error("Error: ", error);
		throw error;
	}
};

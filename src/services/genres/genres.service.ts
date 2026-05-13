import { api } from "../../api/api";
import { Genres, GenresResponse } from "../../types/genres/genres.types";

export const genreList = async (): Promise<Genres[]> => {
	try {
		const res = await api.get<GenresResponse>("genre/movie/list");
		return res.data.genres;
	} catch (error) {
		console.error("Error: ", error);
		throw error;
	}
};

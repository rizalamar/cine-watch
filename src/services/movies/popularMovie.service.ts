import { api } from "../../api/api";
import { MovieResponse } from "../../types/movies/movies.types";

export const getPopularMovie = async (): Promise<MovieResponse> => {
	try {
		const res = await api.get<MovieResponse>("movie/popular");
		return res.data;
	} catch (error) {
		console.error("Error while fetching popular movies: ", error);
		throw error;
	}
};

export const getDiscoverMovie = async (genreId: number, page: number = 1): Promise<MovieResponse> => {
	try {
		const res = await api.get<MovieResponse>("/discover/movie", {
			params: {
				with_genres: genreId,
				page: page,
			},
		});
		return res.data;
	} catch (error) {
		console.error("Error while fetching discover movies: ", error);
		throw error;
	}
};

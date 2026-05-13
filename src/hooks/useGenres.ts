import { useEffect, useState } from "react";
import { Genres } from "../types/genres/genres.types";
import { getGenreList } from "../services/genres/genres.service";

export const useGenres = () => {
	const [genres, setGenres] = useState<Genres[]>([]);

	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				setLoading(true);
				const data = await getGenreList();
				setGenres(data.genres);
			} catch (error) {
				setError("Failed to fetch movie genres. Try again later");
			} finally {
				setLoading(false);
			}
		};

		fetchGenres();
	}, []);

	return { genres, loading, error };
};

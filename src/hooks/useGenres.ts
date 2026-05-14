import { useEffect, useState } from "react";
import { Genre } from "../types/genres/genres.types";
import { getGenreList } from "../services/genres/genres.service";

export const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchGenres = async () => {
		try {
			setLoading(true);
			const data = await getGenreList();
			setGenres(data);
		} catch (error) {
			setError("Failed to fetch movie genres. Try again later");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchGenres();
	}, []);

	return { genres, loading, error, refresh: fetchGenres };
};

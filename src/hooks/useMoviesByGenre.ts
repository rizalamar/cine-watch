import { useCallback, useEffect, useState } from "react";
import { Movie } from "../types/movies/movies.types";
import { getDiscoverMovie } from "../services/movies/popularMovie.service";

export const useMoviesByGenre = (genreId: number) => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState<boolean>(true);
	const [hasMore, setHasMore] = useState(true);

	const fetchMovies = useCallback(
		async (pageNum: number) => {
			if (loading) return;
			try {
				setLoading(true);
				const data = await getDiscoverMovie(genreId, pageNum);

				if (pageNum === 1) {
					setMovies(data.results);
				} else {
					setMovies((prev) => [...prev, ...data.results]);
				}

				setHasMore(pageNum < data.total_pages);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		},
		[genreId]
	);

	useEffect(() => {
		fetchMovies(1);
	}, [fetchMovies]);

	const loadMore = () => {
		if (hasMore && !loading) {
			const nextPage = page + 1;
			setPage(nextPage);
			fetchMovies(nextPage);
		}
	};

	return { movies, loading, loadMore };
};

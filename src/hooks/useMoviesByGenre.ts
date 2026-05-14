import { useCallback, useEffect, useRef, useState } from "react";
import { Movie } from "../types/movies/movies.types";
import { getDiscoverMovie } from "../services/movies/popularMovie.service";

export const useMoviesByGenre = (genreId: number) => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [hasMore, setHasMore] = useState(true);

	const isFetching = useRef(false);

	const fetchMovies = useCallback(
		async (pageNum: number) => {
			if (isFetching.current) return;

			try {
				isFetching.current = true;
				setLoading(true);
				setError(null);
				const data = await getDiscoverMovie(genreId, pageNum);

				if (data && data.results) {
					setMovies((prev) => {
						if (pageNum === 1) return data.results;

						const existingIds = new Set(prev.map((m) => m.id));
						const uniqueNewMovies = data.results.filter((m) => !existingIds.has(m.id));
						return [...prev, ...uniqueNewMovies];
					});
					setHasMore(pageNum < data.total_pages);
					setPage(pageNum);
				}
			} catch (error: any) {
				console.error(error.message);
				setError(error.message);
			} finally {
				setLoading(false);
				isFetching.current = false;
			}
		},
		[genreId]
	);

	useEffect(() => {
		setMovies([]);
		setPage(1);
		setHasMore(true);
		fetchMovies(1);
	}, [genreId, fetchMovies]);

	const handleLoadMore = () => {
		if (!hasMore || loading) return;
		const nextPage = page + 1;
		fetchMovies(nextPage);
	};

	const handleRefresh = () => {
		fetchMovies(1);
	};

	return { movies, loading, error, loadMore: handleLoadMore, refresh: handleRefresh };
};

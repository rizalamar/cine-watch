import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Movie } from "../types/movies/movies.types";
import { router } from "expo-router";
import { Star } from "lucide-react-native";

interface Props {
	movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
	const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<TouchableOpacity
			className="flex-1 m-2 overflow-hidden bg-gray-800 shadow-lg rounded-xl"
			onPress={() => router.push(`/movie-detail/${movie.id}`)}
		>
			<Image source={{ uri: imageUrl }} className="object-cover w-full h-80" resizeMode="cover" />

			<View className="p-3">
				<Text className="text-sm font-bold text-white" numberOfLines={1}>
					{movie.title}
				</Text>

				<View className="flex-row items-center mt-1">
					<Text className="mr-1 text-xs text-yellow-400">
						{" "}
						<Star size={18} />{" "}
					</Text>
					<Text className="text-xs text-gray-300">{movie.vote_average.toFixed(1)}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default MovieCard;

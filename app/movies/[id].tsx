import { router, useLocalSearchParams } from "expo-router";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { useMoviesByGenre } from "../../src/hooks/useMoviesByGenre";
import EmptyState from "../../src/components/EmptyState";
import MovieCard from "../../src/components/MovieCard";
import LoadingItem from "../../src/components/LoadingItem";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieListScreen() {
	const { id, name } = useLocalSearchParams();
	const { movies, loading, loadMore, error, refresh } = useMoviesByGenre(Number(id));

	if (error) return <EmptyState message={error} onRetry={refresh} />;

	return (
		<SafeAreaView className="flex-1 bg-gray-900">
			<View className="flex-row items-center justify-between px-4 py-2">
				<TouchableOpacity onPress={() => router.back()}>
					<Text className="text-lg text-blue-400">Back</Text>
				</TouchableOpacity>
				<Text className="text-xl font-bold text-white" numberOfLines={1}>
					{name}
				</Text>
				<View style={{ width: 50 }} />
			</View>

			<View className="flex-1">
				<FlatList
					data={movies}
					numColumns={2}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <MovieCard movie={item} />}
					// Infinite scroll
					onEndReached={loadMore}
					onEndReachedThreshold={0.1}
					ListFooterComponent={<LoadingItem loading={loading} />}
					//  Pull to refresh
					refreshing={loading && movies.length === 0}
					onRefresh={refresh}
					contentContainerStyle={{ padding: 30 }}
				/>
			</View>
		</SafeAreaView>
	);
}

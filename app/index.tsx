import { router } from "expo-router";
import { useGenres } from "../src/hooks/useGenres";
import { FlatList, View, Text, Pressable } from "react-native";

export default function GenreScreen() {
	const { genres, loading, error, refresh } = useGenres();
	return (
		<View className="items-center justify-center flex-1 bg-white">
			<FlatList
				data={genres}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Pressable
						className="p-4 mb-2 bg-red-400 rounded-lg"
						onPress={() => {
							router.push({
								pathname: "movies/[id]",
								params: { id: item.id, name: item.name },
							});
						}}
					>
						<Text className="text-lg font-bold">{item.name}</Text>
					</Pressable>
				)}
			/>
		</View>
	);
}

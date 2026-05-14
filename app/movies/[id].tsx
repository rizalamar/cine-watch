import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function MovieListScreen() {
	const { id, name } = useLocalSearchParams();

	return (
		<View className="items-center justify-center flex-1 bg-white">
			<Text className="text-xl">List Movies</Text>
			<Text className="text-gray-500">ID: {id}</Text>
			<Text className="text-2xl text-blue-500">{name}</Text>
		</View>
	);
}

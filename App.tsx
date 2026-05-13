import "./global.css";
import { FlatList, Text, View } from "react-native";
import { useGenres } from "./src/hooks/useGenres";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	const { genres, loading, error } = useGenres();
	return (
		<SafeAreaProvider>
			<View className="items-center justify-center flex-1 bg-white">
				<FlatList
					data={genres}
					keyExtractor={(item) => item.id.toString()}
					renderItem={(item) => (
						<View>
							<Text>{item.item.name}</Text>
						</View>
					)}
				/>
			</View>
		</SafeAreaProvider>
	);
}

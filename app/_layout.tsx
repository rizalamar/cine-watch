import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				headerStyle: { backgroundColor: "#111" },
				headerTintColor: "#fff",
				headerTitleStyle: { fontWeight: "bold" },
			}}
		>
			<Stack.Screen name="index" options={{ title: "Genres" }} />
			<Stack.Screen name="movies/[id]" options={{ title: "Movies" }} />
			<Stack.Screen name="movie-detail/[movieId]" options={{ title: "Detail" }} />
		</Stack>
	);
}

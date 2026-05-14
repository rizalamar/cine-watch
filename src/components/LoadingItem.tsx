import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

interface Props {
	loading: boolean;
}

const LoadingItem = ({ loading }: Props) => {
	if (!loading) return null;

	return (
		<View className="items-center justify-center py-6">
			<ActivityIndicator size={"small"} color={"#3b82f6"} />
			<Text className="mt-2 text-xs text-gray-400">Loading more movies...</Text>
		</View>
	);
};

export default LoadingItem;

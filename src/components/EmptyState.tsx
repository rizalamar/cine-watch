import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
	message: string;
	onRetry?: () => void;
}

const EmptyState = ({ message, onRetry }: Props) => {
	return (
		<View className="items-center justify-center flex-1 p-6 bg-gray-600">
			<Text className="mb-4 text-lg text-center text-gray-400">{message}</Text>
			{onRetry && (
				<TouchableOpacity onPress={onRetry} className="px-6 py-3 bg-blue-600 rounded-full">
					<Text className="font-semibold text-white">Try Again</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default EmptyState;

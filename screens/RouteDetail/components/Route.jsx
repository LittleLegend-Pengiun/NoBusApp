import React from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Route({ title, time, isFirst, isLast, reverse }) {
  const iconName = isFirst
    ? "source-commit-start"
    : isLast
    ? "source-commit-end"
    : "source-commit";
  return (
    <View className="flex-row -mt-1 -mb-2 space-x-2 items-center px-1 mx-1 w-full">
      <MaterialCommunityIcons
        name={iconName}
        size={40}
        color={reverse ? "#32B778" : "#422268"}
      />
      <View className="flex-row justify-between border border-white border-b-gray w-10/12">
        <Text className="text-sm">{title}</Text>
        <Text className="text-sm text-dark-gray">+{time} phút</Text>
      </View>
    </View>
  );
}

export default Route;
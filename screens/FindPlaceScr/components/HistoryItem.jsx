import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function HistoryItem({ title, desc }) {
  return (
    <TouchableOpacity className="flex flex-row space-x-3 items-center py-2">
      <Image
        source={require("../img/black_location_icon.png")}
        className="h-5 w-5"
      />
      <View className="flex-col">
        <Text className="font-bold text-base">{title}</Text>
        <Text className="mr-4 text-sm">{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default HistoryItem;

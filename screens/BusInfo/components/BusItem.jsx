import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function BusItem({ title, desc1, desc2, navigation }) {
  return (
    <TouchableOpacity
      className="flex flex-row space-x-3 items-center py-2"
      onPress={() => {
        navigation.navigate("BusRoadInfo", { busTitle: title, desc: desc2 });
      }}
    >
      <Image source={require("../img/icon_vector.png")} className="h-5 w-5" />
      <View className="flex-col">
        <Text className="font-bold text-base">{title}</Text>
        <View className="flex-row flex-wrap mr-4">
          <Text className="font-bold">
            {desc1}
            <Text className="text-sm font-normal">{desc2}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BusItem;

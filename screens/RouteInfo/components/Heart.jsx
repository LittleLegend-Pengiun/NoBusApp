import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

function Heart({ star }) {
  return (
    <View className="flex-col flex-wrap space-y-2 items-center">
      <Image source={require('../img/heart.png')} className="" />

      <View className="flex-row flex-wrap items-center space-x-1">
        <Text className="text-black text-sm font-bold">
          {star}
        </Text>

        <TouchableOpacity className="">
          <Image source={require('../img/star.png')} className="" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Heart;

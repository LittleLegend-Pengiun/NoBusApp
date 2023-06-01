import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

function Heart() {
  return (
    <View className="flex-row flex-wrap">
      <Image source={require('../img/heart.png')} className="" />

      <View className="flex-row flex-wrap">
        <Text className="text-black text-sm font-bold">
          4.3
        </Text>

        <TouchableOpacity className="">
          <Image source={require('../img/star.png')} className="" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Heart;

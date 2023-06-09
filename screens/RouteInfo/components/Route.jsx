import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import Heart from "./Heart";

function Route({ navigation, title, route, price, time, star }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RouteDetail")}
      className="flex-row items-center justify-between mx-2"
    >
      {/*Main label*/}
      <View className="flex-row items-center space-x-2 py-2">
        <Image source={require("../img/buss2.png")} className="" />
        <View className="flex-col">
          <Text className="text-black text-md font-bold text-lg">{title}</Text>
          <Text className="text-black text-md">{route}</Text>
          <View className="flex-row flex-wrap space-x-3">
            {/*time*/}
            <View
              className="flex-row items-center space-x-1"
            >
              <Image
                source={require("../img/clock.png")}
                className=""
              />

              <Text className="text-black text-sm">
                {time}
              </Text>
            </View>

            {/*money*/}
            <View
              className="flex-row items-center space-x-1"
            >
              <Image
                source={require("../img/money.png")}
                className=""
              />

              <Text className="text-black text-sm">{price}k VNĐ</Text>
            </View>
          </View>
        </View>
      </View>

      <Heart star={star}/>
    </TouchableOpacity>
  );
}

export default Route;

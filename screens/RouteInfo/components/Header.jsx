import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

function Header({ navigation }) {
  return (
    <View className="flex flex-row">
      {/*Back Button*/}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require("../img/Arrow.png")} className="mt-10 ml-6" />
      </TouchableOpacity>

      {/*Main label*/}
      <Text className="mt-10 ml-8 font-bold text-white text-lg">
        Thông tin tuyến
      </Text>
    </View>
  );
}

export default Header;

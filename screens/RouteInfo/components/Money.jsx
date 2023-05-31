import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

function Money() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2">
      <Image source={require('../img/money.png')} className="mt-4 ml-4" />

      <Text className="mt-10 ml-8  text-black text-lg">
        7k VNĐ
      </Text>
    </View>
  );
}

export default Money;

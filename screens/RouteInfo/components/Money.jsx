import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

function Money() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2">
      <Image source={require('../img/money.png')} className="mt-[6px] ml-4" />

      <Text className="mt-[1px] ml-[6px] text-black text-sm">
        7k VNĐ
      </Text>
    </View>
  );
}

export default Money;

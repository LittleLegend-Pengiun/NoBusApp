import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

function Time() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2">
      <Image source={require('../img/clock.png')} className="mt-[6px] ml-[21px]" />

      <Text className="mt-[1px] ml-[7px] mr-1 text-black text-sm">
        5:30 - 22:30
      </Text>
    </View>
  );
}

export default Time;

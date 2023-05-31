import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

function Time() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2">
      <Image source={require('../img/clock.png')} className="mt-4 ml-4" />

      <Text className="mt-10 ml-8  text-black text-lg">
        5:30 - 22:30
      </Text>
    </View>
  );
}

export default Time;

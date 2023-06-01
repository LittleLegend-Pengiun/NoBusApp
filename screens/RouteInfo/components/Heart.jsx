import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

function Heart() {
  return (
    <View style={{ flexDirection: 'column', flexWrap: 'wrap' }} className="mb-2">
      <Image source={require('../img/heart.png')} className="-mt-[68px] ml-[334px]" />

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2">
        <Text className="mt-[11px] ml-[331px]  text-black text-sm font-bold">
          4.3
        </Text>

        <TouchableOpacity className="-mt-[32px] ml-[341px] mb-2">
          <Image source={require('../img/star.png')} className="mt-4 ml-4" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Heart;

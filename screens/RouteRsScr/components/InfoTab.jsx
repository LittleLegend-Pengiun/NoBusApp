import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

function InfoTab({
  navigation,
  busStart,
  busEnd,
  timeExpected,
  price,
  walkingDistance,
  journeyLength,
}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Gooo")}>
      {/*First Row*/}
      <View className="flex-row justify-between mx-2">
        {/* First half */}
        <View className="flex-row items-center space-x-1">
          <View className="bg-dark-green rounded-md p-1 flex-row items-center space-x-1">
            <Image source={require("../img/G47.png")} className="ml-1" />
            <Text className="text-white text-base font-bold">{busStart}</Text>
          </View>

          <Image source={require("../img/Ellipse.png")} />

          <View className="bg-orange rounded-md p-1 flex-row space-x-1 items-center">
            <Image source={require("../img/G472.png")} className="ml-1" />
            <Text className="text-white text-base font-bold">{busEnd}</Text>
          </View>
        </View>

        {/* Second Half */}
        <View className="flex-row items-center">
          <View className="pt-2 pl-2">
            <Text className="bg-white border-black border-solid border rounded-xl text-dark-gray text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
              {price}k đ
            </Text>
          </View>
          <View className="pt-2 pl-3 flex-wrap text-center">
            <Text className="bg-white rounded-md text-purple text-2xl font-bold text-center">
              {timeExpected}
            </Text>
            <Text className="bg-white rounded-md text-purple text-sm -mt-1 -mb-2 text-center">
              phút
            </Text>
          </View>
        </View>
      </View>

      {/*Second Row*/}
      <View className="text-dark-gray pl-3 flex-row space-x-2">
        <View className="flex-row space-x-1 items-center">
          <Image source={require("../img/human.png")} />
          <Text>{walkingDistance} km</Text>
        </View>
        <View className="flex-row space-x-1 items-center">
          <Image source={require("../img/buss.png")} />
          <Text>{journeyLength} km</Text>
        </View>
      </View>

      {/*Third Row*/}
      <View className="pl-3 pb-3 pt-1 space-x-1 flex-row">
        <Image source={require("../img/clockk.png")} />
        <Text className="text-black">xe tới trong 34 phút</Text>
        <Text className="text-dark-gray font-bold">tại trạm Làng SOS</Text>
      </View>

      {/*Horizontal Line*/}
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
    </TouchableOpacity>
  );
}

export default InfoTab;

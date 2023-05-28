import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomBar from "./components/BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";

export default function({ navigation }){
  return (
    <View className="bg-white">
      <TopBar />

      <View className="flex flex-row">
        <TouchableOpacity className="p-2 m-2 bg-dark-purple"
        onPress={() => navigation.navigate("RouteInfo")}>
          <Text className="text-white">Thông tin tuyến</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 m-2 bg-dark-purple"
        onPress={() => navigation.navigate("BusInfo")}>
          <Text className="text-white">Thông tin xe</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 m-2 bg-dark-purple"
        onPress={() => navigation.navigate("Address")}>
          <Text className="text-white">Address screen</Text>
        </TouchableOpacity>
      </View>
      <BottomBar className="bg-white"/>
    </View>
  )
};

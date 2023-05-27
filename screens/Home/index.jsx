import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomBar from "./components/BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function({ navigation }){
  return (
    <SafeAreaView className="bg-white">
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
      <BottomBar className="bg-white"/>
    </SafeAreaView>
  )
};

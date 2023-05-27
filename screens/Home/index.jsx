import React from "react";
import { View, Text } from "react-native";
import BottomBar from "./components/BottomBar";

export default function(){
  return (
    <View className="bg-white">
      <View className="h-10"></View>
      <BottomBar className="bg-white"/>
    </View>
  )
};

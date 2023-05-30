import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

function PageTitle({ title, navigation, showReload = false }) {
  let reloadColor = "#FFFFFF";
  let disabled = false;
  if (!showReload) {
    disabled = true;
    reloadColor = "#6D41A1";
  }

  return (
    <View className="flex-row justify-between mt-10 mx-6">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} color="white"/>
      </TouchableOpacity>

      <Text className="font-bold text-white text-lg">{title}</Text>

      {/*Refresh Button*/}
      <TouchableOpacity disabled={disabled}>
        <Ionicons name="ios-reload" color={reloadColor} size={30} />
      </TouchableOpacity>
    </View>
  );
}

export default PageTitle;

import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from "./components/Header";
import Route from "./components/Route";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";

export default function ({ navigation }) {
  return (
    <View className="bg-purple h-full">
      <Header navigation={navigation} />

      {/* Search */}
      <View className="w-11/12 items-center flex-row space-x-2 bg-white p-3 mt-5 self-center rounded-xl drop-shadow">
        <AntDesign name="search1" size={20} color="gray" className="mx-2" />
        <TextInput
          placeholder="Nhập tuyến xe cần tìm"
          keyboardType="default"
          className="pl-1 self-center"
        />
      </View>

      {/*Purple Button Bar View*/}
      <View className="bg-purple pt-5 pb-1 w-full items-center justify-center flex flex-row divide-x-[3px] divide-white">
          <View className="pr-[80px]">
            <Text className="text-white text-base font-bold text-center border border-purple border-b-white">
              Tất cả
            </Text>
          </View>
          <View className="pl-[60px]">
            <Text className="text-white text-base font-bold">
              Yêu thích
            </Text>
          </View>
        </View>

      {/*List route bus*/}
      <View className="bg-white h-full top-[15px] pt-5">

        {/*First*/}
        <Route navigation={navigation} />
        <Route navigation={navigation} />
        <Route navigation={navigation} />
        <Route navigation={navigation} />
        <Route navigation={navigation} />
        <Route navigation={navigation} />

      </View>

    </View>
  );
}

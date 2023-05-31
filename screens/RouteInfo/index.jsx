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
      <View className="w-11/12 items-center flex-row space-x-2 bg-white p-3 mt-3 self-center border border-purple rounded-lg drop-shadow-lg">
        <AntDesign name="search1" size={20} color="gray" className="mx-2" />
        <TextInput
          placeholder="Nhập tuyến xe cần tìm"
          keyboardType="default"
          className="pl-1 self-center"
        />
      </View>

      {/*Purple Button Bar View*/}
      <View className="bg-purple h-[50px] top-[15px] w-full items-center justify-center flex flex-row divide-x-[3px] divide-dark-purple">
        <TouchableOpacity className="pr-10">
          <Text className="text-white text-base text-center">
            Tất cả
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="pl-10" disabled={true}>
          <Text className="text-white text-base ">
            Yêu thích
          </Text>
        </TouchableOpacity>
      </View>
      
      {/*Horizontal Line*/}
      <View className="top-[15px] w-1/2 -mt-1"
        style={{
          borderBottomColor: '#2D1449',
          borderBottomWidth: 4,
        }}
      />

      {/*List route bus*/}
      <View className="bg-white h-full top-[15px]">

        {/*First*/}
        <Route navigation={navigation} />
        <Route navigation={navigation} />
        <Route navigation={navigation} />

      </View>

    </View>
  );
}

import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Route from "./components/Route";
import PageTitle from "../components/PageTitle";

const routeInfoList = [
  {
    key: 1,
    title: "Tuyến xe 01",
    route: "Bến Thành - Bến xe buýt Chợ Lớn",
    time: "5:00 - 20:15",
    price: 7,
    star: 4.3,
  },
  {
    key: 2,
    title: "Tuyến xe 01",
    route: "Bến Thành - Bến xe buýt Chợ Lớn",
    time: "5:00 - 20:15",
    price: 7,
    star: 4.9,
  },
  {
    key: 3,
    title: "Tuyến xe 01",
    route: "Bến Thành - Bến xe buýt Chợ Lớn",
    time: "5:00 - 20:15",
    price: 7,
    star: 4.9,
  },
  {
    key: 4,
    title: "Tuyến xe 01",
    route: "Bến Thành - Bến xe buýt Chợ Lớn",
    time: "5:00 - 20:15",
    price: 7,
    star: 4.9,
  },
  {
    key: 5,
    title: "Metro",
    route: "Bến Thành - Suối tiên",
    time: "5:30 - 22:30",
    price: 7,
    star: 4.9,
  },
  {
    key: 6,
    title: "Metro",
    route: "Bến Thành - Suối tiên",
    time: "5:30 - 22:30",
    price: 7,
    star: 4.9,
  },
  {
    key: 7,
    title: "Metro",
    route: "Bến Thành - Suối tiên",
    time: "5:30 - 22:30",
    price: 7,
    star: 4.9,
  },
  {
    key: 8,
    title: "Metro",
    route: "Bến Thành - Suối tiên",
    time: "5:30 - 22:30",
    price: 7,
    star: 4.9,
  },
  {
    key: 9,
    title: "Metro",
    route: "Bến Thành - Suối tiên",
    time: "5:30 - 22:30",
    price: 7,
    star: 4.9,
  },
]

export default function ({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <View className="bg-purple h-full">
      <PageTitle
        title={"Chọn tuyến xe"}
        navigation={navigation}
        showReload={false}
      />

      {/* Search */}
      <View className="w-11/12 items-center flex-row space-x-2 bg-white py-2 px-3 mt-3 self-center rounded-xl drop-shadow">
        <AntDesign name="search1" size={20} color="gray" className="mx-2" />
        <TextInput
          placeholder="Nhập tuyến xe cần tìm"
          keyboardType="default"
          className="pl-1 self-center"
          defaultValue={keyword}
          onChangeText={(newWord) => setKeyword(newWord)}
        />
      </View>

      {/*Purple Button Bar View*/}
      <View className="bg-purple w-full items-center justify-center flex flex-row divide-x-[3px] divide-white">
        <View className="w-1/2 py-2 my-2 border border-purple border-b-white">
          <Text className="text-white text-base font-bold text-center">
            Tất cả
          </Text>
        </View>
        <View className="w-1/2 py-2 my-2">
          <Text className=" text-white text-center text-base font-bold">
            Yêu thích
          </Text>
        </View>
      </View>

      {/*List route bus*/}
      <View className="bg-white flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          {routeInfoList
          .filter((route) => route.title.toLowerCase().includes(keyword.toLowerCase()))
          .map((route) => (
            <Route navigation={navigation} {...route} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

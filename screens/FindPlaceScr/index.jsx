import React from "react";
import { TextInput, TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Category from "./components/Category";
import Entypo from "react-native-vector-icons/Entypo";
import HistoryItem from "./components/HistoryItem";
import PageTitle from "../components/PageTitle";

const categories = [
  {
    title: "Nhà",
    icon: require("./img/icon_home_.png"),
    color: "bg-light-red"
  },
  {
    title: "Trường",
    icon: require("./img/icon_school.png"),
    color: "bg-green"
  },
  {
    title: "Công ty",
    icon: require("./img/icon_company.png"),
    color: "bg-blue"
  },
]

const historyItems = [
  {
    title: "Trường THPT Nguyễn Hữu Huân",
    desc: "11 Đoàn Kết, Bình Thọ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh"
  },
  {
    title: "Trường Phổ thông Năng Khiếu CS2",
    desc: "Khu phố 6, Linh Trung, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh"
  },
  {
    title: "Trường THPT Thủ Đức",
    desc: "166/24 Đặng Văn Bi, Bình Thọ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh"
  },
  {
    title: "Trường Đại học Bách Khoa",
    desc: "Khu phố Tân Lập, Phường Đông Hòa, Thành Phố Dĩ An, Tỉnh Bình Dương"
  },
  {
    title: "Trường Đại học Bách Khoa 1",
    desc: "Khu phố Tân Lập, Phường Đông Hòa, Thành Phố Dĩ An, Tỉnh Bình Dương"
  },
  {
    title: "Trường Đại học Bách Khoa 2",
    desc: "Khu phố Tân Lập, Phường Đông Hòa, Thành Phố Dĩ An, Tỉnh Bình Dương"
  },
  {
    title: "Trường Đại học Bách Khoa 3",
    desc: "Khu phố Tân Lập, Phường Đông Hòa, Thành Phố Dĩ An, Tỉnh Bình Dương"
  },
]

export default function ({ navigation }) {
  return (
    <View className="bg-purple h-full">
      <PageTitle title={"Tra cứu theo đường đi"} navigation={navigation} showReload={false} />

      {/* Search */}
      <View className="w-11/12 items-center flex-row space-x-2 bg-white p-3 mt-3 self-center border border-purple rounded-lg drop-shadow-lg">
        <AntDesign name="search1" size={20} color="gray" className="mx-2" />
        <TextInput
          placeholder="Tìm kiếm địa điểm"
          keyboardType="default"
          className="pl-1 self-center"
        />
      </View>

      {/* Categories */}
      <View className="flex-row mt-2 px-3 justify-between mx-2">
        {categories.map(({ title, icon, color}) => (
          <Category key={title} title={title} icon={icon} color={color}/>
        ))}

        <TouchableOpacity className="p-2 rounded-lg bg-white items-center">
          <Entypo name="plus" size={20}/>
        </TouchableOpacity>
      </View>

      {/* Choice zone */}
      <View className="rounded-lg mt-2 px-3 self-center bg-white w-11/12">
        <TouchableOpacity className="flex flex-row space-x-3 p-2 items-center">
          <Image source={require("./img/location-icon.png")}
          className="h-5 w-5"/>
          <Text className="font-bold">Vị trí hiện tại</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row space-x-3 p-2 items-center border-t-2 border-black/25">
          <Image source={require("./img/icon_map.png")}
          className="h-5 w-5"/>
          <Text className="font-bold">Chọn trên bản đồ</Text>
        </TouchableOpacity>
      </View>

      {/* History */}
      <View className="bg-white rounded-lg px-3 mx-5 mb-5 mt-4 flex-1 relative">
        <View className="bg-purple/25 px-5 py-3 absolute inset-x-0 top-0">
          <Text className="text-black">Lịch sử tìm kiếm</Text>
        </View>
        <View className="top-12 flex-grow-0 h-3/4">
          <ScrollView className="flex flex-col"
            showsVerticalScrollIndicator={false}
          >
            {historyItems.map(({title, desc}) => (
              <HistoryItem 
              key={title}
              title={title}
              desc={desc}
              />
            ))}
          </ScrollView>
        </View>
        <View className="absolute inset-x-0 bottom-0">
          <Text className="font-bold text-xl border-t-2 border-black/25 py-2 text-center">TOÀN BỘ LỊCH SỬ</Text>
        </View>
      </View>
    </View>
  );
}

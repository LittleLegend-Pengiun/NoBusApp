import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Route from "./components/Route";
import PageTitle from "../components/PageTitle"

export default function ({ navigation }) {
  return (
    <View className="bg-purple h-full">
      <PageTitle title={"Thông tin xe"} navigation={navigation} showReload={false} />

      {/* Search */}
      <View className="w-11/12 items-center flex-row space-x-2 bg-white py-2 px-3 mt-3 self-center rounded-xl drop-shadow">
        <AntDesign name="search1" size={20} color="gray" className="mx-2" />
        <TextInput
          placeholder="Nhập tuyến xe cần tìm"
          keyboardType="default"
          className="pl-1 self-center"
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
          <Text className=" text-white text-center text-base font-bold">Yêu thích</Text>
        </View>
      </View>

      {/*List route bus*/}
      <View className="bg-white flex-1">
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

import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import MapView from "react-native-maps";
import AntDesign from "react-native-vector-icons/AntDesign";
import Route from "./components/Route";
import { PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 95,
    bottom: 0,
  },
  map: {
    flex: 1, //the container will fill the whole screen.
    ...StyleSheet.absoluteFillObject,
  },
});

const busRoute = [
  {
    title: "Công Trường Mê Linh",
    time: 0,
  },
  {
    title: "Bến Bạch Đằng",
    time: 1,
  },
  {
    title: "Cục Hải quan Thành phố",
    time: 2,
  },
  {
    title: "Chợ Cũ",
    time: 3,
  },
  {
    title: "Trường Cao Thắng",
    time: 3,
  },
  {
    title: "Trạm trung chuyển đường Hàm Nghi",
    time: 4,
  },
  {
    title: "Trường Ernst Thalman",
    time: 5,
  },
  {
    title: "KTX Trần Hưng Đạo",
    time: 6,
  },
  {
    title: "Rạp Hưng Đạo",
    time: 7,
  },
  {
    title: "Bệnh viện Răng Hàm Mặt",
    time: 7,
  },
  {
    title: "Trần Đình Xu",
    time: 8,
  },
  {
    title: "Tổng công ty Samco",
    time: 9,
  },
  {
    title: "Chợ Nacci",
    time: 10,
  },
  {
    title: "Nguyễn Biểu",
    time: 11,
  },
  {
    title: "Trường CĐ Kinh tế Đối ngoại",
    time: 12,
  },
  {
    title: "Trần Bình Trọng",
    time: 12,
  },
  {
    title: "Bệnh viện Chấn thương Chỉnh hình",
    time: 13,
  },
  {
    title: "Rạp Đồng Tháp",
    time: 14,
  },
  {
    title: "Rạp Đống Đa",
    time: 14,
  },
  {
    title: "Đồng Khánh",
    time: 15,
  },
  {
    title: "Nhà văn hóa Quận 5",
    time: 16,
  },
  {
    title: "Ngô Quyền",
    time: 17,
  },
  {
    title: "Tản Đà",
    time: 18,
  },
  {
    title: "Triệu Quang Phục",
    time: 19,
  },
  {
    title: "Bưu điên quận 5",
    time: 20,
  },
  {
    title: "Hải Thượng Lãn Ông",
    time: 20,
  },
  {
    title: "Chợ Kim Biên",
    time: 21,
  },
  {
    title: "Bến xe Chợ Lớn",
    time: 22,
  },
];

const reverseRoute = [
  { title: 'Bến xe Chợ Lớn', time: 0 },
  { title: 'Chợ Kim Biên', time: 1 },
  { title: 'Hải Thượng Lãn Ông', time: 2 },
  { title: 'Bưu điên quận 5', time: 2 },
  { title: 'Triệu Quang Phục', time: 3 },
  { title: 'Tản Đà', time: 4 },
  { title: 'Ngô Quyền', time: 5 },
  { title: 'Nhà văn hóa Quận 5', time: 6 },
  { title: 'Đồng Khánh', time: 7 },
  { title: 'Rạp Đống Đa', time: 8 },
  { title: 'Rạp Đồng Tháp', time: 8 },
  { title: 'Bệnh viện Chấn thương Chỉnh hình', time: 9 },
  { title: 'Trần Bình Trọng', time: 10 },
  { title: 'Trường CĐ Kinh tế Đối ngoại', time: 10 },
  { title: 'Nguyễn Biểu', time: 11 },
  { title: 'Chợ Nacci', time: 12 },
  { title: 'Tổng công ty Samco', time: 13 },
  { title: 'Trần Đình Xu', time: 14 },
  { title: 'Bệnh viện Răng Hàm Mặt', time: 15 },
  { title: 'Rạp Hưng Đạo', time: 15 },
  { title: 'KTX Trần Hưng Đạo', time: 16 },
  { title: 'Trường Ernst Thalman', time: 17 },
  { title: 'Trạm trung chuyển đường Hàm Nghi', time: 18 },
  { title: 'Trường Cao Thắng', time: 19 },
  { title: 'Chợ Cũ', time: 19 },
  { title: 'Cục Hải quan Thành phố', time: 20 },
  { title: 'Bến Bạch Đằng', time: 21 },
  { title: 'Công Trường Mê Linh', time: 22 }
]

export default function ({ navigation }) {
  const [ret, setret] = useState(false);

  return (
    <View className="h-full relative">
      {/*Purple Top View*/}
      <View className="bg-purple pb-5">
        <View className="flex-row items-center mt-10 mx-6">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Image className="ml-4 mr-3" source={require("./img/Vector.png")} />
          <Text className="font-bold text-white text-lg">Tuyến xe 01</Text>
        </View>
      </View>

      {/*Map*/}
      <View style={styles.container}>
        {/*MAP*/}
        <MapView
          style={styles.map}
          //specify our coordinates.
          initialRegion={{
            latitude: 10.835473,
            longitude: 106.639089,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}
          provider={PROVIDER_GOOGLE}
        />
      </View>

      <View className="absolute top-24 flex-row justify-between px-2 items-center w-full">
        {/*BẮT ĐẦU DẪN ĐƯỜNG Button*/}
        <TouchableOpacity
          className="p-2 rounded-3xl bg-purple items-center space-x-2"
          style={{ flexDirection: "row", flexWrap: "wrap" }}
        >
          <Image source={require("./img/navigate.png")} className="ml-1" />
          <Text className="text-white font-bold text-center pr-3">
            Bắt đầu dẫn đường
          </Text>
        </TouchableOpacity>

        {/*CURRENT LOCATION Button*/}
        <TouchableOpacity className="">
          <Image source={require("./img/Clocation.png")} className="" />
        </TouchableOpacity>
      </View>

      <View className="h-3/5 absolute inset-x-0 bottom-0 bg-white flex-col">
        {/*White Bar View*/}
        <View className="bg-white justify-between flex-row p-2">
          <View />
          <TouchableOpacity
            className="bg-gray rounded-md text-purple w-1/6 p-1 items-center"
            onPress={() => setret(!ret)}
          >
            <Text className={`text-center text-sm font-bold ${!ret? "text-dark-purple" : "text-dark-green"}`}>
              {ret ? "Lượt về" : "Lượt đi"}
            </Text>
          </TouchableOpacity>
        </View>

        {/*Purple Button Bar View*/}
        <View className="bg-purple w-full items-center justify-center flex flex-row divide-x-[3px] divide-white py-1">
          <View className="w-1/4 border border-purple border-b-white py-1">
            <Text className="text-white text-sm font-bold text-center ">
              Trạm dừng
            </Text>
          </View>
          {["Thời gian", "Thông tin", "Đánh giá"].map((item) => (
            <View className="w-1/4">
              <Text
                key={item}
                className="text-white text-center text-sm font-bold"
              >
                {item}
              </Text>
            </View>
          ))}
        </View>

        {/*White Detail View*/}
        <View className="flex-col flex-wrap flex-1">
          <ScrollView showsVerticalScrollIndicator={false}>
            {(ret? reverseRoute : busRoute).map((item, index) => (
              <Route
                key={index}
                isFirst={index == 0}
                isLast={index == busRoute.length - 1}
                reverse={ret}
                {...item}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
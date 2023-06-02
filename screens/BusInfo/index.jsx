import React, { useState } from "react";
import { TextInput, View, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import BusItem from "./components/BusItem";
import PageTitle from "../components/PageTitle";

const busItems = [
  {
    title: "50F-002.12",
    desc1: "Tuyến 55: ",
    desc2: "Công viên phần mềm Quang trung - Bến xe Miền Đông mới",
  },
  {
    title: "55F-002.31",
    desc1: "Tuyến 55: ",
    desc2: "Công viên phần mềm Quang trung - Bến xe Miền Đông mới",
  },
  {
    title: "57F-002.35",
    desc1: "Tuyến 55: ",
    desc2: "Công viên phần mềm Quang trung - Bến xe Miền Đông mới",
  },
  {
    title: "53F-002.40",
    desc1: "Tuyến 93: ",
    desc2: "Chợ Bến Thành - Bến xe Miền Đông mới",
  },
  {
    title: "50F-002.64",
    desc1: "Tuyến 55: ",
    desc2: "Công viên phần mềm Quang trung - Bến xe Miền Đông mới",
  },
  {
    title: "55F-002.76",
    desc1: "Tuyến 55: ",
    desc2: "Chợ Bến Thành - Bến xe Miền Đông mới",
  },
  {
    title: "50D-002.00",
    desc1: "Tuyến 55: ",
    desc2: "Công viên phần mềm Quang trung - Bến xe Miền Đông mới",
  },
  {
    title: "50E-002.61",
    desc1: "Tuyến 55: ",
    desc2: "Công viên phần mềm Quang trung - Bến xe Miền Đông mới",
  },
  {
    title: "50G-002.75",
    desc1: "Tuyến 55: ",
    desc2: "Chợ Bến Thành - Bến xe Miền Đông mới",
  },
  {
    title: "57K-002.01",
    desc1: "Tuyến 55: ",
    desc2: "Công viên phần mềm Quang trung - Bến xe Miền Đông mới",
  },
];

export default function ({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <View className="bg-purple h-full">
      <PageTitle
        title={"Thông tin xe"}
        navigation={navigation}
        showReload={false}
      />

      {/* Search */}
      <View className="w-11/12 items-center flex-row space-x-2 bg-white p-3 mt-3 self-center border border-purple rounded-lg drop-shadow-lg">
        <AntDesign name="search1" size={20} color="gray" className="mx-2" />
        <TextInput
          placeholder="Nhập biển số xe cần tìm"
          keyboardType="default"
          className="pl-1 self-center"
          defaultValue={keyword}
          onChangeText={(newText) => setKeyword(newText)}
        />
      </View>

      <View className="bg-white w-full mt-4 flex-1 relative">
        <View className="flex-grow-0 my-2 mx-4">
          <ScrollView
            className="flex flex-col"
            showsVerticalScrollIndicator={false}
          >
            {busItems
            .filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()))
            .map(({ title, desc1, desc2 }) => (
              <BusItem
                key={title}
                title={title}
                desc1={desc1}
                desc2={desc2}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

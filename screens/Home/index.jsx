import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import HalfMIdZone from "./components/HalfMIdZone";
import Map from "./components/Map";
import { useDispatch } from "react-redux";
import { clearAllRoute } from "../../store/routeSlice";

export default function ({ navigation }) {
  const dispatch = useDispatch()
  const iconListTopHalf = [
    {
      id: 1,
      title: "Tìm theo đường đi",
      imgUrl: require("../../assets/homepgicon/tim-duong-icon.png"),
      navFunc: () => {
        dispatch(clearAllRoute());
        navigation.navigate("Address");
      },
    },
    {
      id: 2,
      title: "Tìm trạm gần đây",
      imgUrl: require("../../assets/homepgicon/tram-gan-day-icon.png"),
      navFunc: () => {
        Alert.alert("Unavailable", "Fucntion Unavailable");
      },
    },
    {
      id: 3,
      title: "Thông tin tuyến",
      imgUrl: require("../../assets/homepgicon/thong-tin-tuyen-icon.png"),
      navFunc: () => {
        navigation.navigate("RouteInfo");
      },
    },
    {
      id: 4,
      title: "Thông tin xe",
      imgUrl: require("../../assets/homepgicon/thong-tin-xe-icon.png"),
      navFunc: () => {
        navigation.navigate("BusInfo");
      },
    },
  ];

  const iconListBotHalf = [
    {
      id: 1,
      title: "Phản ánh sai phạm",
      imgUrl: require("../../assets/homepgicon/pha-anh-sai-pham-icon.png"),
      navFunc: () => {
        Alert.alert("Unavailable", "Fucntion Unavailable");
      },
    },
    {
      id: 2,
      title: "Nhận xét dịch vụ",
      imgUrl: require("../../assets/homepgicon/nhan-xet-dich-vu-icon.png"),
      navFunc: () => {
        Alert.alert("Unavailable", "Fucntion Unavailable");
      },
    },
    {
      id: 3,
      title: "Ý tưởng cải thiện",
      imgUrl: require("../../assets/homepgicon/y-tuong-cai-thien.png"),
      navFunc: () => {
        Alert.alert("Unavailable", "Fucntion Unavailable");
      },
    },
    {
      id: 4,
      title: "Hỗ trợ khẩn cấp",
      imgUrl: require("../../assets/homepgicon/ho-tro-khan-cap.png"),
      navFunc: () => {
        Alert.alert("Unavailable", "Fucntion Unavailable");
      },
    },
  ];

  return (
    <View className="bg-white relative flex-1">
      <TopBar />
      {/* Half top */}
      <HalfMIdZone iconList={iconListTopHalf} />

      {/* Cục chặn cái map cho k che chữ */}
      <View className="mb-10"/>
      <Map />
      <View className="bottom-0">
        <HalfMIdZone iconList={iconListBotHalf} />
        <BottomBar className="bg-white" />
      </View>
    </View>
  );
}

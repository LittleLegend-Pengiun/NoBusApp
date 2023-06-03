import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { PROVIDER_GOOGLE } from "react-native-maps";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 290,
    marginTop: 95,
    bottom: 0,
  },
  map: {
    flex: 1, //the container will fill the whole screen.
    ...StyleSheet.absoluteFillObject,
  },
});

export default function ({ navigation }) {
  return (
    <View className="h-full relative">
      {/*Purple Top View*/}
      <View className="bg-purple py-6 w-full">
        <View className="flex-row mt-2 ml-6 items-center space-x-2 mx-3">
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>

          {/*Main label*/}
          <View className="flex flex-col space-y-1">
            <Text className="font-bold text-white text-md">
              Đi từ đường Bùi Quang Là
            </Text>
            <Text
              numberOfLines={1}
              className="font-bold text-white text-md mr-5"
            >
              Đến Trường Đại học Khoa học Xã hội và Nhân văn
            </Text>
          </View>
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

      <View className="absolute inset-x-0 bottom-0 h-1/2 flex flex-col bg-white">
        {/*White bar*/}
        <View className="flex-row space-x-2 items-center py-1 ml-3 bg-white">
          <View className="bg-dark-gray rounded-md  font-bold py-1 px-2 items-center flex-row space-x-2">
            <Image source={require("./img/Vector.png")} />
            <Text className="text-white text-base font-bold">24</Text>
          </View>

          <Image source={require("./img/Ellipse.png")} />

          <View className="bg-black rounded-md  font-bold py-1 px-2 items-center flex-row space-x-2">
            <Image source={require("./img/Vector.png")} />
            <Text className="text-white text-base font-bold">05</Text>
          </View>
        </View>

        {/*Purple Button Bar View*/}
        <View className="bg-purple p-3 w-full items-center justify-center flex flex-row divide-x-[3px] divide-white">
          <View className="pr-10">
            <Text className="text-white text-base font-bold text-center border border-purple border-b-white">
              Chi tiết cách đi
            </Text>
          </View>
          <View className="pl-10">
            <Text className="text-white text-base font-bold">
              Các trạm đi qua
            </Text>
          </View>
        </View>

        {/*White Detail View*/}
        <View className="bg-white flex-1">
          <ScrollView showsVerticalScrollIndicator={false}>
            {/*First*/}
            <View className="mx-1 p-2 flex-row flex-wrap justify-between items-center">
              {/*Back Button*/}
              <View className="flex-row items-center space-x-2">
                <Image source={require("./img/walkright.png")} />
                {/*Main label*/}
                <View className="flex-col">
                  <Text className="text-black text-md">
                    Đi đến trạm
                    <Text className="font-bold"> Làng SOS</Text>
                  </Text>
                  <Text className=" text-black text-md">
                    Xuất phát từ đường Bùi Quang Là
                  </Text>
                </View>
              </View>

              <View className="flex-col items-center">
                {/*Time label*/}
                <Text className="text-purple font-bold text-md">10 phút</Text>
                <Text className="font-bold text-black text-md">877m</Text>
              </View>
            </View>

            {/*Second*/}
            <View className="mx-1 p-2 flex-row flex-wrap justify-between items-center">
              {/*Back Button*/}
              <View className="flex-row items-center space-x-2">
                <Image source={require("./img/buss2.png")} />

                {/*Main label*/}
                <View className="flex-col w-3/4 space-y-1">
                  <Text className=" text-black text-md">
                    Đi tuyến
                    <Text className="font-bold">
                      {" "}
                      24: Bến xe Miền Đông - Hóc Môn{" "}
                    </Text>
                    (Lượt về)
                  </Text>
                  <Text className=" text-black text-md">
                    Làng SOS - Chợ Hàng Xanh
                  </Text>
                </View>
              </View>

              {/*Time label*/}

              <View className="flex-col items-center">
                {/*Time label*/}
                <Text className="text-purple font-bold text-md">27 phút</Text>
                <Text className="font-bold text-black text-md">9.8 km</Text>
              </View>
            </View>

            {/*Third*/}
            <View className="flex-row flex-wrap mx-1 p-2 items-center space-x-2">
              <Image source={require("./img/walkright.png")} />
              {/*Main label*/}
              <Text className="text-black text-md">
                Xuống xe tại trạm
                <Text className="font-bold"> Chợ Hàng Xanh</Text>
              </Text>

              <View />
            </View>

            {/*Fourth*/}
            <View className="mx-1 p-2 flex-row flex-wrap justify-between">
              {/*Back Button*/}
              <View className="flex-row items-center space-x-2">
                <Image source={require("./img/buss2.png")} />

                {/*Main label*/}
                <View className="flex-col w-3/4 space-y-1">
                  <Text className=" text-black text-md">
                    Đi tuyến
                    <Text className="font-bold">
                      {" "}
                      05: Bến xe buýt Chợ Lớn - Bến xe Biên Hòa{" "}
                </Text>
                (Lượt về)
                  </Text>
                  <Text className=" text-black text-md">
                  Chợ Hàng Xanh - Đài truyền hình
                  </Text>
                </View>
              </View>

              {/*Time label*/}

              <View className="flex-col items-center">
                {/*Time label*/}
                <Text className="text-purple font-bold text-md">6 phút</Text>
                <Text className="font-bold text-black text-md">2.3 km</Text>
              </View>
            </View>
            
            {/* Fifth */}
            <View className="mx-1 p-2 flex-row flex-wrap justify-between items-center">
              {/*Back Button*/}
              <View className="flex-row items-center space-x-2">
                <Image source={require("./img/walkright.png")} />
                {/*Main label*/}
                <View className="flex-col w-3/4 space-y-1">
                  <Text className="text-black text-md">
                    Xuống xe tại trạm
                    <Text className="font-bold"> Đài truyền hình </Text>
                    và đi tới điểm đến
                  </Text>
                  <Text className="text-black">
                  Đi đến trường Đại học Khoa học Xã hội và Nhân văn - Dại học Quốc gia TP.HCM
                  </Text>

                </View>
              </View>

              <View className="flex-col items-center">
                {/*Time label*/}
                <Text className="text-purple font-bold text-md">3 phút</Text>
                <Text className="font-bold text-black text-md">332m</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <View className="h-full">
      {/*Purple Top View*/}
      <View className="bg-purple h-[95px] pt-1">

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.navigate("RouteInfo")}>
            <Image source={require('./img/Arrow.png')} className="mt-10 ml-6" />
          </TouchableOpacity>

          {/*Title*/}
          <Image source={require('./img/Vector.png')} className="mt-10 ml-7" />
          <Text className="ml-4 mt-10 text-white text-md font-bold text-base">Tuyến xe Metro</Text>

          {/*Heart*/}
          <Image source={require('./img/heart.png')} className="mt-10 ml-[105px] object-scale-down h-6 w-7" />

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
        />
      </View>

      {/*BẮT ĐẦU DẪN ĐƯỜNG Button*/}
      <TouchableOpacity className="pt-2 pb-2 ml-3 mt-3 mb-2 w-[195px] rounded-3xl bg-purple" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Image source={require('./img/navigate.png')} className="ml-3 mt-1.5" />
        <Text className="text-white font-bold mt-2">&nbsp;&nbsp;&nbsp;Bắt đầu dẫn đường</Text>
      </TouchableOpacity>


      {/*CURRENT LOCATION Button*/}
      <TouchableOpacity className="-mt-[70px] pb-2 ml-[310px] mb-2">
        <Image source={require('./img/Clocation.png')} className="ml-3 mt-1.5" />
      </TouchableOpacity>


      {/*White Bar View*/}
      <View className="bg-white h-[46px] top-[200px]">
        <Text className="bg-gray rounded-md text-purple w-[70px] h-[30px] pl-[14px] pt-1 mt-2 ml-[78%] text-sm">
          Lượt đi
        </Text>
      </View>

      {/*Purple Button Bar View*/}
      <View className="bg-purple h-[50px] top-[200px] w-full items-center justify-center flex flex-row divide-x-[3px] divide-white">
        <View className="pr-[15px]">
          <Text className="text-white text-sm font-bold text-center border border-purple border-b-white">
            Trạm dừng
          </Text>
        </View>
        <View className="pr-[17px] pl-[17px]">
          <Text className="text-white text-sm font-bold">
            Thời gian
          </Text>
        </View>
        <View className="pr-[17px] pl-[17px]">
          <Text className="text-white text-sm font-bold">
            Thông tin
          </Text>
        </View>
        <View className="pl-[17px]">
          <Text className="text-white text-sm font-bold">
            Đánh giá
          </Text>
        </View>
      </View>


      {/*White Detail View*/}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

        <Image source={require('./img/cotmoc.png')} className="mt-[222px] ml-1" />

        {/*Second*/}
        <View className="mt-[225px] -ml-[190px]">
          <View className="pb-[2px] flex-row mb-2 justify-between">
            <Text className="mr-[100px] text-xs">Bến xe Chợ Lớn</Text>
            <Text className="text-xs"></Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: 2,
            }}
            className="w-[310px]"
          />
        </View>

        {/*Second*/}
        <View className="mt-[263px] -ml-[310px]">
          <View className="pb-[2px] flex-row mb-2 justify-between">
            <Text className="mr-[100px] text-xs">Tháp Mười</Text>
            <Text className="text-xs">+2 phút</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: 2,
            }}
            className="w-[310px]"
          />
        </View>

        {/*Third*/}
        <View className="mt-[301px] -ml-[310px]">
          <View className="pb-[2px] flex-row mb-2 justify-between">
            <Text className="mr-[100px] text-xs">Chợ Kim Biên</Text>
            <Text className="text-xs">+3 phút</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: 2,
            }}
            className="w-[310px]"
          />
        </View>

        {/*Fourth*/}
        <View className="mt-[338px] -ml-[310px]">
          <View className="pb-[2px] flex-row mb-2 justify-between">
            <Text className="mr-[100px] text-xs">Bưu điện Quận 5</Text>
            <Text className="text-xs">+4 phút</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: 2,
            }}
            className="w-[310px]"
          />
        </View>

        {/*Fifth*/}
        <View className="mt-[376px] -ml-[310px]">
          <View className="pb-[2px] flex-row mb-2 justify-between">
            <Text className="mr-[100px] text-xs">Rạp Đại Quang</Text>
            <Text className="text-xs">+5 phút</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: 2,
            }}
            className="w-[310px]"
          />
        </View>

        {/*Sixth*/}
        <View className="mt-[413px] -ml-[310px]">
          <View className="pb-[2px] flex-row mb-2 justify-between">
            <Text className="mr-[100px] text-xs">Bệnh viện Chợ Rẫy</Text>
            <Text className="text-xs">+6 phút</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: 2,
            }}
            className="w-[310px]"
          />
        </View>

        {/*Seventh*/}
        <View className="mt-[450px] -ml-[310px]">
          <View className="pb-[2px] flex-row mb-2 justify-between">
            <Text className="mr-[100px] text-xs">Lý Thường Kiệt</Text>
            <Text className="text-xs">+8 phút</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: 2,
            }}
            className="w-[310px]"
          />
        </View>

      </View>
    </View >

  )
}
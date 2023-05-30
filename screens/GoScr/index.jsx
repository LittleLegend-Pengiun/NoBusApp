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
      <View className="bg-purple h-[95px]">

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.navigate("RouteRs")}>
            <Image source={require('./img/Arrow.png')} className="mt-10 ml-6" />
          </TouchableOpacity>

          {/*Main label*/}
          <Text className="mt-9 ml-8 font-bold text-white text-md">Đi từ đường Bùi Quang Là</Text>
          <Text className="ml-[86px] -mt-3 font-bold text-white text-md">Đến Trường Đại học Khoa học Xã hội và Nhân...</Text>

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
          zoomEnabled={false}
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
        {/*First Row*/}
        <Text>
          <TouchableOpacity className="pt-2 pl-3" disabled={true}>
            <Text className="bg-dark-gray rounded-md text-white text-base font-bold w-[60px] h-[30px] pl-2">
              <Image source={require('./img/Vector.png')} className="ml-1" />
              &nbsp;&nbsp;08
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="pt-2 pl-2 pb-3" disabled={true}>
            <Image source={require('./img/Ellipse.png')} />
          </TouchableOpacity>

          <TouchableOpacity className="pt-2 pl-2" disabled={true}>
            <Text className="bg-black rounded-md text-white text-base font-bold w-[60px] h-[30px] pl-2">
              <Image source={require('./img/Vector.png')} className="ml-1" />
              &nbsp;&nbsp;19
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/*Purple Button Bar View*/}
      <View className="bg-purple h-[50px] top-[200px] w-full items-center justify-center flex flex-row divide-x-[3px] divide-dark-purple">
        <TouchableOpacity className="pr-10">
          <Text className="text-white text-base font-bold text-center">
            Chi tiết cách đi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="pl-10" disabled={true}>
          <Text className="text-white text-base font-bold">
            Các trạm đi qua
          </Text>
        </TouchableOpacity>
      </View>

      {/*Horizontal Line*/}
      <View className="top-[200px] w-[194px] -mt-1"
        style={{
          borderBottomColor: '#2D1449',
          borderBottomWidth: 4,
        }}
      />

      {/*White Detail View*/}
      <View className="bg-white h-full top-[200px]">

        {/*First*/}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2 mt-1">
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.navigate("RouteRs")}>
            <Image source={require('./img/walkright.png')} className="mt-4 ml-4" />
          </TouchableOpacity>
          {/*Main label*/}
          <Text className="mt-3 ml-4 text-black text-md">
            Đi đến trạm
            <Text className="font-bold"> Làng SOS</Text>
          </Text>
          <Text className="ml-[60px] -mt-3 text-black text-md">Xuất phát từ đường Bùi Quang Là</Text>

          {/*Time label*/}
          <Text className="-mt-8 ml-14 text-purple font-bold text-md">10 phút</Text>
          <Text className="ml-[335px] -mt-5 font-bold text-black text-md">877m</Text>
        </View>

        {/*Second*/}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2">
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.navigate("RouteRs")}>
            <Image source={require('./img/buss2.png')} className="mt-4 ml-4" />
          </TouchableOpacity>
          {/*Main label*/}
          <Text className="mt-3 ml-4 text-black text-md w-[240px]">
            Đi tuyến
            <Text className="font-bold"> 24: Bến xe Miền Đông - Hóc Môn </Text>
            (Lượt về)
          </Text>
          <Text className="ml-[59px] text-black text-md">Làng SOS - Chợ Hàng Xanh</Text>

          {/*Time label*/}
          <Text className="-mt-8 ml-[97px] text-purple font-bold text-md">27 phút</Text>
          <Text className="ml-[332px] -mt-8 font-bold text-black text-md">9.8km</Text>
        </View>

        {/*Third*/}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2">
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.navigate("RouteRs")}>
            <Image source={require('./img/walkright.png')} className="mt-4 ml-4" />
          </TouchableOpacity>
          {/*Main label*/}
          <Text className="mt-5 ml-4 text-black text-md">
            Xuống xe tại trạm
            <Text className="font-bold"> Chợ Hàng Xanh</Text>
          </Text>
        </View>

        {/*Second*/}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} className="mb-2">
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.navigate("RouteRs")}>
            <Image source={require('./img/buss2.png')} className="mt-4 ml-4" />
          </TouchableOpacity>
          {/*Main label*/}
          <Text className="mt-3 ml-4 text-black text-md w-[240px]">
            Đi tuyến
            <Text className="font-bold"> 05: Bến xe buýt Chợ Lớn - Bến xe Biên Hòa </Text>
            (Lượt về)
          </Text>
          <Text className="ml-[59px] text-black text-md">Chợ Hàng Xanh - Đài truyền hình</Text>

          {/*Time label*/}
          <Text className="-mt-8 ml-[68px] text-purple font-bold text-md">6 phút</Text>
          <Text className="ml-[332px] -mt-8 font-bold text-black text-md">2.3km</Text>
        </View>
      </View >
    </View >

  )
}
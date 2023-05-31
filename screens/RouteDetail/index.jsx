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
          <TouchableOpacity onPress={() => navigation.navigate("RouteInfo")}>
            <Image source={require('./img/Arrow.png')} className="mt-10 ml-6" />
          </TouchableOpacity>

          {/*Title*/}
          <Image source={require('./img/Vector.png')} className="mt-10 ml-4" />
          <Text className="ml-5 mt-10 text-white text-md font-bold text-base">Tuyến xe Metro</Text>

          {/*Heart*/}
          <Image source={require('./img/heart.png')} className="mt-10 ml-[112px] object-scale-down h-6 w-7" />

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
        <Text className="bg-dark-gray rounded-md text-purple text-base w-[60px] h-[30px] pl-1 mt-2 ml-[80%]">
          Lượt đi
        </Text>
      </View>

      {/*Purple Button Bar View*/}
      <View className="bg-purple h-[50px] top-[200px] w-full items-center justify-evenly flex flex-row divide-x-[3px] divide-dark-purple">
        <TouchableOpacity>
          <Text className="text-white text-sm font-bold ">
            Trạm dừng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={true}> 
          <Text className="text-white text-sm font-bold">
            Thời gian
          </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={true}>
          <Text className="text-white text-sm font-bold">
            Thông tin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={true}>
          <Text className="text-white text-sm font-bold">
            Đánh giá
          </Text>
        </TouchableOpacity>
      </View>

      {/*Horizontal Line*/}
      <View className="top-[200px] w-[25%] -mt-1"
        style={{
          borderBottomColor: '#2D1449',
          borderBottomWidth: 4,
        }}
      />

      {/*White Detail View*/}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        
        <Image source={require('./img/cotmoc.png')} className="mt-[210px] ml-4" />

        {/*First*/}
        <View>
          <Text>
            Bến xe Chợ Lớn
          </Text>
          <View className="top-[200px] w-[25%]"
            style={{
              borderBottomColor: '#4B4B4B',
              borderBottomWidth: 4,
            }}
          />
        </View>

        {/*Second*/}
        <View>
          <Text>
            Tháp Mười                      +2 phút
          </Text>
          <View className="top-[200px] w-[25%]"
            style={{
              borderBottomColor: '#4B4B4B',
              borderBottomWidth: 4,
            }}
          />
        </View>

        {/*Third*/}
        <View>
          <Text>
            Chơ Kim Biên                      +3 phút
          </Text>
          <View className="top-[200px] w-[25%]"
            style={{
              borderBottomColor: '#4B4B4B',
              borderBottomWidth: 4,
            }}
          />
        </View>

        {/*Fourth*/}
        <View>
          <Text>
            Bưu điệm Quận 5                      +4 phút
          </Text>
          <View className="top-[200px] w-[25%]"
            style={{
              borderBottomColor: '#4B4B4B',
              borderBottomWidth: 4,
            }}
          />
        </View>

        {/*Fifth*/}
        <View>
          <Text>
            Rạp Đại Quang                      +5 phút
          </Text>
          <View className="top-[200px] w-[25%]"
            style={{
              borderBottomColor: '#4B4B4B',
              borderBottomWidth: 4,
            }}
          />
        </View>

        {/*Sixth*/}
        <View>
          <Text>
            Bệnh viện Chợ Rẫy                      +6 phút
          </Text>
          <View className="top-[200px] w-[25%]"
            style={{
              borderBottomColor: '#4B4B4B',
              borderBottomWidth: 4,
            }}
          />
        </View>

        {/*Seventh*/}
        <View>
          <Text>
            Lý Thường Kiệt                      +8 phút
          </Text>
        </View>

      </View>
    </View >

  )
}
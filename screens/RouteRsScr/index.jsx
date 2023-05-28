import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function ({ navigation }) {
  return (
    <View className="bg-purple h-full">
      {/*Top View*/}
      <View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={require('./img/Arrow.png')} className="mt-10 ml-6" />
          </TouchableOpacity>

          {/*Main label*/}
          <Text className="mt-10 ml-8 font-bold text-white text-lg">Tra cứu theo đường đi</Text>

          {/*Refresh Button*/}
          <TouchableOpacity>
            <Image source={require('./img/Refresh.png')} className="-mt-[33px] ml-[340px]" />
          </TouchableOpacity>
        </View>

        {/*ĐI TỪ Button*/}
        <TouchableOpacity className="p-3.5 ml-5 mr-5 mt-6 mb-2 rounded-2xl bg-dark-purple" onPress={() => navigation.navigate("FindPlace")}>
          <Text className="ml-3">
            <Text className="text-white font-bold">Đi từ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Text className="text-white inline">Vị trí hiện tại</Text>
          </Text>
          <Image source={require('./img/pluscircle.png')} className="-mt-5 ml-[58px]" />
        </TouchableOpacity>

        {/*ĐẾN Button*/}
        <TouchableOpacity className="p-3.5 ml-5 mr-5 mt-1 mb-2 rounded-2xl bg-dark-purple" onPress={() => navigation.navigate("FindPlace")}>
          <Text className="ml-3">
            <Text className="text-white font-bold">Đến&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Text className="text-white inline">Nhập điểm đến</Text>
          </Text>
          <Image source={require('./img/Subtract.png')} className="-mt-6 ml-[58px]" />
        </TouchableOpacity>

        {/*SWITCH POSITION Button*/}
        <TouchableOpacity className="w-[50px] h-[50px] -mt-[90px] mb-11 ml-[338px] rounded-xl bg-purple">
          <Image source={require('./img/Collapse.png')} className="mt-3 ml-2" />
        </TouchableOpacity>

        {/*CÁC CÁCH DI CHUYỂN PHÙ HỢP Label*/}
        <Text className="font-bold text-white text-lg ml-6 mt-1">Các cách di chuyển phù hợp</Text>

      </View>
      
      {/*CÁC CÁCH DI CHUYỂN View*/}
      <View className="bg-white h-[450px] ml-5 mr-5 mt-6 mb-2  rounded-xl">

      </View>
    </View>

  )
}
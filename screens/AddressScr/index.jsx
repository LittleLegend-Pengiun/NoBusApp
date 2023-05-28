import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 420,
    marginTop: 360,
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
      <View className="bg-purple h-[360px]">

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

        {/*ĐiTỐI ĐA 2 CHUYẾN Button*/}
        <TouchableOpacity>
          <Text className="text-white ml-6 mt-3 pb-1">Đi tối đa 2 chuyến&nbsp;&nbsp;&nbsp;&nbsp;
            <Image source={require('./img/down.png')} />
          </Text>

        </TouchableOpacity>

        {/*TÌM ĐƯỜNG Button*/}
        <TouchableOpacity className="p-2.5 ml-5 mr-5 mt-6 mb-2 rounded-2xl bg-white" onPress={() => navigation.navigate("RouteRs")}>
          <Text className="text-purple font-bold text-center text-lg">TÌM ĐƯỜNG</Text>
        </TouchableOpacity>

      </View>

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
    </View>

  )
}
import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from 'react-native-maps';
import AntDesign from "react-native-vector-icons/AntDesign";
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

export default function ({ navigation }) {
  return (







    <View className="h-full relative">

      <View className="bg-purple h-[95px]">

        <View className="flex-row  mt-10 mx-6">

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Image
            className="ml-4"
            source={require('./img/Vector.png')} />
          <Text className="font-bold text-white text-lg">   50F-002.12</Text>
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
          provider={PROVIDER_GOOGLE}
        />
      </View>





      <View className=" flex-col bg-white absolute inset-x-0 bottom-0 h-[135px]">
        <View className="flex-row">
          <Text className="ml-4 border-2 border-black font-bold text-black text-2xl">  50F-002.12  </Text>
          <Image
            className="ml-4"
            source={require('./img/Wifi.png')} />
          <Image
            className="ml-4"
            source={require('./img/Clock.png')} />
          <Text className="ml-4 font-bold text-sm">30km/h</Text>
          <Image
            className="ml-4"
            source={require('./img/Phone.png')} />
        </View>
        <View className="flex-row flex-wrap">
          <Text className="ml-4 text-sm">Công viên phần mềm Quang trung - Bến xe Miền Đông mới</Text>
          <Text className="ml-4 italic text-purple text-sm">(lượt đi)</Text>
        </View>

      </View>






    </View >

  )
}
import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
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

export default function ({ route, navigation }) {
  const { busTitle, desc } = route.params;
  const max = 40,
    min = 5;
  const speed = Math.floor(Math.random() * (max - min)) + min;
  return (
    <View className="h-full relative">
      {/* title */}
      <View className="bg-purple pb-5">
        <View className="flex-row items-center mt-10 mx-6">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Image className="ml-4 mr-3" source={require("./img/Vector.png")} />
          <Text className="font-bold text-white text-lg">{busTitle}</Text>
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

      <View className=" flex-col bg-white absolute inset-x-0 bottom-0 py-5">
        <View className="flex-row items-center justify-between">
          <Text className="ml-4 border-2 border-black font-bold text-black text-2xl">
            {" "}
            {busTitle}{" "}
          </Text>
          <View className="flex-row space-x-3 mr-4">
            <Image className="" source={require("./img/Wifi.png")} />
            <Image className="" source={require("./img/Clock.png")} />
            <Text className="font-bold text-sm">{speed}km/h</Text>
            <Image className="" source={require("./img/Phone.png")} />
          </View>
        </View>
        <View className="flex-row flex-wrap mt-3">
          <Text className="mx-4 text-sm">
            {desc}
            <Text className="italic text-purple text-sm"> (lượt đi)</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

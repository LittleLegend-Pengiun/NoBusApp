import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";

export default function({ navigation }){
  return (
    <View className="bg-purple h-full">
      <TopBar />

      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        {/*Back Button*/}
        <TouchableOpacity onPress={() => navigation.navigate("Address")}>
          <Image source={require('./img/Arrow.png')} className="mt-10 ml-6" />
        </TouchableOpacity>

        {/*Main label*/}
        <Text className="mt-10 ml-8 font-bold text-white text-lg">Thông tin tuyến</Text>

      </View>

    </View>
  )
};

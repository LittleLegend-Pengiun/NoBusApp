import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function ({ navigation }) {
  return (
    <View className="bg-purple h-full">

      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        {/*Back Button*/}
        <TouchableOpacity onPress={() => navigation.navigate("Address")}>
          <Image source={require('./img/Arrow.png')} className="mt-10 ml-6" />
        </TouchableOpacity>

        {/*Main label*/}
        <Text className="mt-10 ml-8 font-bold text-white text-lg">Tra cứu theo đường đi</Text>

      </View>

    </View>
  )
}
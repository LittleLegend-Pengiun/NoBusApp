import React from 'react'
import { Text, View, Image, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import PageTitle from '../components/PageTitle';
import AddressInput from '../components/AddressInput';
import InfoTab from './components/InfoTab';
import { ScrollView } from 'react-native';

const suggestWays = [
  {
    key: 1,
    busStart: "24",
    busEnd: "05",
    timeExpected: 43,
    price: 17,
    walkingDistance: "0,87",
    journeyLength: "12,1",
  },
  {
    key: 2,
    busStart: "08",
    busEnd: "19",
    timeExpected: 49,
    price: 17,
    walkingDistance: "1,2",
    journeyLength: "12,3",
  },
  {
    key: 3,
    busStart: "08",
    busEnd: "19",
    timeExpected: 49,
    price: 17,
    walkingDistance: "1,2",
    journeyLength: "12,3",
  },
  {
    key: 4,
    busStart: "08",
    busEnd: "19",
    timeExpected: 49,
    price: 17,
    walkingDistance: "1,2",
    journeyLength: "12,3",
  },
  {
    key: 5,
    busStart: "08",
    busEnd: "19",
    timeExpected: 49,
    price: 17,
    walkingDistance: "1,2",
    journeyLength: "12,3",
  }
]


export default function ({ navigation }) {
  return (
    <View className="bg-purple h-full">
      {/*Top View*/}
      <View>
        <PageTitle title={"Tra cứu theo đường đi"} navigation={navigation} showReload={true}/>

        <AddressInput navigation={navigation} />

        {/*CÁC CÁCH DI CHUYỂN PHÙ HỢP Label*/}
        <Text className="font-bold text-white text-lg ml-6 mt-1">Các cách di chuyển phù hợp</Text>

      </View>

      {/*CÁC CÁCH DI CHUYỂN View*/}
      <View className="bg-white ml-5 h-3/5 mr-5 mt-3 mb-2 rounded-2xl">
        <ScrollView className="h-full w-full"
         showsVerticalScrollIndicator={false}
        >
          {suggestWays.map((way) => {
            return (
              <InfoTab navigation={navigation} 
                {...way}
              />
            )
          })}
        </ScrollView>

      </View>
    </View>

  )
}
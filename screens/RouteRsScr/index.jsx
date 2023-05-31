import React from 'react'
import { Text, View, Image, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import PageTitle from '../components/PageTitle';
import AddressInput from '../components/AddressInput';

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
      <View className="bg-white h-[450px] ml-5 mr-5 mt-6 mb-2 rounded-2xl">
        
        {/*24-05*/}
        <TouchableOpacity onPress={() => navigation.navigate("Gooo")}>
          {/*First Row*/}
          <Text>
            <TouchableOpacity className="pt-2 pl-4" disabled={true}>
              <Text className="bg-dark-green rounded-md text-white text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                <Image source={require('./img/G47.png')} className="ml-1" />
                &nbsp;&nbsp;24
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-2 pb-3" disabled={true}>
              <Image source={require('./img/Ellipse.png')} />
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-2" disabled={true}>
              <Text className="bg-orange rounded-md text-white text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                <Image source={require('./img/G472.png')} className="ml-1" />
                &nbsp;&nbsp;05
              </Text>
            </TouchableOpacity>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TouchableOpacity className="pt-2 pl-2" disabled={true}>
              <Text className="bg-white border-black border-solid border rounded-xl text-dark-gray text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                17k đ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-3 flex-wrap text-center" disabled={true}>
              <Text className="bg-white rounded-md text-purple text-2xl font-bold text-center">
                43
              </Text>
              <Text className="bg-white rounded-md text-purple text-sm -mt-1 -mb-2 text-center">
                phút
              </Text>
            </TouchableOpacity>
          </Text>

          {/*Second Row*/}
          <Text className="text-dark-gray pl-3.5">
            <Image source={require('./img/human.png')} />&nbsp;&nbsp;
            877 m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image source={require('./img/buss.png')} />&nbsp;&nbsp;
            12,1 km
          </Text>

          {/*Third Row*/}
          <Text className="pl-3.5 pb-3 pt-0.5">
            <Image source={require('./img/clockk.png')} />&nbsp;&nbsp;
            <Text className="text-black">xe tới trong 34 phút</Text>&nbsp;
            <Text className="text-dark-gray font-bold">tại trạm Làng SOS</Text>
          </Text>

          {/*Horizontal Line*/}
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
        </TouchableOpacity>


        {/*08-19*/}
        <TouchableOpacity onPress={() => navigation.navigate("Gooo")}>
          {/*First Row*/}
          <Text>
            <TouchableOpacity className="pt-2 pl-4" disabled={true}>
              <Text className="bg-dark-green rounded-md text-white text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                <Image source={require('./img/G47.png')} className="ml-1" />
                &nbsp;&nbsp;08
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-2 pb-3" disabled={true}>
              <Image source={require('./img/Ellipse.png')} />
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-2" disabled={true}>
              <Text className="bg-orange rounded-md text-white text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                <Image source={require('./img/G472.png')} className="ml-1" />
                &nbsp;&nbsp;19
              </Text>
            </TouchableOpacity>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TouchableOpacity className="pt-2 pl-2" disabled={true}>
              <Text className="bg-white border-black border-solid border rounded-xl text-dark-gray text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                17k đ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-3 flex-wrap text-center" disabled={true}>
              <Text className="bg-white rounded-md text-purple text-2xl font-bold text-center">
                49
              </Text>
              <Text className="bg-white rounded-md text-purple text-sm -mt-1 -mb-2 text-center">
                phút
              </Text>
            </TouchableOpacity>
          </Text>

          {/*Second Row*/}
          <Text className="text-dark-gray pl-3.5">
            <Image source={require('./img/human.png')} />&nbsp;&nbsp;
            1,2 km&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image source={require('./img/buss.png')} />&nbsp;&nbsp;
            12,3 km
          </Text>

          {/*Third Row*/}
          <Text className="pl-3.5 pb-3 pt-0.5">
            <Image source={require('./img/clockk.png')} />&nbsp;&nbsp;
            <Text className="text-black">xe tới trong 34 phút</Text>&nbsp;
            <Text className="text-dark-gray font-bold">tại trạm Làng SOS</Text>
          </Text>

          {/*Horizontal Line*/}
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
        </TouchableOpacity>


        {/*08-19*/}
        <TouchableOpacity onPress={() => navigation.navigate("Gooo")}>
          {/*First Row*/}
          <Text>
            <TouchableOpacity className="pt-2 pl-4" disabled={true}>
              <Text className="bg-dark-green rounded-md text-white text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                <Image source={require('./img/G47.png')} className="ml-1" />
                &nbsp;&nbsp;08
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-2 pb-3" disabled={true}>
              <Image source={require('./img/Ellipse.png')} />
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-2" disabled={true}>
              <Text className="bg-orange rounded-md text-white text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                <Image source={require('./img/G472.png')} className="ml-1" />
                &nbsp;&nbsp;19
              </Text>
            </TouchableOpacity>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TouchableOpacity className="pt-2 pl-2" disabled={true}>
              <Text className="bg-white border-black border-solid border rounded-xl text-dark-gray text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                17k đ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-3 flex-wrap text-center" disabled={true}>
              <Text className="bg-white rounded-md text-purple text-2xl font-bold text-center">
                49
              </Text>
              <Text className="bg-white rounded-md text-purple text-sm -mt-1 -mb-2 text-center">
                phút
              </Text>
            </TouchableOpacity>
          </Text>

          {/*Second Row*/}
          <Text className="text-dark-gray pl-3.5">
            <Image source={require('./img/human.png')} />&nbsp;&nbsp;
            1,2 km&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image source={require('./img/buss.png')} />&nbsp;&nbsp;
            12,3 km
          </Text>

          {/*Third Row*/}
          <Text className="pl-3.5 pb-3 pt-0.5">
            <Image source={require('./img/clockk.png')} />&nbsp;&nbsp;
            <Text className="text-black">xe tới trong 34 phút</Text>&nbsp;
            <Text className="text-dark-gray font-bold">tại trạm Làng SOS</Text>
          </Text>

          {/*Horizontal Line*/}
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
        </TouchableOpacity>

        
        {/*08-19*/}
        <TouchableOpacity onPress={() => navigation.navigate("Gooo")}>
          {/*First Row*/}
          <Text>
            <TouchableOpacity className="pt-2 pl-4" disabled={true}>
              <Text className="bg-dark-green rounded-md text-white text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                <Image source={require('./img/G47.png')} className="ml-1" />
                &nbsp;&nbsp;08
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-2 pb-3" disabled={true}>
              <Image source={require('./img/Ellipse.png')} />
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-2" disabled={true}>
              <Text className="bg-orange rounded-md text-white text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                <Image source={require('./img/G472.png')} className="ml-1" />
                &nbsp;&nbsp;19
              </Text>
            </TouchableOpacity>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TouchableOpacity className="pt-2 pl-2" disabled={true}>
              <Text className="bg-white border-black border-solid border rounded-xl text-dark-gray text-base font-bold w-[60px] h-[35px] pl-2 pt-1">
                17k đ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="pt-2 pl-3 flex-wrap text-center" disabled={true}>
              <Text className="bg-white rounded-md text-purple text-2xl font-bold text-center">
                49
              </Text>
              <Text className="bg-white rounded-md text-purple text-sm -mt-1 -mb-2 text-center">
                phút
              </Text>
            </TouchableOpacity>
          </Text>

          {/*Second Row*/}
          <Text className="text-dark-gray pl-3.5">
            <Image source={require('./img/human.png')} />&nbsp;&nbsp;
            1,2 km&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image source={require('./img/buss.png')} />&nbsp;&nbsp;
            12,3 km
          </Text>

          {/*Third Row*/}
          <Text className="pl-3.5 pb-3 pt-0.5">
            <Image source={require('./img/clockk.png')} />&nbsp;&nbsp;
            <Text className="text-black">xe tới trong 34 phút</Text>&nbsp;
            <Text className="text-dark-gray font-bold">tại trạm Làng SOS</Text>
          </Text>

        </TouchableOpacity>

      </View>
    </View>

  )
}
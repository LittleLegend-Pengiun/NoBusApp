import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import PageTitle from '../components/PageTitle';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import AddressInput from '../components/AddressInput';

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

        <PageTitle title="Tra cứu đường đi" navigation={navigation} showReload={false}/>

        <AddressInput navigation={navigation} />

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
          zoomEnabled={false}
          provider={PROVIDER_GOOGLE}
        />
      </View>
    </View>

  )
}
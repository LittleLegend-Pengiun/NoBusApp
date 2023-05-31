import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from 'react-native-maps';

export default function () {
  return (
    <View className="h-1/2 w-full flex-auto">
    {/*MAP*/}
    <MapView
             className="flex-1 -mt-10 -z-10"
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
  );
}
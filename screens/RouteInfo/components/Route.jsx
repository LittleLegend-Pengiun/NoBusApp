import React from "react"
import { Image, TouchableOpacity, View, Text } from "react-native"
import Heart from "./Heart"
import Time from "./Time"
import Money from "./Money"

function Route({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("RouteDetail")} className="mb-[5px]">
        {/*Bus Button*/}
        <TouchableOpacity onPress={() => null}>
            <Image source={require('../img/buss2.png')} className="mt-4 ml-5" />
        </TouchableOpacity>

        {/*Main label*/}
        <View className="-mt-[55px] ml-12">
            <Text className="mt-2 ml-5 text-black text-md w-[240px] font-bold text-lg">
                Metro 1
            </Text>
            <Text className="ml-[20px] text-black text-md">Bến Thành - Suối Tiên</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Time/>
                <Money/>
            </View>
        </View>

        {/*Time label*/}
        <Heart/>
    </TouchableOpacity>
  );
}

export default Route;

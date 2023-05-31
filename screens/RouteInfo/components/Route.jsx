import React from "react"
import { Image, TouchableOpacity, View, Text } from "react-native"
import Heart from "./Heart"
import Time from "./Time"
import Money from "./Money"

function Route({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("RouteDetail")} className="mb-2">
        {/*Bus Button*/}
        <TouchableOpacity onPress={() => null}>
            <Image source={require('../img/buss2.png')} className="mt-4 ml-4" />
        </TouchableOpacity>

        {/*Main label*/}
        <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
            <Text className="mt-3 ml-4 text-black text-md w-[240px] font-bold text-lg">
                Metro 1
            </Text>
            <Text className="ml-[59px] text-black text-md">Bến Thành - Suối Tiên</Text>
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

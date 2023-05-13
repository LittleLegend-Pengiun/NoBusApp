import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HCBotBarIcon from './HCBotBarIcon'

const icons = [
    {
        id: "home",
        outline: "home-outline",
        fill: "home-sharp",
        Comp: Ionicons,
    },
    {
        id: "bell",
        outline: "bell-outline",
        fill: "bell",
        Comp: MaterialCommunityIcons,
    },
    {
        id: "heart",
        outline: "heart-outline",
        fill: "heart-sharp",
        Comp: Ionicons
    },
    {
        id: "user",
        outline: "user-o",
        fill: "user",
        Comp: FontAwesome,
    }
]


function HCBottomBar() {
    const [icon, setIcon] = useState("home");
  return (
    <View className="bg-purple py-2 w-full items-center justify-center flex flex-row">
        {icons.map(({ id, outline, fill, Comp}) => (
            <HCBotBarIcon 
            key={id}
            outline={outline}
            fill={fill}
            IconComp={Comp}
            currentIcon={icon}
            setIcon={setIcon}
            id={id}
            />
        ))}
        
    </View>
  )
}

export default HCBottomBar
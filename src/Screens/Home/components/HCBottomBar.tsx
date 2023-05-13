import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HCBotBarIcon from './HCBotBarIcon'

const icons = {
    home: {
        outline: "home-outline",
        fill: "home-sharp",
    },
    bell: {
        outline: "bell-outline",
        fill: "bell",
    },
    heart: {
        outline: "heart-outline",
        fill: "heart-sharp",
    },
    user: {
        outline: "user-o",
        fill: "user",
    }
}


function HCBottomBar() {
    const [icon, setIcon] = useState("home");
  return (
    <View className="bg-purple py-2 w-full items-center justify-center flex flex-row">
        {/* home */}
        <HCBotBarIcon 
         outline={icons.home.outline}
         fill={icons.home.fill}
         IconComp={Ionicons}
         currentIcon={icon}
         setIcon={setIcon}
         id={"home"}
        />
        {/*bell, */}
        <HCBotBarIcon 
         outline={icons.bell.outline}
         fill={icons.bell.fill}
         IconComp={MaterialCommunityIcons}
         currentIcon={icon}
         setIcon={setIcon}
         id={"bell"}
        />
        {/* heart */}
        <HCBotBarIcon 
         outline={icons.heart.outline}
         fill={icons.heart.fill}
         IconComp={Ionicons}
         currentIcon={icon}
         setIcon={setIcon}
         id={"heart"}
        />
        {/* user */}
        <HCBotBarIcon
         outline={icons.user.outline}
         fill={icons.user.fill}
         IconComp={FontAwesome}
         currentIcon={icon}
         setIcon={setIcon}
         id={"user"}
        />
    </View>
  )
}

export default HCBottomBar
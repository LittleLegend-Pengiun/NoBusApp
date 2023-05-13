import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { User } from "@/Services";
import HCBottomBar from "./components/HCBottomBar";


export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Home = (props: IHomeProps) => {
  return (
    <View className="bg-white">
      <HCBottomBar />
    </View>
  )
};

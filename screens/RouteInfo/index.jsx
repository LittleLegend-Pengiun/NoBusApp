import React from 'react'
import { Text, View } from 'react-native'
import TopBar from './components/TopBar'

export default function () {
  return (
    <View className="bg-white items-center">
        <View className="h-10"></View>
        <TopBar />
    </View>
  )
}
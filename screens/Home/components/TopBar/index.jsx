import React from 'react'
import { Image, View } from 'react-native'
import SearchBar from './components/SearchBar'

export default function() {
  return (
    <>
      {/* Search bar */}
      <SearchBar />

      <View className="flex flex-col">
        {/* First half of top bar*/}
        <View className="bg-purple pt-10 pb-4 w-full flex flex-row">
          <View className="flex-1" />
          <Image 
          source={require("../../../../assets/title.png")}
          className="h-20 pt-1"
          />
        </View>

        {/* Second half of top bar*/}
        <View className="bg-white p-4" />
      </View>
    </>
  )
}
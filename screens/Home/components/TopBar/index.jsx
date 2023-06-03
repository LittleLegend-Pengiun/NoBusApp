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
        <View className="bg-purple pt-10 pb-4 w-full h-32 relative">
        <Image 
          source={require("./img/Logo.png")}
          className="h-14 absolute left-2 top-12"
          />
          <Image 
          source={require("./img/bus.png")}
          className="h-20 absolute right-0 top-10"
          />
        </View>

        {/* Second half of top bar*/}
        <View className="bg-white p-4" />
      </View>
    </>
  )
}
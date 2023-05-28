import React from 'react'
import { Text, TextInput, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function() {
  return (
    <View className="absolute top-28 z-50 w-full">
        <View className="w-11/12 items-center flex-row space-x-2 flex-1 bg-white p-2 self-center border border-purple rounded-lg drop-shadow-lg">
          <AntDesign name="search1" size={20} color="gray"/>
          <TextInput 
           placeholder='Tìm kiếm địa điểm'
           keyboardType='default'
           className="pl-1 self-center"
          />
        </View>
    </View>
  )
}
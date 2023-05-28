import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

function Category({ title, icon, color }) {
  return (
    <TouchableOpacity className={`flex-row ${color} p-2 space-x-2 m-2 rounded-lg items-center `}>
        <Image 
         source={icon}
        />
        <Text className="text-base">{title}</Text>
    </TouchableOpacity>
  )
}

export default Category
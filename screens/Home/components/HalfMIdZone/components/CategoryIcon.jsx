import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

function CategoryIcon({ title, imgUrl, navFunc }) {
  return (
    <TouchableOpacity className="flex flex-col w-1/4 p-2 items-center"
     onPress={navFunc}
    >
        <Image 
         source={imgUrl}
         className="h-14 p-1 m-1"
        />
        <Text className="text-center">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryIcon
import React from 'react'
import { View } from 'react-native'
import CategoryIcon from './components/CategoryIcon'


export default function ({iconList}) {
  return (
    <View className="bg-white flex flex-row py-3">
        {iconList && iconList.map((item) => (
            <CategoryIcon 
             key={item.id}
             title={item.title}
             imgUrl={item.imgUrl}
             navFunc={item.navFunc}
            />
        ))}
    </View>
  )
}
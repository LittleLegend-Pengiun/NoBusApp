import React from 'react'

function CategoryIcon({ title, imgUrl }) {
  return (
    <View className="flex flex-col">
        <Image 
         source={require(imgUrl)}
         className="h-10 p-2 m-2"
        />
        <View>{title}</View>
    </View>
  )
}

export default CategoryIcon
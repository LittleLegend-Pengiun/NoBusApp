import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

function HCBotBarIcon({outline, fill, IconComp, currentIcon, setIcon, id}) {
    function handleTouch() {
        setIcon(id);
    }
    const icon = id == currentIcon ? fill : outline;
  return (
    <TouchableOpacity onPress={() => handleTouch()}
     className="p-1 w-1/4 items-center"
    >
        <IconComp name={icon} size={25} color="white"/>
    </TouchableOpacity>
  )
}

export default HCBotBarIcon
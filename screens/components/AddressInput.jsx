import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { useSelector, useDispatch } from "react-redux";
import {
  endValue,
  reverseValue,
  startValue,
  switchEnd,
  switchStart,
} from "../../store/routeSlice";

function AddressInput({navigation}) {
  const dispatch = useDispatch();
  const start = useSelector(startValue);
  const end = useSelector(endValue);
  return (
    <View className="mx-5 mt-6 mb-2 relative aligh-center w-11/12">
      {/*ĐI TỪ Button*/}
      <TouchableOpacity
        className="p-3.5 mb-2 rounded-2xl bg-dark-purple flex-row space-x-2 items-center"
        onPress={() => {
          dispatch(switchStart());
          navigation.navigate("FindPlace");
        }}
      >
        <Text className="text-white font-bold">Đi từ</Text>
        <Image source={require("./img/pluscircle.png")} className="h-5 w-5" />
        <Text className="text-white inline">
          {start == "" ? "Chọn điểm khởi hành" : start}
        </Text>
      </TouchableOpacity>

      {/*ĐẾN Button*/}
      <TouchableOpacity
        className="p-3.5 mt-1 rounded-2xl bg-dark-purple flex-row space-x-2 items-center"
        onPress={() => {
          dispatch(switchEnd());
          navigation.navigate("FindPlace");
        }}
      >
        <Text className="text-white font-bold">Đến  </Text>
        <Image
          source={require("./img/Subtract.png")}
          className="h-6"
        />
        <Text className="text-white inline">
            {end == "" ? "Nhập điểm đến" : end}
        </Text>
        
      </TouchableOpacity>

      {/*SWITCH POSITION Button*/}
      <TouchableOpacity className="p-1 w-16 items-center rounded-xl bg-purple rotate-90 absolute -right-3 top-1/3"
       onPress={() => dispatch(reverseValue())}
      >
        <Octicons name="arrow-switch" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default AddressInput;

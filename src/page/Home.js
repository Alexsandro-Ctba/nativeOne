import React from "react";
import {View, Text} from 'react-native';


export default function Home(){
  return(
    <View style={{ flex:1, justifyContent:'center', alignItems:'center',
    backgroundColor:'#000'}}>
      <Text style={{ color:'#fff' }}>
        NativeOne
      </Text>
    </View>
  )
}
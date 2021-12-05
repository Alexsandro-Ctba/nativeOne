import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


export function Skillcard({item}){
    return(
        <TouchableOpacity style={styles.buttonSkill}>
        <Text style={styles.textskill}>
                {item}
          </Text>
       </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    textskill:{
        color:'#fff',
        fontSize:18, 
        fontWeight:'bold'
      },
        buttonSkill:{
          backgroundColor:'#1f1e25',
          borderRadius:50,
          padding:15,
          alignItems:'center',   
          marginBottom:10    
        }
})
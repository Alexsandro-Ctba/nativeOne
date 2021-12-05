import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps{
  item:string;
}

export function Skillcard({item, ...rest}:SkillCardProps){
    return(
        <TouchableOpacity style={styles.buttonSkill}
        {...rest}
        >
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
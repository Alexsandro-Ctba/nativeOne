import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home(){

  const [newSkill, setNewSkill] = useState()
  const [mySkill, setMySkill] = useState([]);

  function handleAddSkill(){
    setMySkill(oldState =>[...oldState, newSkill])
  }
  return(
    <View style={styles.container}>
      <Text style={styles.initial}>Configurando Skills</Text>

      <TextInput style={styles.input}
      placeholder="Insert new Skill here"
      placeholderTextColor='#555'
      //na alteração efetua-se o setNellSkill
      onChangeText={setNewSkill}/>

      <TouchableOpacity style={styles.addButton}
      activeOpacity={0.7}
      //no pressionando do button efetua-se o handleAddSkill
      onPress={handleAddSkill}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical:50}]}>My Skills</Text>

      {
        //percorrendo o Array myskill
        mySkill.map(skill=>(
          <TouchableOpacity key={skill} style={[styles.buttonSkill]}>
          <Text style={styles.textSkill}>
      {skill}
          </Text>
        </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#121015'
  },
  initial:{color:'#fff',
  fontWeight:'bold',
  fontSize:18,
  marginVertical:20,
  marginHorizontal:20
},
input:{backgroundColor:'#1f1e25',borderRadius:7, marginHorizontal:20,
padding:10,fontSize:18,color:'#fff'},
addButtonText:{
  color:'#fff', fontSize:18,fontWeight:'bold'
},
addButton:{
  backgroundColor:'#a370f7',padding:10,marginHorizontal:20,borderRadius:7,
  marginVertical:10,alignItems:'center'
},
title:{color:'#fff', fontSize:18,marginLeft:20},
buttonSkill:{backgroundColor:'#1f1e25',marginHorizontal:20,padding:20
,borderRadius:50,alignItems:'center',marginVertical:5},
textSkill:{color:'#fff',fontSize:24, textTransform:"uppercase"}
})
import React, { useState } from "react";
import {
  Platform, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';


export default function Home(){
  // armazena apenas 1 skill
  const [newSkill, setNewSkill] = useState();
   //armazena todas as skills 
   const [mySkills, setMySkills] = useState([]);

   //usar handle quando o processo partir do clique de usuários
   function handleAddNewSkill(){
      setMySkills(oldState => [...mySkills, newSkill])
   }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        NativeOne
      </Text>

      <TextInput 
      style={styles.input}
      placeholder="insira o valor aqui"
      placeholderTextColor="#555"
      onChangeText={setNewSkill}
      />
      {/* exibindo botão = button
        activeOpacity = controlando a opacidade no clique
      */}
      <TouchableOpacity style={styles.button} activeOpacity={0.7}
        onPressIn={handleAddNewSkill}
      >
      <Text style={styles.buttonText}>Add</Text>
      
      </TouchableOpacity>
      
      {/* colocando margin de 50 em cima e amabixo */}
      <Text style={[styles.title, {marginVertical:50}]}>
        My Skills
      </Text>

 {     
  mySkills.map(skills  =>(
    <TouchableOpacity key={skills} style={styles.buttonSkill}>
    <Text style={[styles.textSkill]}>
        {skills}
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
    paddingHorizontal:20,
    paddingHorizontal:70,
    paddingHorizontal:30,
    backgroundColor:'#121015'
  },
  title:{
    color:'#fff',
    fontSize:24,
    fontWeight:'bold'
  },
  input:{
    backgroundColor:'#1f1e25',
    color:'#fff',
    borderRadius:5,
    fontSize:18,
    padding:Platform.OS ==='ios'? 15 : 10,marginTop:30
  },
  button:{
    backgroundColor:'#a370f7',
    padding:15,
    borderRadius:7,
    textAlign:'center',
    alignItems:'center', marginTop:20
  },
  buttonText:{
    color:'#fff',fontSize:17, fontWeight:'bold'
  },

  textSkill:{
    color:'#fff', fontSize:22, 
    fontWeight:'bold',
   
  },
  buttonSkill:{
    borderRadius:50,
    padding:15,
    backgroundColor:'#1f1e25', 
    alignItems:'center',
    marginVertical:3
  }
})
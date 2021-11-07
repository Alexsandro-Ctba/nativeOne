import React from "react";
import {View, Text, StyleSheet, TextInput, Platform, TouchableOpacity} from 'react-native';


export default function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        NativeOne
      </Text>

      <TextInput 
      style={styles.input}
      placeholder="insira o valor aqui"
      placeholderTextColor="#555"
      />
      {/* exibindo botão = button
        activeOpacity = controlando a opacidade no clique
      */}
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      
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
  }
})
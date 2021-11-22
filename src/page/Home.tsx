import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from "../components/Button.tsx";
import { SKillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState();

  const [mySkill, setMySkill] = useState([])
  const [greeting, setgretting] = useState('bom dia');
  function handleAddSkill() {
    setMySkill(oldstates => [...oldstates, newSkill])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
      if(currentHour >= 0){
        setgretting("Boa noite")
      }else if(currentHour >= 4 && currentHour <= 12){
        setgretting("Bom dia")
      }else if(currentHour > 12 && currentHour <= 19){
        setgretting("Boa tarde")
      }
  }, [mySkill])

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {fontSize:24}]}>Bem vindo</Text>
      <Text style={[styles.title, { marginTop: 10, fontStyle: "italic" }]}>{greeting}</Text>
      
      <TextInput style={styles.input}
        placeholder="Informe o valor aqui"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkill} />

      <Text style={[styles.title, { fontWeight: 'bold', fontSize: 24 }]}>My skill</Text>

      <FlatList
        data={mySkill}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SKillCard item={item} />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015'
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 30,
    marginVertical: 30,
    fontWeight:'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    marginHorizontal: 20,
    borderRadius: 10,
    fontSize: 20,
    color: '#fff',
    marginVertical:10
  }

})
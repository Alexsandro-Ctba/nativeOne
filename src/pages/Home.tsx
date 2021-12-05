import React, { useEffect, useState } from "react";
import {
  FlatList,
  Platform, StatusBar, StyleSheet, Text,
  TextInput, View
} from "react-native";
import { Button } from "./components/Button";
import { Skillcard } from "./components/Skillcard";


export function Home() {
  const [newSkill, setNewSkill] = useState('valor padrão');
  const [mySkill, setMyskill] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    //oldstate recupera os dados que já estavam dentro de MySkill
    setMyskill(oldstate => [...oldstate, newSkill]);
  }
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Bom dia')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa noite')
    }
  }, [])

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.greetings}>
        {greeting}
      </Text>
      <TextInput style={styles.input}
        placeholder="digite aqui"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>


      <FlatList

        data={mySkill}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Skillcard item={item} />
        )}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#fff'
  }

})
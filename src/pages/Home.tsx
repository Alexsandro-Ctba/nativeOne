import React, { useEffect, useState } from "react";
import {
  FlatList,
  Platform, StyleSheet, Text,
  TextInput, View
} from "react-native";
import { Button } from "./components/Button";
import { Skillcard } from "./components/Skillcard";

interface SkillData{
  id:string;
  name:string;
}

export function Home(){
  const [newSkill, setNewSkill] = useState('valor padrão');
  const [mySkill, setMyskill] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');
//function para add skill
  function handleAddNewSkill(){
 const data={
   id:String(new Date().getTime()),
   name:newSkill
 }
    //oldstate recupera os dados que já estavam dentro de MySkill
    setMyskill(oldstate => [...oldstate, data]);
  }

  //function para remover skill
  function handleRemoveSkiLL(id:string){
      setMyskill(oldState => oldState.filter(
        item => item.id !== id
      ))
  }

  useEffect(() => {
   const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Bom dia')
       console.log(currentHour)
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa noite')
      console.log(currentHour)
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

      <Button onPress={handleAddNewSkill}

      title="Add"//envia a propriedade title para o button
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>


      <FlatList

        data={mySkill}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Skillcard item={item.name} 
          //passando function de parametro para apagar skill
          onPress={() => handleRemoveSkiLL(item.id)}
          />
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
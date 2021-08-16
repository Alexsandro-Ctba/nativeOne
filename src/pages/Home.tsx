import React, { Fragment, useEffect, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  // setNewSkill função que altera o estado e envia para newSkill
  const [newSkill, setNewSkill] = useState('Codding...');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGreettings] = useState('')

  function handleAddNewSkill() {
    // esta função atualiza o estado de mySkills
    setMySkills(oldState => [...oldState, newSkill]);
  }


  useEffect(()=>{
     const currentHouer = new Date().getHours();      
     if(currentHouer < 12){
       setGreettings('Bom dia')
     }else if(currentHouer >= 12 && currentHouer < 18){
       setGreettings('Boa tarde')
     }else{
       setGreettings('Boa noite')
     }
  },[])
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
      
        <Text style={styles.title}>Bem vindo , Alex</Text>
   
             
        <Text style={styles.greettings}>
              {gretting}
        </Text>


        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill} //recebe a informação do estado
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>my Skills</Text>
        
       

        <FlatList
        data={mySkills}
        keyExtractor={item =>item}
        renderItem={({ item }) =>(
          <SkillCard  skill={item}/>
        )}
        
        />
       
      </SafeAreaView>
    </Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 20,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },

  greettings:{
    color:'#fff'
  }

});

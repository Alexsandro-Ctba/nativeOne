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

interface SkillData{
  id: string;
  name:string;
}


export function Home() {
  // setNewSkill função que altera o estado e envia para newSkill
  const [newSkill, setNewSkill] = useState('Codding...');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGreettings] = useState('')

  function handleAddNewSkill() {
    const data ={
      id: String(new Date().getTime()),
      name:newSkill
    }
    // esta função atualiza o estado de mySkills
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id:string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
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

        <Button 
        onPress={handleAddNewSkill} 
        title = "Add"        
        />

        <Text style={[styles.title, { marginVertical: 50 }]}>my Skills</Text>
        
       

        <FlatList
        data={mySkills}
        keyExtractor={item =>item.id}
        renderItem={({ item }) =>(
          <SkillCard  skill={item.name}
          onPress={() => handleRemoveSkill(item.id)}
          />
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

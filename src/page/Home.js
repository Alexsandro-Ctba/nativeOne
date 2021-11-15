import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../components/button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState();
  const [mySkill, setMySkill] = useState([]);

  function handleAddNewSkill() {
    setMySkill(oldState => [...oldState, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.initial}>List of Skill</Text>

      <TextInput
        style={styles.input}
        placeholder="Informe sua Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.initial, {marginVertical: 50}]}>My Skills</Text>

      {mySkill.map(skill => (
        <SkillCard skill={skill} key={skill} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
  },
  initial: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: '#1f1e25',
    marginHorizontal: 20,
    borderRadius: 10,
    color: '#fff',
    fontSize: 20,
  },
});

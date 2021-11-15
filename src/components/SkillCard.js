import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.ButtonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonSkill: {
    backgroundColor: '#1f1e25',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  textSkill: {color: '#fff', fontSize: 24},
});

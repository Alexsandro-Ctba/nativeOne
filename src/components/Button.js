import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function Button({handleAddNewSkill}) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleAddNewSkill}>
      <Text style={styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
});

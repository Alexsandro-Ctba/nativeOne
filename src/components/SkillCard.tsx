import React from 'react';
import { StyleSheet, Text, TouchableOpacity  } from 'react-native';

export function SkillCard({ skill, }){
    return (
        <TouchableOpacity style={styles.buttonSkill}>
          <Text style={styles.textskill}>
                { skill }
          </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
      buttonSkill: {
      backgroundColor: '#1F1E25',
      borderRadius: 50,
      padding: 15,
      alignItems: 'center',
      marginVertical: 10,
    },
    textskill: {
      color: '#ffffff',
      fontSize: 22,
      fontWeight: 'bold',
    },
  });
  
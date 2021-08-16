import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({ onPress }){
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={ onPress }
            >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
     button: {
      backgroundColor: '#a370f7',
      padding: 15,
      marginTop: 20,
      borderRadius: 7,
      alignItems: 'center',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 17,
      fontWeight: 'bold',
    }
  });
  

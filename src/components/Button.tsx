import React from 'react';
import {  StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface  ButtonProps extends TouchableOpacityProps{
  title:string;
}

export function Button({ title, ...rest }:ButtonProps){
    return (
        <TouchableOpacity
            style={styles.button}    
            activeOpacity={.8}         
            {...rest}
            >
            <Text style={styles.buttonText}>{title}</Text>
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
  

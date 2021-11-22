import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export function SKillCard({ item }) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
        marginVertical: 5
    },
    textSkill: {
        color: '#fff',
        fontSize: 24,
    }
})
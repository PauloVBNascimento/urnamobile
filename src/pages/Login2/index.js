import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from "../../../src/firebaseConnection"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"
import { TextInput } from "react-native-gesture-handler";

export default function Login2({ navigation, route }) {
    
    const [input, setInput] = useState('')

    function procurarEleitor() {
        alert("Você já votou nessa urna!")
        navigation.navigate("Inicial"
                )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.description}>Seu Codigo:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Paulo Nascimento"
                onChangeText={setInput}
                value={input}></TextInput>
            <TouchableOpacity
                style={styles.procurar}
                onPress={() => { procurarEleitor() }}>
                <Text style={styles.procurarButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
    }
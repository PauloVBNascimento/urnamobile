import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from "../../../src/firebaseConnection"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"
import { TextInput } from "react-native-gesture-handler";

export default function Login({ navigation, route }) {
    const [urnas, setUrnas] = useState([route.params.lista])
    const [input, setInput] = useState('')
    const [nome, setNome] = useState('')

    const lista = route.params.lista
    console.log(lista)
    let urnaencontrada = ''
    lista.map((item) => {
        urnaencontrada = item.id
    })
    console.log( "urna: " + urnaencontrada)
    
    function procurarEleitor() {
        firebase.firestore().collection("Projeto").doc(urnaencontrada).collection("Eleitor")
            .get()
            .then((snapshot) => {
                const list = []
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        nome: doc.data().nome

                    })
                });
                setUrnas(list);

                console.log(urnas)
                procurarEleitor2();
            })
            .catch((error) => {
                console.log(error)
            });
}
function procurarEleitor2() {
    let newLista = [];
    urnas.map((item) => {
        if (item.id === input) {
            newLista.push(item)
        }
    })
    newLista.map((item) => {
        setNome(item.id)
        console.log(item.id)
    })
    
    if (nome === input) {
        navigation.navigate("Details", {
            id: nome,
            urna: urnaencontrada

        }
        )
    } else {
        alert("nome invalido")
    }

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
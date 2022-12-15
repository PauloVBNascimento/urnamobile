import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from "../../../src/firebaseConnection"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"
import { TextInput } from "react-native-gesture-handler";

export default function Inicial({ navigation }) {
    const [urnas, setUrnas] = useState([])
    const [input, setInput] = useState('')
    const [senha, setSenha] = useState('')

   async function procurarUrna() {
       firebase.firestore().collection("Projeto")
            .get()
            .then((snapshot) => { 
                const list = []
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        senha: doc.data().senha

                    })
                    setUrnas(list);
                });
                let newLista = [];
                urnas.map((item) => {
                    if (item.senha === input) {
                        newLista.push(item)
                    }
                })
                newLista.map((item) => {
                    setSenha(item.senha)
                    console.log(item.senha)
                })
                
                if (senha === input) {
                    navigation.navigate("Login", {
                        lista: newLista,
            
                    }
                    )
                } else {
                    alert("senha invalida")
                }

                console.log(urnas)
            })
            .catch((error) => {
                console.log(error)
            });
}

    // if (input === urnas.senha) {


    // navigation.navigate("Details", {
    //     input: input
    // })



    return (
        <View style={styles.container}>
            <Text style={styles.description}>Senha da Urna</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Urna Teste"
                onChangeText={setInput}
                value={input}></TextInput>
            <TouchableOpacity
                style={styles.procurar}
                onPress={() => { procurarUrna() }}>
                <Text style={styles.procurarButton}>Procurar</Text>
            </TouchableOpacity>
        </View>
    )
}
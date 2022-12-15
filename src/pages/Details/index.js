import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from "../../../src/firebaseConnection"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"

export default function Details({ navigation, route }) {
    const [urnas, setUrnas] = useState([route.params.urna])
    const [teste, setTeste] = useState([route.params.id])

    let urnaencontrada = route.params.urna
    let eleitorencontrado = route.params.id
    

    console.log( "eleitor: " + eleitorencontrado + " urna: " + urnaencontrada)
    useEffect(() => {
        firebase.firestore().collection("Projeto").doc(urnaencontrada).collection("Candidato")
            .get()
            .then((snapshot) => {
                const list = []
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        numero: doc.data().numero,
                        partido: doc.data().partido,
                        votos: doc.data().votos
                    
                    })
                });
                setUrnas(list);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                data={urnas}
                renderItem={({item}) => (
                    <View style={styles.urnas}>
                        <Text
                            style={styles.descriptionUrna}
                            onPress={() => navigation.navigate("Votar", {
                                eleitor: eleitorencontrado,
                                urna: urnaencontrada,
                                id: item.id,
                                votos: item.votos
                            })}
                            >
                           Candidato: {item.nome} | Numero: {item.numero} | Partido: {item.partido}
                        </Text>
                    </View>
                )} />
        </View>
    );
}
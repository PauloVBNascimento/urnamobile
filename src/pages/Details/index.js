import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from "../../../src/firebaseConnection"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"

export default function Details({ navigation, route }) {
    const [urnas, setUrnas] = useState([route.params.id])
    const idUrna = route.params.id
    console.log(idUrna)
    useEffect(() => {
        firebase.firestore().collection("Projeto").doc(idUrna).collection("Candidato")
            .get()
            .then((snapshot) => {
                const list = []
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        numero: doc.data().numero,
                        partido: doc.data().partido
                    
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
                            >
                            {item.nome} {item.numero} {item.partido} 
                        </Text>
                    </View>
                )} />
            <TouchableOpacity
                style={styles.buttonVote}
                onPress={() => navigation.navigate("Votar")}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>

        </View>
    );
}
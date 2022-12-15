import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from "../../../src/firebaseConnection"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"
import { TextInput } from "react-native-gesture-handler";

export default function Votar({ navigation, route }) {
    const [candidatos, setCandidatos] = useState([])
    
    const [eleitor, setEleitor] = useState([route.params.eleitor])
    const [urna, setUrna] = useState([route.params.urna])
    const [votos, setVotos] = useState([route.params.votos])
    const [cid, setCid] = useState([route.params.id])

    let eleitornome = route.params.eleitor
    let urnanome = route.params.urna
    let candidatoid = route.params.id
    let votosc = route.params.votos
    let statuse = false

    console.log(urnanome, candidatoid, votosc, eleitornome)

    function votar() {
        firebase.firestore().collection("Projeto").doc(urnanome).collection("Eleitor").doc(eleitornome).update({
            status: false
            
        })
        votosc = votosc + 1
        firebase.firestore().collection("Projeto").doc(urnanome).collection("Candidato").doc(candidatoid).update({
            votos: votosc
            
        })
        

        alert("Voto Confirmado");
        navigation.navigate("Agradecimento", {
         urna: urnanome,
         id: eleitornome
        })
}


    useEffect(() => {
        async function loadCandidato() {
            await firebase.firestore().collection("Projeto").doc(urnanome).collection("Candidato")
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
                setCandidatos(list);
                console.log(candidatos)
            })
            .catch((error) => {
                console.log( "erro" + error)
            });

        }
        loadCandidato();

    }, []);   
   
  
    return (
        
        <><View style={styles.container}>
            {
                candidatos.map((item) => {
                    if (item.id == candidatoid) {
                        return (
                            <View style={styles.urnas}>
                            <Text
                                style={styles.descriptionUrna}
                            >
                                {item.nome} {item.numero} {item.partido} {item.votos}
                            </Text>
                        </View>
                        )
                    }
                })
            }
        </View>
        <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.procurar}
                    onPress={() => { votar(); } }>
                    <Text style={styles.procurarButton}>Votar</Text>
                </TouchableOpacity>
                <View style={styles.urnas}>
                    <Text style={styles.descriptionUrna2}>Confirme os dados antes de votar!</Text>
                </View>
        </View></>
            

    )
}
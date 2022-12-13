import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from "../../../src/firebaseConnection"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"

export default function Urna({ navigation }) {
    const [urnas, setUrnas] = useState([])


    useEffect(() => {
        firebase.firestore().collection("Projeto")
            .get()
            .then((snapshot) => {
                const list = []
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id
                    
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
                            onPress={() => {
                                navigation.navigate("Details", {
                                    id: item.id,
                                    
                                }
                                )
                            }}>
                            {item.id} 
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


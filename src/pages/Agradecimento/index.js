import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from "../../../src/firebaseConnection"
import styles from "./style"

export default function Agradecimento({ navigation }) {

    return (
        <View style={styles.container}>
            <Text
            style={styles.descriptionUrna}
            onPress={() => {
                navigation.navigate("Login2"
                ) }}>OBRIGADO POR VOTAR!!</Text>
        </View>
        )

}
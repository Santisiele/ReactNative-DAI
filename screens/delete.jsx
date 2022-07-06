import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Input } from 'react-native';
import React from 'react';
import Boton from '../components/boton'

function DeleteById() {
    return (
    <View style={styles.container}>
            <Text>Delete personaje by Id</Text>
            <StatusBar style="auto" />
            <Text style={styles.atras}
                onPress={ () =>{
                navigation.navigate('home')
                }}> 
                Volver atrás
            </Text>
            <Input
                style={styles.textInput}
                placeholder="Ingrese el Id"
                name="Id"
            />
            <Boton
                text= "Otra"
                onPress={ () =>{
                navigation.navigate('getById')
                }}
            />
    </View>
);
}

export default DeleteById;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        padding: 15,
        width: "80%",
        borderRadius: 8,
        backgroundColor: "#fff",
        marginTop: 15,
        marginBottom: -5
    },
});
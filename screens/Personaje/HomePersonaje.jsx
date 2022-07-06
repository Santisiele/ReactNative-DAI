import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boton from '../../components/boton'


function HomePersonaje({navigation}) {
    return (
    <View style={styles.container}>
            <Text>Personajes home</Text>
            <StatusBar style="auto" />
            <Text style={styles.atras}
                onPress={ () =>{
                navigation.navigate('HomeGeneral')
                }}> 
                Volver atrás
            </Text>
            <Boton
                text= "Get Personaje"
                onPress={ () =>{
                navigation.navigate('GetPersonaje')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Get Personaje by Id"
                onPress={ () =>{
                navigation.navigate('GetPersonajeById');
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Create Personaje"
                onPress={ () =>{
                navigation.navigate('CreatePersonaje')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Update Personaje"
                onPress={ () =>{
                navigation.navigate('UpdatePersonaje')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Delete Personaje"
                onPress={ () =>{
                navigation.navigate('DeletePersonajeById')
                }}
            />
    </View>
);
}

export default HomePersonaje;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    atras:{
        position: 'absolute',
        top:'7%',
        left:'15%',
        color: 'blue',
        textDecorationLine:'underline'
    },
});
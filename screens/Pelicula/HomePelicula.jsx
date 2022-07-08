import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boton from '../../components/boton'


function HomePelicula({navigation}) {
    return (
    <View style={styles.container}>
            <Text>Peliculas home</Text>
            <StatusBar style="auto" />
            <Text style={styles.atras}
                onPress={ () =>{
                navigation.navigate('HomeGeneral')
                }}> 
                Volver atrás
            </Text>
            <Boton
                text= "Get Pelicula"
                onPress={ () =>{
                navigation.navigate('GetPelicula')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Get Pelicula by Id"
                onPress={ () =>{
                navigation.navigate('GetPeliculaById');
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Create Pelicula"
                onPress={ () =>{
                navigation.navigate('CreatePelicula')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Update Pelicula"
                onPress={ () =>{
                navigation.navigate('UpdatePelicula')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Delete Pelicula"
                onPress={ () =>{
                navigation.navigate('DeletePeliculaById')
                }}
            />
    </View>
);
}

export default HomePelicula;

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
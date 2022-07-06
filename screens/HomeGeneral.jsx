import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boton from '../components/boton'


function HomePersonaje({navigation}) {
    return (
    <View style={styles.container}>
            <Text>Bienvenido a la API de peliculas y personajes</Text>
            <StatusBar style="auto" />
            <Boton
                text= "Personajes"
                onPress={ () =>{
                navigation.navigate('HomePersonaje')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Peliculas"
                onPress={ () =>{
                navigation.navigate('HomePelicula');
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
});
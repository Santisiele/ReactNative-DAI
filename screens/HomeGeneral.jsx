import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Boton from '../components/boton'
import {getToken} from '../services/tokenClient'


function HomePersonaje({navigation}) {
    const [userState, setUserState] = useState({
        token: ""
    });

    const onTokenPress = async (screen) => {

          await getToken(userState).then(() => {
            console.log("entro")
            navigation.navigate(screen)
          })
        }

    return (
    <View style={styles.container}>
            <Text>Bienvenido a la API de peliculas y personajes</Text>
            <StatusBar style="auto" />
            <Boton
                text= "Personajes"
                onPress={onTokenPress("HomeGeneral")}
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
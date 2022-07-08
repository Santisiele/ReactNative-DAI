import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {getperbyid} from '../../services/personajeEnd'

function GetPersonajeById({navigation}) {
    const [userState, setUserState] = useState({
        id: ""
    });
    const [loadState, setLoad] = useState({
        loaded: false
    });
    const [personajeState, setpersonaje] = useState({
        personaje: []
    });
    const onGetByIdPress = async (e) => {
    
        if (!userState.id){
            console.log("hhh")
            Alert.alert("Por favor ingresar el id")
        } else {
            getperbyid(userState)
            .then((personaje)=>{
                setLoad(loadState.loaded=true)
                setpersonaje({personaje: personaje})
                navigation.navigate('GetPersonajeById')
            })
            .catch(() => {
                console.log("no entro")
                Alert.alert("Error")
                });
            }
    }

    return (
    <View style={styles.container}>
            <Text>Get personaje by Id</Text>
            <StatusBar style="auto" />
            <Text style={styles.atras}
                onPress={ () =>{
                navigation.navigate('HomePersonaje')
                }}> 
                Volver atrás
            </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={number => setUserState({...userState, id: number}) }
                value={userState.id}
                placeholder="Ingrese el Id"
                name="Id"
                keyboardType="numeric"
            />
            <Boton
                text= "Get"
                onPress={onGetByIdPress}
            />
            
            <Text style={styles.sub}>{personajeState.personaje.nombre}</Text>
            <Text style={styles.sub}>{personajeState.personaje.edad}</Text>
            <Text style={styles.sub}>{personajeState.personaje.peso}</Text>
            <Text style={styles.sub}>{personajeState.personaje.historia}</Text>
            <Text style={styles.sub}>{personajeState.personaje.comidaFavorita}</Text>
    </View>
);
}

export default GetPersonajeById;

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
    atras:{
        position: 'absolute',
        top:'7%',
        left:'15%',
        color: 'blue',
        textDecorationLine:'underline'
    },
    sub:{
        textAlign: 'center'
      }
});
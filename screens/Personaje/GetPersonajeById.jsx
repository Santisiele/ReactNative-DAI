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
        personaje: ""
    });
    const onGetByIdPress = async (e) => {
    
        if (!userState.id){
            console.log("hhh")
            Alert.alert("Por favor ingresar el id")
        } else {
            personajeState.personaje = await getperbyid(userState)
            setLoad(loadState.loaded=true)
            console.log("este es el personaje: ", personajeState.personaje)
            console.log(loadState.loaded)
            navigation.navigate('GetPersonajeById')
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
            {
                loadState.loaded && <Boton
                text= {personajeState.nombre}
            />
            }
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
});
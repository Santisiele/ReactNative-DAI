import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {getmoviebyid} from '../../services/peliculaEnd'

function GetPeliculaById({navigation}) {
    const [userState, setUserState] = useState({
        id: ""
    });
    const [loadState, setLoad] = useState({
        loaded: true
    });
    const [peliculaState, setpelicula] = useState({
        pelicula: [
        ]
    });
    const onGetByIdPress = async (e) => {
    
        if (!userState.id){
            console.log("hhh")
            Alert.alert("Por favor ingresar el id")
        } else {
            getmoviebyid(userState)
            .then((pelicula)=>{
                setLoad(loadState.loaded=true)
                setpelicula({pelicula: pelicula})
                navigation.navigate('GetPeliculaById')
                console.log(pelicula);
            })
            .catch(() => {
                console.log("no entro")
                Alert.alert("Error")
            });
        }
    }
    return (
    <View style={styles.container}>
            <Text>Get pelicula by Id</Text>
            <StatusBar style="auto" />
            <Text style={styles.atras}
                onPress={ () =>{
                navigation.navigate('HomePelicula')
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
            {loadState.loaded
                ? <Text/>
                :<Text style={styles.sub}> Titulo: {peliculaState.pelicula.titulo}</Text>
            }
            {loadState.loaded
                ? <Text/>
                :   (<Text style={styles.sub}> Fecha de creacion: {peliculaState.pelicula.fechaCreacion}</Text>)
            }
            {loadState.loaded
                ? <Text/>
                :   (<Text style={styles.sub}> calificacion: {peliculaState.pelicula.clasificacion}</Text>)
            }
    </View>
);
}

export default GetPeliculaById;

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
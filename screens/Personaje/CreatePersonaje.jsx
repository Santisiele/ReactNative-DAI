import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {createPersonaje} from '../../services/personajeEnd'



function CreatePersonaje({navigation}) {
    const [userState, setUserState] = useState({
        imagen: "",
        nombre: "",
        peso: "",
        edad: "",
        historia: "",
        comidaFavorita: ""
    });

    const onCreatePress = async (e) => {
    
        if (!userState.imagen || !userState.nombre || !userState.peso || !userState.edad || !userState.historia || !userState.comidaFavorita){
            console.log("hhh")
            Alert.alert("Por favor ingresar todos los datos")
        } else {
            await createPersonaje(userState).then(() => {
            console.log("entro")
        })
            .catch(() => {
            console.log("no entro")
            Alert.alert("Error")
        });
        }
    }
    return (
    <View style={styles.container}>
        <Text>Create Personaje</Text>
        <StatusBar style="auto" />
        <Text style={styles.atras}
            onPress={ () =>{
            navigation.navigate('HomePersonaje')
        }}> 
        Volver atrás
        </Text>
        <TextInput
            style={styles.textInput}
            onChangeText={text => setUserState({...userState, imagen: text}) }
            value={userState.imagen}
            placeholder="Ingrese la imagen"
            name="imagen"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={text => setUserState({...userState, nombre: text}) }
            value={userState.nombre}
            placeholder="Ingrese el nombre"
            name="nombre"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, peso: number}) }
            value={userState.peso}
            placeholder="Ingrese el peso"
            name="peso"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, edad: number}) }
            value={userState.edad}
            placeholder="Ingrese la edad"
            name="edad"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={text => setUserState({...userState, historia: text}) }
            value={userState.historia}
            placeholder="Ingrese la historia"
            name="historia"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={text => setUserState({...userState, comidaFavorita: text}) }
            value={userState.comidaFavorita}
            placeholder="Ingrese la comida favorita"
            name="comidaFavorita"
        />
        <Boton
        text= "Create"
        onPress={onCreatePress}
        />
    </View>
    );
}

export default CreatePersonaje

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },atras:{
        position: 'absolute',
        top:'7%',
        left:'15%',
        color: 'blue',
        textDecorationLine:'underline'
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
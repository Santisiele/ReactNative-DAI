import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {updatePelicula} from '../../services/peliculaEnd'



function UpdatePelicula({navigation}) {
    const [userState, setUserState] = useState({
        id: "",
        imagen: "",
        titulo:"",
        fechaCreacion:"",
        clasificacion: ""
    });

    const onUpdatePress = async (e) => {
    
        if (!userState.imagen || !userState.titulo || !userState.id || !userState.fechaCreacion || !userState.clasificacion){
            console.log("hhh")
            Alert.alert("Por favor ingresar todos los datos")
        } else {
            if((userState.clasificacion>5) || (userState.clasificacion<1)){
                Alert.alert("Clasificacion incorrecta, debe ser entre 1 y 5")
            }
            else{
                await updatePelicula(userState).then(() => {
                    console.log("entro")
                    navigation.navigate('HomeGeneral')
                })
                    .catch(() => {
                    console.log("no entro")
                    Alert.alert("Error")
                });
            }
        }
    }

    return (
        <View style={styles.container}>
        <Text>Update Pelicula</Text>
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
            placeholder="Ingrese el id"
            name="id"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={text => setUserState({...userState, imagen: text}) }
            value={userState.imagen}
            placeholder="Ingrese la imagen"
            name="imagen"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={text => setUserState({...userState, titulo: text}) }
            value={userState.nombre}
            placeholder="Ingrese el titulo"
            name="titulo"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={text => setUserState({...userState, fechaCreacion: text}) }
            value={userState.peso}
            placeholder="Ingrese el fecha de creacion"
            name="fechaCreacion"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, clasificacion: number}) }
            value={userState.edad}
            placeholder="Ingrese la clasificacion"
            name="clasificacion"
            keyboardType="numeric"
        />
        <Boton
        text= "Update"
        onPress={onUpdatePress}
        />
    </View>
    );
}

export default UpdatePelicula

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
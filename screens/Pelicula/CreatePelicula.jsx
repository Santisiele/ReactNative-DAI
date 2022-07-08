import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {createPelicula} from '../../services/peliculaEnd'



function CreatePelicula({navigation}) {
    const [userState, setUserState] = useState({
        imagen: "",
        titulo: "",
        fechaCreacion: "",
        calificacion: null
    });

    const onCreatePress = async (e) => {
    
        if (!userState.imagen || !userState.titulo || !userState.fechaCreacion || !userState.calificacion){
            console.log("hhh")
            Alert.alert("Por favor ingresar todos los datos")
        } else {
            if((userState.calificacion>5) || (userState.calificacion<1)){
                Alert.alert("Calificacion incorrecta")
            }else{
                await createPelicula(userState).then(() => {
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
        <Text>Create Pelicula</Text>
        <StatusBar style="auto" />
        <Text style={styles.atras}
            onPress={ () =>{
            navigation.navigate('HomePelicula')
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
            onChangeText={text => setUserState({...userState, titulo: text}) }
            value={userState.nombre}
            placeholder="Ingrese el titulo"
            name="nombre"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={text => setUserState({...userState, fechaCreacion: text}) }
            value={userState.peso}
            placeholder="Ingrese la fecha de creacion"
            name="fechaCreacion"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, calificacion: number}) }
            value={userState.calificacion}
            placeholder="Ingrese la calificacion"
            name="calificacion"
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

export default CreatePelicula

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
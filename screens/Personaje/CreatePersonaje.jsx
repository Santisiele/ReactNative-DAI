import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'



function CreatePersonaje({navigation}) {
    const [userState, setUserState] = useState({
        Imagen: null,
        Nombre: null,
        Peso: null,
        Edad: null,
        Historia: null,
        ComidaFavorita: null
    });

    const onCreatePress = async (e) => {
    
        if (!userState.Imagen || !userState.Nombre || !userState.Peso || !userState.Edad || !userState.Historia || !userState.ComidaFavorita){
            console.log("hhh")
            Alert.alert("Por favor ingresar todos los datos")
        } else {
            await borrar(userState).then(() => {
            console.log("entro")
            navigation.navigate('Create personaje')
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
            onChangeText={number => setUserState({...userState, Imagen: text}) }
            value={userState.Imagen}
            placeholder="Ingrese la imagen"
            name="imagen"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, Nombre: text}) }
            value={userState.Nombre}
            placeholder="Ingrese el nombre"
            name="nombre"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, Peso: number}) }
            value={userState.Peso}
            placeholder="Ingrese el peso"
            name="peso"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, Edad: number}) }
            value={userState.Edad}
            placeholder="Ingrese la edad"
            name="edad"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, Historia: text}) }
            value={userState.Historia}
            placeholder="Ingrese la historia"
            name="historia"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={number => setUserState({...userState, ComidaFavorita: text}) }
            value={userState.ComidaFavorita}
            placeholder="Ingrese la comida favorita"
            name="comidaFavorita"
        />
        <Boton
        text= "Create"
        onPress={ () =>{
            navigation.navigate('HomePersonaje') 
        }}
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
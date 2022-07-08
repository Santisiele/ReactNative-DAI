import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {getpersonaje} from '../../services/personajeEnd'



function GetPersonaje({navigation}) {
  const [userState, setUserState] = useState({
    nombre: "",
    peso: null,
    edad: null,
    idPeliSerie: null
});

const onGetPress = async (e) => {
      await getpersonaje(userState).then(() => {
        console.log("entro")
        navigation.navigate('Response')
    })
        .catch(() => {
        console.log("no entro")
        Alert.alert("Error")
    });
}
  return (
    <View style={styles.container}>
      <Text style={styles.tit}>Get Personaje</Text>
      <Text style={styles.sub}>Complete los campos deseados, de no completar ninguno se traera la lista entera</Text>
      <StatusBar style="auto" />
      <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('HomePersonaje')
          }}> 
          Volver atrás
      </Text>
      <TextInput
          style={styles.textInput}
          placeholder="Ingrese el nombre"
          name="nombre"
          onChangeText={text => setUserState({...userState, nombre: text}) }
          value={userState.nombre}
        />
      <TextInput
          style={styles.textInput}
          placeholder="Ingrese el peso"
          name="peso"
          keyboardType="numeric"
          onChangeText={number => setUserState({...userState, peso: number}) }
          value={userState.peso}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese la edad"
          name="edad"
          keyboardType="numeric"
          onChangeText={number => setUserState({...userState, edad: number}) }
          value={userState.edad}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese el id de la pelicula"
          name="idPeliSerie"
          keyboardType="numeric"
          onChangeText={number => setUserState({...userState, idPeliSerie: number}) }
          value={userState.idPeliSerie}
        />
      <Boton
        text= "Get"
        onPress={onGetPress}
      />
    </View>
  );
}

export default GetPersonaje

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
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: -5
  },
  tit:{
  fontSize: 20
  },
  sub:{
    textAlign: 'center'
  }
});
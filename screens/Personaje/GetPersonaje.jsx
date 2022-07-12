import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Alert} from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {getpersonaje} from '../../services/personajeEnd'



function GetPersonaje({navigation}) {
  const [userState, setUserState] = useState({
    nombre: "",
    peso: "",
    edad: "",
    idPeliSerie: ""
  });

  const [loadState, setLoad] = useState({
    loaded: true
  });

  const [personajeState, setPersonaje] = useState({
    lista:[]
  }
  )


const onGetPress = async (e) => {
  getpersonaje(userState).then((lista)=>{
      setLoad(loadState.loaded=true)
      setPersonaje({lista: lista})
      console.log(personajeState.lista)
      navigation.navigate('GetPersonaje')
  })
  .catch(() => {
        console.log("no entro")
        Alert.alert("Error")
    });
}
  return (
    <View style={styles.containerAll}>
      <Text style={styles.atras}
        onPress={ () =>{
          navigation.navigate('HomePersonaje')
        }}> 
        Volver atrás
      </Text>
      <View style={styles.containerInput}>
      <Text style={styles.tit}>Get Personaje</Text>
      <Text style={styles.sub}>Complete los campos deseados, de no completar ninguno se traera la lista entera</Text>
      <StatusBar style="auto" />
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
      <View style={styles.containerList}>
      {
        loadState.loaded
        ? <Text/>
        : <FlatList
          keyExtractor={(item) => item.id}
          data={personajeState.lista}
          renderItem={({item}) =>(
          <Text style={styles.lista}>{item.nombre}</Text>
        )}
        />
      }
      </View>
    </View>
  );
}

export default GetPersonaje

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput:{
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerList:{
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
  },
  lista: {
    color:'white',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: "lightblue",
    padding: 10,
    backgroundColor: "orange",
    marginTop: 15,
    marginBottom: -5
}
});
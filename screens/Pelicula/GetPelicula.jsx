import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, FlatList } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {getmovie} from '../../services/peliculaEnd'


function GetPelicula({navigation}) {
  const [userState, setUserState] = useState({
    order: ""
  });

  const [loadState, setLoad] = useState({
    loaded: false
  });

  const [PeliculaState, setPelicula] = useState({
    lista:[]
  }
  )


const onGetPress = async (e) => {
  getmovie(userState).then((lista)=>{
      setLoad({loaded:true})
      setPelicula({lista: lista})
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
          navigation.navigate('HomePelicula')
        }}> 
        Volver atrás
      </Text>
      <View style={styles.containerInput}>
      <Text style={styles.tit}>Get Pelicula</Text>
      <Text style={styles.sub}>Podes elegir un orden alfabetico en caso de desearlo</Text>
      <StatusBar style="auto" />
      <TextInput
          style={styles.textInput}
          placeholder="Ingrese el orden alfabetico (ASC o DESC)"
          name="nombre"
          onChangeText={text => setUserState({...userState, order: text}) }
          value={userState.order}
        />
      <Boton
        text= "Get"
        onPress={onGetPress}
      />
      </View>
      <View style={styles.containerList}>
      {
        loadState.loaded
        ? <FlatList
        keyExtractor={(item) => item.id}
        data={PeliculaState.lista}
        renderItem={({item}) =>(
        <Text style={styles.lista}>{item.titulo}</Text>
      )}
      />
        : <Text></Text>
      }
      </View>
    </View>
  );
}

export default GetPelicula

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput:{
    flex: 1,
    marginTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerList:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
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
    width: 300,
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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, FlatList} from 'react-native';
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
        <View style={styles.containerAll}>
          <Text style={styles.atras}
            onPress={ () =>{
              navigation.navigate('HomePersonaje')
            }}> 
            Volver atrás
          </Text>
          <View style={styles.containerInput}>
          <Text style={styles.tit}>Get </Text>
          <Text style={styles.sub}>Buscar una pelicula y sus personajes por su id</Text>
          <StatusBar style="auto" />
          <TextInput
              style={styles.textInput}
              placeholder="Ingrese el id"
              name="id"
              onChangeText={number => setUserState({...userState, id: number}) }
              value={userState.id}
            />
          <Boton
            text= "Get"
            onPress={onGetByIdPress}
          />
          </View>
          <View style={styles.containerList}>
          {
            (loadState.loaded)
            ? <Text style={styles.sub}>Titulo: {peliculaState.titulo}</Text>
            : <Text/>
          }
        {
            !loadState.loaded
            ? <Text/>
            : <Text style={styles.sub}>Fecha de creacion: {peliculaState.fechaCreacion}</Text>
        }
        {
            !loadState.loaded
            ? <Text/>
            : <Text style={styles.sub}>Calificaion: {peliculaState.clasificacion}</Text>
        }
          {
            !loadState.loaded
            ? <Text/>
            : <FlatList
              keyExtractor={(item) => item.id}
              data={peliculaState.Personajes}
              renderItem={({item}) =>(
              <Text style={styles.lista}>{item.nombre}</Text>
            )}
            />
          }
          </View>
        </View>
      );
}

export default GetPeliculaById;

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
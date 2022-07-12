import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, FlatList } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'
import {getperbyid} from '../../services/personajeEnd'

function GetPersonajeById({navigation}) {
    const [userState, setUserState] = useState({
        id: ""
    });
    const [loadState, setLoad] = useState({
        loaded: true
    });
    const [personajeState, setpersonaje] = useState({
            nombre: "",
            peso: "",
            edad: "",
            PeliculasSeries:[]
    });
    const onGetByIdPress = async (e) => {
    
        if (!userState.id){
            console.log("hhh")
            Alert.alert("Por favor ingresar el id")
        } else {
            getperbyid(userState)
            .then((personaje)=>{
                setLoad({loaded: true})
                setpersonaje(personaje)
            })
            .catch((e) => {
                console.log("no entro")
                console.log(e)
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
          <Text style={styles.tit}>Get Personaje</Text>
          <Text style={styles.sub}>Buscar un personaje y sus peliculas por su id</Text>
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
            ? <Text style={styles.sub}>Nombre: {personajeState.nombre}</Text>
            : <Text/>
          }
        {
            !loadState.loaded
            ? <Text/>
            : <Text style={styles.sub}>Edad: {personajeState.edad}</Text>
        }
        {
            !loadState.loaded
            ? <Text/>
            : <Text style={styles.sub}>Peso: {personajeState.peso}</Text>
          }
          {
            !loadState.loaded
            ? <Text/>
            : <FlatList
              keyExtractor={(item) => item.id}
              data={personajeState.PeliculasSeries}
              renderItem={({item}) =>(
              <Text style={styles.lista}>{item.titulo}</Text>
            )}
            />
          }
          </View>
        </View>
      );
    }
    
    export default GetPersonajeById
    
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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'

function DeletePeliculaById({navigation}) {  

    const [userState, setUserState] = useState({
        id: ""
      });

    const onDeletePress = async (e) => {
    
        if (!userState.id){
          console.log("hhh")
          Alert.alert("Por favor ingresar el id")
        } else {
          await deletePelicula(userState).then(() => {
            console.log("entro")
            navigation.navigate('HomeGeneral')
          })
          .catch(() => {
            console.log("no entro")
          Alert.alert("Error")
          });
        }
      }
    

    return (
    <View style={styles.container}>
            <Text>Delete pelicula by Id</Text>
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
                text= "Borrar"
                onPress={onDeletePress}
            />
    </View>
);
}

export default DeletePeliculaById;

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
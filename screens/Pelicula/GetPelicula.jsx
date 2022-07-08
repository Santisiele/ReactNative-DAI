import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import Boton from '../../components/boton'



function GetPelicula({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Get Pelicula</Text>
      <StatusBar style="auto" />
      <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('HomePelicula')
          }}> 
          Volver atrás
      </Text>
      <TextInput
          style={styles.textInput}
          placeholder="Ingrese el Id"
          name="Id"
          keyboardType="numeric"
        />
      <Boton
        text= "Get"
        onPress={ () =>{
          navigation.navigate('HomePelicula') 
        }}
      />
    </View>
  );
}

export default GetPelicula

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
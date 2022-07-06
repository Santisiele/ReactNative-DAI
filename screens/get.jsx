import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import Boton from '../components/boton'



function Get({navigation}) {
  const [text, onChangeText] = React.useState("Useless Text");
  
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text>Test DAI</Text>
      <StatusBar style="auto" />
      <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('Home')
          }}> 
          Volver atrás
      </Text>
      <TextInput
          style={styles.textInput}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ingrese el Id"
          name="Id"
          keyboardType="numeric"
        />
      <Boton
        text= "Otra"
        onPress={ () =>{
          navigation.navigate('Home') 
        }}
      />
    </View>
  );
}

export default Get

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
});
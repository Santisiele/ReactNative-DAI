import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Input } from 'react-native';
import React from 'react';
import Boton from '../../components/boton'
import Teclado from '../../components/teclado';

function GetPersonajeById({navigation}) {
    return (
    <View style={styles.container}>
        <Teclado>
            <Text>Get personaje by Id</Text>
            <StatusBar style="auto" />
            <Text style={styles.atras}
            onPress={ () =>{
            navigation.navigate('HomePersonaje')
            }}> 
            </Text>
            <Input
                style={styles.textInput}
                keyboardType='numeric'
                placeholder="Ingrese el Id"
                name="Id"
                onChange={(e) => onChangeInput(e, "direccion")}
            />
            <Boton
                text= "Get"
                onPress={ () =>{
                navigation.navigate('GetPersonajeById')
                }}
            />
        </Teclado>
    </View>
);
}

export default GetPersonajeById;

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
});
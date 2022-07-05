import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boton from './components/boton'
import { useNavigation } from '@react-navigation/native';
import Teclado from '../components/teclado';
import { TextInput } from 'react-native-web';

function deleteById() {
    return (
    <View style={styles.container}>
        <Teclado>
            <Text>Delete personaje by Id</Text>
            <StatusBar style="auto" />
            <TextInput
                style={styles.textInput}
                keyboardType='numeric'
                placeholder="Ingrese el Id"
                name="Id"
                onChange={(e) => onChangeInput(e, "direccion")}
            />
            <Boton
                text= "Otra"
                onPress={ () =>{
                navigation.navigate('getById')
                }}
            />
        </Teclado>
    </View>
);
}

export default deleteById;

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
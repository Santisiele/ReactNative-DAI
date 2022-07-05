import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boton from './components/boton'

function App() {
    return (
    <View style={styles.container}>
        <Teclado>
            <Text>Get personaje by Id</Text>
            <StatusBar style="auto" />
            <Boton
                text= "Get Personaje"
                onPress={ () =>{
                navigation.navigate('get')
                }}
            />
        </Teclado>
    </View>
);
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
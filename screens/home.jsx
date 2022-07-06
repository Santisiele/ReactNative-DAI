import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boton from './components/boton'
import MainStack from './navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';


function Home() {
    return (
        <NavigationContainer>
    <View style={styles.container}>
            <Text>Personajes API</Text>
            <StatusBar style="auto" />
            <Boton
                text= "Get Personaje"
                onPress={ () =>{
                navigation.navigate('Get')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Get Personaje by id"
                onPress={ () =>{
                navigation.navigate('GetById');
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Create Personaje"
                onPress={ () =>{
                navigation.navigate('Create')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Update Personaje"
                onPress={ () =>{
                navigation.navigate('Update')
                }}
            />
            <StatusBar style="auto" />
            <Boton
                text= "Delete Personaje"
                onPress={ () =>{
                navigation.navigate('Delete')
                }}
            />
    </View>
    </NavigationContainer>
);
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
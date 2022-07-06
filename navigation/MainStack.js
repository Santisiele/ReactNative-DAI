import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeGeneral from '../screens/HomeGeneral'

//personajes
import HomePersonaje from '../screens/Personaje/HomePersonaje'
import GetPersonaje from '../screens/Personaje/GetPersonaje'
import GetPersonajeById from '../screens/Personaje/GetPersonajeById'
import CreatePersonaje from '../screens/Personaje/CreatePersonaje'
import UpdatePersonaje from '../screens/Personaje/UpdatePersonaje'
import DeletePersonajeById from '../screens/Personaje/DeletePersonajeById'

//peliculasS


const Stack = createNativeStackNavigator()

const MainStack =()=>{
return(
<NavigationContainer independent={true}>
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen
            name='HomeGeneral'
            component={ HomeGeneral }
        />
        <Stack.Screen
            name='HomePersonaje'
            component={ HomePersonaje }
        />
        <Stack.Screen
            name='GetPersonaje'
            component={ GetPersonaje }
        />
        <Stack.Screen
            name='GetPersonajeById'
            component={ GetPersonajeById }
        />
        <Stack.Screen
            name='CreatePersonaje'
            component={ CreatePersonaje }
        />
        <Stack.Screen
            name='UpdatePersonaje'
            component={ UpdatePersonaje }
        />
        <Stack.Screen
            name='DeletePersonajeById'
            component={ DeletePersonajeById }
        />

    </Stack.Navigator>
</NavigationContainer>

)}

export default MainStack

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10
    },
    buttonText:{
    color:'white'
    }
})
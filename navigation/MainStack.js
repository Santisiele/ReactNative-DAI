import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//general
import HomeGeneral from '../screens/HomeGeneral'
import Response from '../screens/Response'

//personajes
import HomePersonaje from '../screens/Personaje/HomePersonaje'
import GetPersonaje from '../screens/Personaje/GetPersonaje'
import GetPersonajeById from '../screens/Personaje/GetPersonajeById'
import CreatePersonaje from '../screens/Personaje/CreatePersonaje'
import UpdatePersonaje from '../screens/Personaje/UpdatePersonaje'
import DeletePersonajeById from '../screens/Personaje/DeletePersonajeById'

//peliculas
import HomePelicula from '../screens/Pelicula/HomePelicula'
import GetPelicula from '../screens/Pelicula/GetPelicula'
import GetPeliculaById from '../screens/Pelicula/GetPeliculaById'
import CreatePelicula from '../screens/Pelicula/CreatePelicula'
import UpdatePelicula from '../screens/Pelicula/UpdatePelicula'
import DeletePeliculaById from '../screens/Pelicula/DeletePeliculaById'


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
            name='Response'
            component={ Response }
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

        
        <Stack.Screen
            name='HomePelicula'
            component={ HomePelicula }
        />
        <Stack.Screen
            name='GetPelicula'
            component={ GetPelicula }
        />
        <Stack.Screen
            name='GetPeliculaById'
            component={ GetPeliculaById }
        />
        <Stack.Screen
            name='CreatePelicula'
            component={ CreatePelicula }
        />
        <Stack.Screen
            name='UpdatePelicula'
            component={ UpdatePelicula }
        />
        <Stack.Screen
            name='DeletePeliculaById'
            component={ DeletePeliculaById }
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Get from '../screens/get'
import GetById from '../screens/getById'
import DeleteById from '../screens/delete'


const Stack = createNativeStackNavigator()

const MainStack =()=>{
return(
<NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen
            name='Get personaje'
            component={ Get }
        />

        <Stack.Screen
            name='Get personaje by Id'
            component={ GetById }
        />
        <Stack.Screen
            name='Delete personaje by Id'
            component={ DeleteById }
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
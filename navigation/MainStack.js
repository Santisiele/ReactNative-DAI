import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home'
import Get from '../screens/Get'
import GetById from '../screens/GetById'
import DeleteById from '../screens/Delete'


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
            name='Home'
            component={ Home }
        />
        <Stack.Screen
            name='Get'
            component={ Get }
        />

        <Stack.Screen
            name='GetById'
            component={ GetById }
        />
        <Stack.Screen
            name='Delete'
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
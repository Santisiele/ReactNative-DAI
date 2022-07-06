import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boton from './components/boton'
import MainStack from './navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import Home from './screens/home'


function App() {
    return (
        <MainStack/>
);
}

export default App;

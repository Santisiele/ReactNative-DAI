import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Boton from './components/boton'
import { useNavigation } from '@react-navigation/native';

function get({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Test DAI</Text>
      <StatusBar style="auto" />
      <Boton
        text= "Otra"
        onPress={ () =>{
          navigation.navigate('get')
        }}
      />
    </View>
  );
}

export default get;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
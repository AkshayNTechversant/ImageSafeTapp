import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import Router from './src/navigation/Router';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return(
    <Router/>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"red",
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#ffff'
  }
});

export default App;
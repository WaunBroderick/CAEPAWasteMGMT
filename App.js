import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoadingScreen from './screens/LoadingScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'


import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDivuGCOXtcZ7I2r4Sz-SvdK1aSaN4IN4o",
  authDomain: "caepacameroon-unv.firebaseapp.com",
  projectId: "caepacameroon-unv",
  storageBucket: "caepacameroon-unv.appspot.com",
  messagingSenderId: "52695600536",
  appId: "1:52695600536:web:8051884a98f05611ffefed",
  measurementId: "G-TQR7G4C744"
};

firebase.initializeApp(firebaseConfig)

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)


//export default createAppContainer(AppNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

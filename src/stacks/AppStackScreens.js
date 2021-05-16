import React, { useContext, useState } from "react";
import {createStackNavigator} from '@react-navigation/stack'

import {UserContext} from '../context/UserContext'

import AuthStackScreens from './AuthStackScreens'
import MainStackScreens from './MainStackScreens'
import loadingScren from '../screens/LoadingScreen'

export default AppStackScreens = () => {
    const AppStack = createStackNavigator()
    const [user] = useContext(UserContext)

    return(

        <AppStack.Navigator headerMode="none">
            {user.isLoggedIn  === null ? (
                <AppStack.Screen name="Main" component={LoadingScreen}/>
            ) : user.isLoggedIn ? (
                <AppStack.Screen name="Auth" component={MainStackScreens}/>
            ) : (
                <AppStack.Screen name="Auth" component={AuthStackScreens}/>
            )}
        </AppStack.Navigator>

    );
}
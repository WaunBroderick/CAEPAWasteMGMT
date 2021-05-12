import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"

import HomeScreen from "../screens/HomeScreen"

export default MainStackScreens = () => {
    const MainStack = createBottomTabNavigator()

    return(
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen} />
        </MainStack.Navigator>
    )
}
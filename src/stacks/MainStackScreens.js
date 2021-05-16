import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"

import HomeScreen from "../screens/HomeScreen"
import PostScreen from "../screens/PostScreen"
import ContentScreen from "../screens/ContentScreen"


export default MainStackScreens = () => {
    const MainStack = createBottomTabNavigator()

    const tabBarOptions = {
        showLabel: false,
        style: {
            backgroundColor: "#222222",
            paddingBottom: 12
        },
    };

    const screenOptions = (({route}) => ({
        tabBarIcon: ({focused}) => {
            let iconName = "ios-home";

            switch(route.name){
                case "Home":
                iconName = "ios-home"
                break;

                case "Post":
                iconName = "ios-chatbox"
                break;

                case "Content":
                iconName = "ios-notifications"
                break;

                default:
                iconName = "ios-home"

            }

            return <Ionicons name={iconName} size={24} color={focused ? "#FFFFFF" : "#666666"} />

        }
    }))

    return(
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Post" component={PostScreen} />
            <MainStack.Screen name="Content" component={ContentScreen} />


        </MainStack.Navigator>
    )
}
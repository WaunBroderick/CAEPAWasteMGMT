import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ContentScreen = () => {
    return (
       <View style={style.container}>
           <Text>Content Screen</Text>
       </View> 
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
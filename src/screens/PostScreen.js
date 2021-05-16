import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default PostScreen = () => {
    return (
       <View style={style.container}>
           <Text>Post Screen</Text>
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
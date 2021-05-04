import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// Auth
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    }

    componentDidMount(){
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }
    
    signOutUser = () => {
        firebase.auth(signOut);
    }


    render() {
        return(
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
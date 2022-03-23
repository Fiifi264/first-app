import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text>Sell What You Dont Need</Text>
            </View>

            <View style={styles.loginButton}>

            </View>
            <View style={styles.registerButton}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    loginButton: {
        backgroundColor: "#fc5c65", 
        height: 70,
        width: "100%",
    },

    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 70,
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },

    registerButton: {
        backgroundColor: "#4ecdc4", 
        height: 70,
        width: "100%",
    },
})

export default WelcomeScreen;
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>

            <View style={styles.deleteIcon}></View>

            <Image style={styles.image} source={require('../assets/chair.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: "#fc5c65",
        position: "absolute",
        left: 50,
        top: 40,
        width: 50,
        height: 50,
    },

    deleteIcon: {
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 40,
        right: 30,
        width: 50,
        height: 50,
    },

    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },

    container: {
        backgroundColor: "#000",
        flex: 1,
    }
})



export default ViewImageScreen;
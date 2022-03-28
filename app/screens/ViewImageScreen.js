import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color={'white'} size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color={'white'} size={30} />
            </View>
            <Image style={styles.image} source={require('../assets/chair.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        left: 30,
        top: 40,
    },

    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },

    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },

    container: {
        backgroundColor: colors.black,
        flex: 1,
    }
})



export default ViewImageScreen;
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        textTransform: 'uppercase',
    },

    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
})

export default AppButton;
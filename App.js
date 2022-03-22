import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    // console.log("App executed");

    // let x;
    // x.toString();

    return ( 
        <View style = { styles.container } >
            <Text> Hello World.. how are you</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
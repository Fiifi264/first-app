import { React } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
    // console.log("App executed");

    // let x;
    // x.toString();

    const handlePress = () => console.log("Text pressed");

    return ( 
        <SafeAreaView style = { styles.container } >
            <Text> Hello React Native </Text>

            <TouchableHighlight onPress={() => console.log('Image pressed')}>
                <Image source={{
                    width: 200,
                    height: 300, 
                    uri: "https://picsum.photos/200/300",
                    }} 
                />

            </TouchableHighlight>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
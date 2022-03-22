import { React } from 'react';
import { StyleSheet, Text, View, Alert, Button, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

export default function App() {
    // console.log("App executed");

    // let x;
    // x.toString();

    const handlePress = () => console.log("Text pressed");

    return ( 
        <SafeAreaView style = { styles.container } >
            <Button 
                color='red'
                title='Click Me'
                onPress={() => Alert.alert('My title', 'My message', [{text: 'yes', onPress: () => console.log('yes')}, {text: 'no', onPress: () => console.log('no')}])
                } 
            />
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
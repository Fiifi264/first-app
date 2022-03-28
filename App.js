import { React } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,} from 'react-native';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
    return ( 
        <MessagesScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
    },
});
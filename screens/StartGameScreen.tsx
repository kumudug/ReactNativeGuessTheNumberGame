import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

type AppProps = {

};

const StartGameScreen = (props: AppProps) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonPanel}>
                    <View style={styles.buttonStyle}><Button title="Reset" onPress={() => { }} color={Colors.accent} /></View>
                    <View style={styles.buttonStyle}><Button title="Confirm" onPress={() => { }} color={Colors.primary} /></View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonPanel: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttonStyle: {
        width: 100
    }
});

export default StartGameScreen;
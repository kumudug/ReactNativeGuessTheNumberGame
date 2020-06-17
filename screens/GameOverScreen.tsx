import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AppProps = {
    guessCount: number,
    userNumber?: number
};

const GameOverScreen = (props: AppProps) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over !</Text>
            <Text>Number of rounds: {props.guessCount}</Text>
            <Text>Number was: {props.userNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

type AppProps = {
    guessCount: number,
    userNumber?: number,
    onStartGame: () => void;
};

const GameOverScreen = (props: AppProps) => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over !</TitleText>
            <BodyText>Number of rounds: {props.guessCount}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onStartGame} />
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
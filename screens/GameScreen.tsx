import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

type AppProps = {
    userChoice: number,
    onGameOver: (numRounds: number) => void
};

const generateRandomNumberBetween = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = (props: AppProps) => {
    const directionLower: String = 'lower';
    const directionGreater: String = 'greater';

    //Changing a ref doesn't rerender. That's why a ref was used instead of state
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const numRounds = useRef(1);

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumberBetween(1, 100, props.userChoice)
    );

    /* Destructur used to get constants assigned from props
    This is needed to add conditions to use effect
    If we use props there it will run every time props change, which is every render cycle
    When we get the constans out it only runs if those constants change */
    const { userChoice, onGameOver } = props;

    //useEffect runs after every render cycle
    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(numRounds.current);
        }
    }, [currentGuess, userChoice]);

    const nextGuessHandler = (direction: String) => {
        if ((direction === directionLower && currentGuess < props.userChoice) ||
            (direction === directionGreater && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t Lie!', '¯\\_(ツ)_/¯', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === directionLower) {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        numRounds.current += 1;
        let nextNumber = generateRandomNumberBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess);
        setCurrentGuess(nextNumber);
    };

    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonPanel}>
                <Button title="LOWER" onPress={() => { nextGuessHandler(directionLower) }} />
                <Button title="GREATER" onPress={() => { nextGuessHandler(directionGreater) }} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonPanel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;
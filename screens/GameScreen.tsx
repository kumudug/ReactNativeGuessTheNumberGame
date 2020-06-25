import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

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

    const initialGuess = generateRandomNumberBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);

    /* Destructur used to get constants assigned from props
    This is needed to add conditions to use effect
    If we use props there it will run every time props change, which is every render cycle
    When we get the constans out it only runs if those constants change */
    const { userChoice, onGameOver } = props;

    //useEffect runs after every render cycle
    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1;
        }
        let nextNumber = generateRandomNumberBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(curVal => [nextNumber, ...curVal]);
    };

    return (
        <View style={styles.screen}>
            <TitleText>Oponent's Guess</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonPanel}>
                <MainButton onPress={() => { nextGuessHandler(directionLower) }} >
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={() => { nextGuessHandler(directionGreater) }}>
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <ScrollView>
                {pastGuesses.map(guess => {
                    return (
                        <View key={guess}>
                            <Text>{guess}</Text>
                        </View>
                    );
                })}
            </ScrollView>
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
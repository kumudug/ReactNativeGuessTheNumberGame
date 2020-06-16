import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AppProps = {
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

};

const styles = StyleSheet.create({});

export default GameScreen;
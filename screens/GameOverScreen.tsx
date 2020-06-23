import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';

type AppProps = {
    guessCount: number,
    userNumber?: number,
    onStartGame: () => void;
};

const GameOverScreen = (props: AppProps) => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over !</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    // source={require('../assets/success.png')}
                    //For web images a width and a hight is always needed. RN can't determine width and hight 
                    source={{ uri: 'https://komonews.com/resources/media/690306d7-4332-42a8-ae71-e4df5c49570a-large16x9_572.GRainierfromTolmie.jpg?1559309854851' }}
                    resizeMode="cover"
                />
            </View>
            <BodyText>Number of rounds: <Text style={styles.highlight}>{props.guessCount}</Text></BodyText>
            <BodyText>Number was: <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            <Button title="New Game" onPress={props.onStartGame} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary
    }
});

export default GameOverScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AppProps = {

};

const StartGameScreen = (props: AppProps) => {
    return (
        <View style={styles.screen}>
            <Text>The game screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center'
    }
});

export default StartGameScreen;
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

type AppProps = {
};

const StartGameScreen = (props: AppProps) => {
    let confirmedOutput;
    const [enteredValue, setEnteredValue] = useState<string>('');
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [selectedNumber, setSelectedNumber] = useState<Number>();

    const numberInputHandler = (inputText: string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid Number!",
                "Has to be a number between 1 and 99.",
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
    };

    if (confirmed) {
        confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        autoCorrect={false}
                        maxLength={2}
                        blurOnSubmit
                        autoCapitalize='none'
                        keyboardType="number-pad"
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonPanel}>
                        <View style={styles.buttonStyle}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.buttonStyle}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback >
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
    },
    input: {
        width: 50,
        textAlign: 'center'

    }
});

export default StartGameScreen;
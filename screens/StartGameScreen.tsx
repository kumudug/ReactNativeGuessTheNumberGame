import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

type AppProps = {
    onStartGame: (userNumber: number) => void;
};

const StartGameScreen = (props: AppProps) => {
    let confirmedOutput;
    const [enteredValue, setEnteredValue] = useState<string>('');
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [selectedNumber, setSelectedNumber] = useState<number>(0);

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
        Keyboard.dismiss();
    };

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>Chosen Number</BodyText>
                <View style={styles.summaryContainerNumber}>
                    <NumberContainer>
                        {selectedNumber}
                    </NumberContainer>
                    <MainButton onPress={() => { props.onStartGame(selectedNumber) }} >
                        START GAME
                    </MainButton>
                </View>
            </Card>
        );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.keyboardAvoid} behavior="height" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start a New Game!</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a Number</BodyText>
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
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1
    },
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        //Expo doesn't support fontWeight so you need to use font famility to set bold fonts
        //fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center'
    },
    buttonPanel: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttonStyle: {
        width: Dimensions.get('window').width / 4
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20
    },
    summaryContainerNumber: {
        alignItems: 'center'
    }
});

export default StartGameScreen;
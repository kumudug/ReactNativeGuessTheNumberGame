import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [guessCount, setGuessCount] = useState<number>(0);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  //Don't load the app until everything is loaded
  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => { setDataLoaded(true) }}
      onError={(err) => console.log(err)} />
  }

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setGuessCount(0);
  };

  const gameOverHandler = (numRounds: number) => {
    setGuessCount(numRounds);
  }

  const startNewGameHandler = () => {
    setGuessCount(0);
    setUserNumber(0);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (guessCount > 0) {
    content = <GameOverScreen
      guessCount={guessCount}
      userNumber={userNumber}
      onStartGame={startNewGameHandler} />
  } else if (userNumber > 0) {
    content = <GameScreen
      userChoice={userNumber}
      onGameOver={gameOverHandler} />
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [guessCount, setGuessCount] = useState<number>(0);

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setGuessCount(0);
  };

  const gameOverHandler = (numRounds: number) => {
    setGuessCount(numRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (guessCount > 0) {
    content = <GameOverScreen
      guessCount={guessCount} />
  } else if (userNumber) {
    content = <GameScreen
      userChoice={userNumber}
      onGameOver={gameOverHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);

    const restartGame = () => {
        setGuessRounds(0);
        setUserNumber(null);
    };

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
    };
    const gameOverHandler = (numOfRounds) => setGuessRounds(numOfRounds);

    let content = <StartGameScreen onStartGame={startGameHandler} />;
    if (userNumber && guessRounds <= 0) {
        content = (
            <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
        );
    } else if (guessRounds > 0) {
        content = (
            <GameOverScreen
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onRestart={restartGame}
            />
        );
    }

    return (
        <View style={styles.screen}>
            <StatusBar style="light" />
            <Header title="Guess a Number" />
            {content}
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

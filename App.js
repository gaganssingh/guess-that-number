import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const App = () => {
    const [userNumber, setUserNumber] = useState();

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
    };

    let content = <StartGameScreen onStartGame={startGameHandler} />;

    if (userNumber) {
        content = <GameScreen userChoice={userNumber} />;
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

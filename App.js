import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
    return (
        <View style={styles.screen}>
            <StatusBar style="light" />
            <Header title="Guess a Number" />
            <StartGameScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

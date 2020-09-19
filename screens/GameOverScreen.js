import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over!</Text>
            <Text>You had selected: {props.userNumber}</Text>
            <Text>The bot took {props.roundsNumber} rounds to guess.</Text>
            <Button title="PLAY AGAIN" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default GameOverScreen;

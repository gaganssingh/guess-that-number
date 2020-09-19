import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/success.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <BodyText>You had selected: {props.userNumber}</BodyText>
            <BodyText>
                The bot took {props.roundsNumber} rounds to guess.
            </BodyText>
            <Button title="PLAY AGAIN" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: "center", alignItems: "center" },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.dark,
        overflow: "hidden",
        marginVertical: 15,
    },
    image: { width: "100%", height: "100%" },
});

export default GameOverScreen;

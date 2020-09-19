import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={200}
                    source={{
                        uri:
                            "https://external-preview.redd.it/N8lAnTbplGS_iT-RxmfdHTnd6UcDCKsJ9nrcHbSr6LI.png?auto=webp&s=2c72785af23d69d61fae176c6b2561b6dd8647c7",
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
                {/* <Image
                    source={require("../assets/success.png")}
                    style={styles.image}
                    resizeMode="cover"
                /> */}
            </View>
            <BodyText style={{ ...styles.text, marginTop: 20 }}>
                You selected: {props.userNumber}
            </BodyText>
            <BodyText style={{ ...styles.text, marginBottom: 20 }}>
                The bot took {props.roundsNumber} rounds to guess.
            </BodyText>

            <MainButton onPress={props.onRestart} opacity={0.3}>
                PLAY AGAIN
            </MainButton>
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
    text: { fontSize: 18 },
});

export default GameOverScreen;

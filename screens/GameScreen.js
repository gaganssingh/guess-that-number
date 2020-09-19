import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min;
    if (random === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return random;
    }
};

const renderPastGuessList = (guess, numRounds) => (
    <View key={guess} style={styles.listItem}>
        <BodyText>#{numRounds}</BodyText>
        <BodyText>{guess}</BodyText>
    </View>
);

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < props.userChoice) ||
            (direction === "greater" && currentGuess > props.userChoice)
        ) {
            Alert.alert("You Sure?", "Why are you lying, huh?", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }

        if (direction === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        // setRounds(rounds + 1);
        setPastGuesses((prevGuesses) => [nextNumber, ...prevGuesses]);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton
                    onPress={nextGuessHandler.bind(this, "lower")}
                    opacity={0.3}
                >
                    <Ionicons name="md-remove" size={24} color={Colors.light} />
                </MainButton>
                <MainButton
                    onPress={nextGuessHandler.bind(this, "greater")}
                    opacity={0.3}
                >
                    <Ionicons name="md-add" size={24} color={Colors.light} />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                >
                    {pastGuesses.map((guess, i) =>
                        renderPastGuessList(guess, pastGuesses.length - i)
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        marginTop: "30%",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "90%",
    },
    listContainer: {
        width: "80%",
        flex: 1,
    },
    list: {
        alignItems: "center",
    },
    listItem: {
        borderColor: Colors.dark,
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
    },
});

export default GameScreen;

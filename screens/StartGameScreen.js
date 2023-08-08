import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartGameScreen({ onNumberSelected }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Enter a number between 1 and 99.", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onNumberSelected(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card
        title="Enter a number..."
        resetInputHandler={resetInputHandler}
        confirmInputHandler={confirmInputHandler}
        primaryBtn="Confirm"
        secondaryBtn="Reset"
      >
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    color: "white",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StartGameScreen;

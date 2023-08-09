import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ attempts, number, onStartNewGame }) {
  return (
    <View style={styles.contaniner}>
      <Title>Game Over</Title>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{attempts}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{number}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  contaniner: {
    flex: 1,
  },
  highlight: {
    fontWeight: "bold",
  },
  summary: {
    fontSize: 20,
    padding: 12,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
});

export default GameOverScreen;

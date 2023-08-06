import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.rootScreen}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#4c669f",
    flex: 1,
  },
});

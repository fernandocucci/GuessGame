import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import PrimaryButton from "./PrimaryButton";

function Card({
  children,
  resetInputHandler,
  confirmInputHandler,
  title,
  primaryBtn,
  secondaryBtn,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.instruction}>{title}</Text>
      {children}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>
            {secondaryBtn}
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>
            {primaryBtn}
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  instruction: {
    color: "white",
    fontSize: 24,
  },
  buttonContainer: {
    flex: 1,
  },

  buttonsContainer: {
    flexDirection: "row",
  },
});

export default Card;

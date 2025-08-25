import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RobotImage from "../assets/icons/robotIcon";
import ArrowRightIcon from "../assets/icons/arrowRightIcon";

export default function RobotCrad() {
  return (
    <LinearGradient
      colors={["#495AFF", "#0A0328"]} // Gradient similar to screenshot
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>Need Help?</Text>
        <Text style={styles.subtitle}>Ask Our AI Chat! 💬</Text>
        <Text style={styles.description}>
          Instant answers. Smarter decisions.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Chatting</Text>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>

      <RobotImage style={styles.robotImage} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#FFFFFF1A",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 4,
    fontFamily: "Syne-Medium",
  },
  subtitle: {
    color: "#7885FF",
    fontSize: 18,
    // fontWeight: "700",
    marginBottom: 6,
    fontFamily: "Syne-Bold",
  },
  description: {
    color: "#FFFFFF90",
    fontSize: 12,
    marginBottom: 12,
    fontFamily: "Poppins-SemiBold",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#495AFF",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    gap: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
  robotImage: {
    width: 90,
    height: 90,
    // backgroundColor: "red",
    // marginTop: 60,
    top: 20,
  },
});

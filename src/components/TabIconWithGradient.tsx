import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

type TabIconWithGradientProps = {
  focused?: boolean;
  icon?: React.ReactNode;
};

export function TabIconWithGradient({
  icon,
  focused,
}: TabIconWithGradientProps) {
  return (
    <View style={styles.container}>
      {focused && (
        <View style={styles.glowWrapper}>
          <Svg height="100%" width="100%">
            <Defs>
              <RadialGradient id="blueGlow" cx="50%" cy="-5%" r="45%">
                <Stop offset="0%" stopColor="#495AFF" stopOpacity="0.6" />
                <Stop offset="100%" stopColor="#000" stopOpacity="0" />
              </RadialGradient>
            </Defs>
            <Rect x="25" y="0" width="60%" height="90%" fill="url(#blueGlow)" />
          </Svg>
        </View>
      )}
      {focused && (
        <LinearGradient
          colors={["rgba(73, 90, 255, 0)", "#495AFF", "rgba(73, 90, 255, 0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.topBorder}
        />
      )}
      {icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingBottom: 6,
  },
  glowWrapper: {
    position: "absolute",
    top: -5,
    width: 140,
    height: 70,
  },
  topBorder: {
    position: "absolute",
    top: -5,
    height: 2,
    width: 70,
  },
});

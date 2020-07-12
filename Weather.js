import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes, { func } from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#0f0c29", "#373B44", "#24243e"],
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#0F2027", , "#203A43", "#91EAE4"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#83a4d4", "#b6fbff"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#ffffff"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#076585", "#ffffff"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#003973", "#E5E5BE"],
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#003973", "#E5E5BE"],
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#292E49", "#536976"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName || "weather-night"}
          size={80}
          color="white"
        />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  temp: {
    fontSize: 36,
    color: "white",
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

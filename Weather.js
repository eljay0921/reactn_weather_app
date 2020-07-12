import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes, { func } from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "",
    subtitle: "",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#0f0c29", "#373B44", "#24243e"],
    title: "",
    subtitle: "",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "",
    subtitle: "",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#0F2027", , "#203A43", "#91EAE4"],
    title: "Rainism~~",
    subtitle: "Oh my rainism....!!",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "",
    subtitle: "",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#ffffff"],
    title: "Great!",
    subtitle: "Let's go outside!!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#076585", "#ffffff"],
    title: "Gray sky..",
    subtitle: "So gloomy day",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#003973", "#E5E5BE"],
    title: "Fxxxing Day",
    subtitle: "Thanks a lot China 🤬",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Fxxxing Day",
    subtitle: "",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Fxxxing Day",
    subtitle: "Thanks a lot China 🤬",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#003973", "#E5E5BE"],
    title: "Fxxxing Day",
    subtitle: "Thanks a lot China 🤬",
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Fxxxing Day",
    subtitle: "Thanks a lot China 🤬",
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#292E49", "#536976"],
    title: "Dangerous !",
    subtitle: "Just in home",
  },
};

export default function Weather({ temp, condition }) {
  //   condition = "Clear";
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
        <Text style={styles.temp}>{temp} °C</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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

  title: {
    color: "white",
    fontSize: 45,
    fontWeight: "300",
    marginBottom: 15,
  },

  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 25,
  },

  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});

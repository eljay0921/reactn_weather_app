import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const WEATHER_APIKEY = "153f093b757f717711d18cddfd239a89";

// 이름 안써줘도 동작함.
export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (lon, lat) => {
    const weatherInfo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_APIKEY}`
    );
    console.log(weatherInfo);
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(longitude, latitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

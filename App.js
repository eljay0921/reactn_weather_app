import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const WEATHER_APIKEY = "153f093b757f717711d18cddfd239a89";

// 이름 안써줘도 동작함.
export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (lon, lat) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_APIKEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(longitude, latitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}

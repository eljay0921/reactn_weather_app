import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

// 이름 안써줘도 동작함.
export default class extends React.Component {
  getLocation = async () => {
    let loc = await Location.getCurrentPositionAsync();
    console.log(loc);
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}

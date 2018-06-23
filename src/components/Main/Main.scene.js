import React, { Component } from "react";
import { connect } from "react-redux";

import {
  View,
  Animated,
  Easing,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Platform,
  DeviceEventEmitter
} from "react-native";

import { AdMobInterstitial } from "react-native-admob";

import { LOGO, BACK_BUTTON, COLOR } from "../common/variables";

import Button from "./Button";

import CommonStyle from "../common/style";
import Style from "./style";

const adUnitID =
  Platform.OS === "ios"
    ? "ca-app-pub-8489622876114568/6502755444"
    : "ca-app-pub-8489622876114568/6629488771";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AdMobInterstitial.setAdUnitID(adUnitID);
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
  }

  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground
        source={require("../../assets/images/bg_home.png")}
        style={CommonStyle.imageBackground}
      >
        <View style={CommonStyle.content}>
          <Image
            style={CommonStyle.logo}
            resizeMode={"contain"}
            source={LOGO}
          />
          <View style={Style.buttons}>
            <Button type={"Addition"} navigation={navigation} />
            <Button type={"Subtraction"} navigation={navigation} />
            <Button type={"Multiplication"} navigation={navigation} />
            <Button type={"Division"} navigation={navigation} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Main;

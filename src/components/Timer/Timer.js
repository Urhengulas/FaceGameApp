//basic component is from https://stackoverflow.com/questions/31963803/create-timer-with-react-native-using-es6#36164620

import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { TimerStyle } from "./Timer.style";

const timer = () => {};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: 10
    };
  }

  countdownTimer() {
    this.setState({ remainingTime: 10 });
    clearInterval(timer);
    timer = setInterval(() => {
      if (!this.state.remainingTime) {
        clearInterval(timer);
        return false;
      }
      this.setState(prevState => {
        return { remainingTime: prevState.remainingTime - 1 };
      });
    }, 1000);
  }

  render() {
    return (
      <View style={TimerStyle.container}>
        <Text>Remaining time :{this.state.remainingTime}</Text>
        <Button title="Start timer" onPress={() => this.countdownTimer()} />
      </View>
    );
  }
}

export { Timer };

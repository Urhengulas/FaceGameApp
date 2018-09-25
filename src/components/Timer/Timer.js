//basic component is from https://stackoverflow.com/questions/31963803/create-timer-with-react-native-using-es6#36164620

import React, {Component} from "react";
import {View, Text, Button, StyleSheet} from "react-native";


const timer = () => {};

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingTime: 10
        };
    }

    countdownTimer() {
        this.setState({remainingTime: 10});
        clearInterval(timer);
        timer = setInterval(() => {
            if (!this.state.remainingTime) {
                clearInterval(timer);
                return false;
            }
            this.setState(prevState => {
                return {remainingTime: prevState.remainingTime - 1}
            });
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Remaining time :{this.state.remainingTime}</Text>
                <Button title="Start timer" onPress={() => this.countdownTimer()}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export {Timer};
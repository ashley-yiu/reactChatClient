/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WelcomeScreen from './WelcomeScreen'

export default class reactChatClient extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomeScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('reactChatClient', () => reactChatClient);

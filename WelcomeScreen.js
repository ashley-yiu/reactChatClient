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
  View,
  TextInput
} from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'Username', password: 'Password'}
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Please enter your credentials to log in</Text>
      <TextInput style={styles.textInput}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
      <TextInput style={styles.textInput}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  welcomeText: {
    height: 50,
    fontSize: 20,
    color: '#9966ff'
  },
  textInput: {
    color: '#a3c2c2',
    paddingHorizontal: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

AppRegistry.registerComponent('reactChatClient', () => reactChatClient);

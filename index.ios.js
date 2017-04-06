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
  Image
} from 'react-native';

import DisplayPic from './app/img';

export default class NativeTestApp extends Component {
  render() {
    return (
      <View style={styles.container}>

        <DisplayPic num={2}/>

        <Text style={styles.welcome}>
          
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  welcome: {
    color: 'orange',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('NativeTestApp', () => NativeTestApp);

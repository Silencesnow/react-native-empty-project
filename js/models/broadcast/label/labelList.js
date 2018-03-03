import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
export default class LabelList extends Component<{}> {
  render() {
    return <Text style={styles.welcome}>hihahahahahhaha</Text>
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color:'#000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

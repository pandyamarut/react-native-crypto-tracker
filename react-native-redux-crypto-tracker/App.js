import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Header,CryptoContainer } from './src/components';
import { Provider } from 'react-redux';
import Store from './src/Store';

export default class App extends Component {
  render() {
    return (
      

      <View>
      <Button
  onPress={() => {
    alert('You tapped the button!');
  }}
  title="Press Me"
/>
</View>

    );
  }
}

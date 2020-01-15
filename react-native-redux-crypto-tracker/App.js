import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components';
import { Provider } from 'react-redux';
import Store from './src/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
        </View>

      </Provider>


    );
  }
}

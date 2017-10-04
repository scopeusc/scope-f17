import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image
} from 'react-native';

export default class BookScreen extends Component {
  /*
    Set the StackNavigator options so our screen's title says Book
  */
  static navigationOptions = {
    title: 'Book',
  };

  render() {
    return (
      <View>Fill me out</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20
  },
  thumbnail: {
    width: 200,
    height: 200,
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    padding: 15
  }
});
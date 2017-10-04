import React, { Component } from 'react';
import { 
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet
} from 'react-native';

export default class BookItem extends Component {
  render() {
    return (
      <View>Fill me out</View>
    ); 
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 30,
    borderBottomColor: '#7f8c8d',
    borderBottomWidth: 1
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  bookDescription: {
    fontSize: 16
  }
});
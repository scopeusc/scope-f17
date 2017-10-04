import React, { Component } from 'react';
import { 
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet
} from 'react-native';

export default class BookItem extends Component {
  render() {
    const book = this.props.book;
    let description;

    /*
      Sometimes the description can be super long. 
      This code will shorten the description to be 120 characters max
    */
    if (book.description !== undefined) {
      if (book.description.length >= 120) {
        description = book.description.slice(0,120) + '...';
      } else {
        description = book.description;
      }
    }
    
    return (
      <TouchableWithoutFeedback 
        onPress={() => {
          this.props.navigation.navigate('Book', { book: book })
        }}
      >
        <View style={styles.listItem}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          {(description) ? (<Text style={styles.bookDescription}>{description}</Text>) : null}
        </View>
      </TouchableWithoutFeedback>
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
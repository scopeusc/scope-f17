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
    /*
      Grab the data that may have been passed to this screen through the navigator
    */
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>{params.book.title}</Text>

          <Image 
            style={styles.thumbnail}
            resizeMode='contain'
            source={{uri: params.book.imageLinks.thumbnail}}
          />

          <Text style={styles.description}>{params.book.description}</Text>
        </ScrollView>
      </View>
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
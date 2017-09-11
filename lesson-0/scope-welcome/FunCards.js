/*
  FunCards.js
  ---
  Author: Wilhelm Willie, 2017
  Description: FunCards is a component that will display the fun we have as
  Scope in a pretty "card-like" manner. Data for fun passed through as a prop
*/

import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  Animated
} from 'react-native';

class FunCards extends Component {

  state = {
    fadeOpacity: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeOpacity,
      {
        toValue: 1,
        duration: 300
      }
    ).start();
  }

  render() {
    // Map function loops through the data array and creates an array
    // of React View elements that display our card data
    const cards = this.props.data.map((data, index) => {
      return (
        <View style={styles.card} key={index}>
          <Text style={styles.cardTitle}>{data.title}</Text>

          <Text>{data.description}</Text>
        </View>
      )
    });

    // That array of React View elements is then displayed here
    return (
      <Animated.View 
        style={[
          this.props.style,
          {opacity: this.state.fadeOpacity}
        ]}
      >
        {cards}
      </Animated.View>
    ); 
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderLeftColor: 'rgb(103, 52, 209)',
    borderLeftWidth: 20
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10
  }
});


export default FunCards;

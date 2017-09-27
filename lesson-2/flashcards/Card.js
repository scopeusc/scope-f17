import React from 'react';
import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  TouchableWithoutFeedback 
} from 'react-native';

export default class Card extends React.Component {
  state = {}

  /*
    Flips the showTerm flag in our state
  */
  flipCard = () => {
    // Fill this out
  }

  render() {
    // Fill this out
  } 
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    height: 300
  }, 
  cardTitle: {
    color: '#7f8c8d',
    fontSize: 18,
    fontFamily: 'Georgia',
    position: 'absolute',
    left: 20,
    top: 20
  },
  termText: {
    fontSize: 50,
    fontFamily: 'Georgia-Bold'
  },
  definitionText: {
    fontSize: 30,
    fontFamily: 'Georgia'
  }
}); 
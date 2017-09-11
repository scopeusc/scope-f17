/*
  Welcome.js
  ---
  Author: Wilhelm Willie, 2017
  Description: Welcome component that displays when the user loads the app.
  Clicking the button should reveal some cards showing off what's to come
  throughout the semester.
*/

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  Image,
  View,
  TouchableHighlight
} from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.welcomeHeading}>Welcome to Scope</Text>

        <Image source={require('./assets/logo-square.png')} style={{width: 200, height: 200, resizeMode: 'contain'}} />

        <Text style={styles.welcomeBody}>Congratulations and welcome to Scope, a comunity of talented
        CS students passionate about software development and building great
        things. This semester is going to be great. Wanna see what lies ahead?</Text>

        <TouchableHighlight 
          style={styles.funButton} 
          onPress={this.props.buttonPress}
        >
          <Text style={styles.funButtonText}>Sure!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeHeading: {
    fontSize: 28,
    fontWeight: '700',
    color: 'rgb(103, 52, 209)'
  },
  welcomeBody: {
    fontSize: 16,
    lineHeight: 24,
    width: '90%',
    color: '#333437'
  },
  funButton: {
    width: '40%',
    padding: 15,
    marginTop: 20,
    backgroundColor: 'rgb(103, 52, 209)',
    borderRadius: 3
  },
  funButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

export default Welcome;

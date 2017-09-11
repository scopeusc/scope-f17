/*
  Scope Welcome
  ---
  Author: Wilhelm Willie, 2017
  Description: Scope Welcome is a starter application for Scope USC's members
  to learn the basics of React and React Native. For more info, check out our
  website: scopeusc.com
*/

import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Welcome from './Welcome';
import FunCards from './FunCards';

export default class App extends React.Component {
  // Data for the fun cards that reveal the fun things we do as a club
  funData = [
    {
      title: 'Retreats',
      description: 'Every semester, we go on a retreat to somewhere fun for a night. These retreats are a lot of fun and very memorable'
    },
    {
      title: 'Parties',
      description: 'Who said CS students can\'t have a good time? As a club, we throw a few parties a semester'
    },
    {
      title: 'Recruitment Events',
      description: 'This semester, we have exciting events with Facebook, Google, Twitter, Disney, and the CIA planned'
    },
    {
      title: 'Learning',
      description: 'And of course, throughout the semester you\'ll be learning React Native, a hot new technology for developing mobile apps'
    }
  ];

  state = {
    showFun: false
  }

  // Called when the fun button is pressed. Will turn the variable showFun
  // to true which will reveal the FunCards 
  activateFun = () => {
    this.setState({
      showFun: true
    });
  }

  render() {
    // Display "fun cards" if the showFun flag is on
    const funCards = (this.state.showFun) ? (
      <FunCards data={this.funData} style={styles.funCards}/>
    ) : (null);

    return (
      <ScrollView style={styles.body}>
        <View style={styles.container}>
          <Welcome buttonPress={this.activateFun} style={styles.welcomeContainer} />

          {funCards}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e0e0e0'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 40
  },
  welcomeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  funCards: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%'
  }
});

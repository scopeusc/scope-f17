import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class TransactionScreen extends Component {
  render() {
    /*
      Grab the data that may have been passed to this screen through the navigator
    */
    const data = this.props.navigation.state.params.data;

    // See TransactionItem.js for an explanation of this code
    const gain = (data.amount >= 0);

    const textStyle = (gain) ? (styles.gainText) : (styles.lossText);

    return (
      <View style={styles.container}>
        <Text style={textStyle}>
          {
            (gain) ? ("+" + data.amount) : (data.amount)
          }
        </Text>

        <Text style={styles.otherText}> {data.other}</Text>

        <Text style={styles.reasonText}>{data.reason}</Text>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gainText: {
    color: 'green',
    fontWeight: '600',
    fontSize: 40
  },
  lossText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 40
  },
  otherText: {
    fontSize: 40
  },
  reasonText: {
    fontSize: 20,
    marginTop: 20,
    width: '100%'
  }
})
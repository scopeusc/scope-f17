import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';

export default class TransactionItem extends Component {
  render() {
    // If the amount we got was greater than 0, we gained money
    const gain = (this.props.data.amount >= 0);

    // Change the text style of our amount based on whether or not we gained or lost money
    const textStyle = (gain) ? (styles.gainText) : (styles.lossText);

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          // If we press on this transaction item, we navigate to the Transaction screen to see more details
          this.props.navigation.navigate('Transaction', { data: this.props.data });
        }}
      >
        <View style={styles.container}>
          <Text style={textStyle}>
            {
              // Display a + if we gained money
              (gain) ? ("+" + this.props.data.amount) : (this.props.data.amount)
            }
          </Text>

          <Text style={styles.otherText}> {this.props.data.other}</Text>
        </View>
      </TouchableWithoutFeedback>
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
  }
})
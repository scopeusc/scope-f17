import React, { Component } from 'react';
import { 
  View,
  Text,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

/*
  Import our TransactionItem component
*/
import TransactionItem from '../components/TransactionItem';

export default class HomeScreen extends Component {
  /*
    Used by our StackNavigator to have a title
  */
  static navigationOptions = {
    title: 'Transactions',
    header: null
  };

  /*
    We keep track of an array of transactions in our state
    Transactions contain 3 bits of information:
      Amount: Negative if we paid someone, positive if someone paid us
      Other: The other end of the transaction
      Reason: Additioanl details or reason for transaction
  */
  state = {
    transactions: [
      {
        amount: -14,
        other: 'Cava',
        reason: 'Bought an overpriced lunch from Mediterranean Chipotle'
      },
      {
        amount: 15,
        other: 'Adam',
        reason: 'Won $15 bet'
      },
      {
        amount: -5,
        other: 'Vendor',
        reason: 'Bought a victory hot dog to celebrate USC\'s win'
      }
    ]
  };

  /*
    React wants repeated components to have a key associated with it
    For simplicity sake, we set the key to the index in the array
  */ 
  keyExtractor = (item, index) => (index);

  /* 
    Passed to the AddScreen
    Function that adds transactions to our state
  */
  addTransaction = (transaction) => {
    const transactions = this.state.transactions;
    transactions.push(transaction);

    this.setState({
      transactions: transactions
    });
  }

  /*
    Used by our FlatList to render each transaction in a list
  */
  renderTransaction = ({item}) => {
    return (
        <TransactionItem data={item} navigation={this.props.navigation} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.transactions}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderTransaction}
        />

        <TouchableHighlight 
          onPress={() => {
            this.props.navigation.navigate('Add', {addTransaction: this.addTransaction});
          }}
          style={styles.addButton}
          underlayColor="#7940DB"
        >
          <Text style={styles.addButtonText}>Add Transaction</Text>
        </TouchableHighlight>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    flex: 1,
    paddingTop: 20
  },
  addButton: {
    padding: 20,
    backgroundColor: '#996BE8'
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  }
})
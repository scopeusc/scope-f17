import React, { Component } from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class AddScreen extends Component {
  /*
    Used by our StackNavigator to display a title
  */
  static navigationOptions = {
    title: 'Add Transaction',
  };

  /*
    We have three textinputs that modify 3 different values
  */
  state = {
    amountInput: '',
    otherInput: '',
    reasonInput: ''
  }

  /*
    Set up 3 different TextInputs and a TouchableHighlight/Button that will add data to our transaction list
  */
  render() {
    return (
      <View>
        <TextInput
          value={this.state.amountInput}
          type="numeric"
          onChangeText={(value) => {
            this.setState({ amountInput: value });
          }}
          placeholder="Amount (Ex: 5 or -5)"
          style={styles.textInput}
        />

        <TextInput
          value={this.state.otherInput}
          onChangeText={(value) => {
            this.setState({ otherInput: value });
          }}
          placeholder="Other party (Ex: Jack)"
          style={styles.textInput}
        />

        <TextInput
          value={this.state.reasonInput}
          onChangeText={(value) => {
            this.setState({ reasonInput: value });
          }}
          placeholder="Reason (Ex: Bought lunch)"
          style={styles.textInput}
        />

        <TouchableHighlight
          onPress={() => {
            /*
              We passed in a function through our navigator that we can access
              when we want to change our HomeScreen's state
            */

            this.props.navigation.state.params.addTransaction({
              amount: parseFloat(this.state.amountInput || 0),
              other: this.state.otherInput,
              reason: this.state.reasonInput
            });

            // Helper function that goes back to the previous screen
            this.props.navigation.goBack();
          }}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Add Transaction</Text>
        </TouchableHighlight>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffffff',
    borderColor: '#ededed',
    borderWidth: 1,
    margin: 15,
    padding: 15
  },
  addButton: {
    padding: 20,
    margin: 15,
    backgroundColor: '#996BE8'
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  }
});

/*
  Import statements necessary to make our application run
*/
import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

class App extends Component {
  /*
    Initialize the state of our application which keeps track of various
    numerical amounts (like the inputted bill amount, computed tip, and
    the final total value)
  */
  state = {
    billAmount: 0,
    tip: 0,
    totalValue: 0
  }

  /*
    Updates the state whenever text input changes

    We pass this function to a TextInput as a prop so whenever changes are
    made to the TextInput, we update our current state
  */
  textChange = (value) => {
    // value is a string so we convert value to a float (number with decimals)
    value = parseFloat(value || 0);

    // Store this new value in our application's state
    this.setState({
      billAmount: value
    });
  }

  /*
    Called when buttons are pressed. Calculates the tip and final value of
    a given bill

    We pass this function to a Button as a prop so whenever it's clicked, it calls
    this function
  */
  calculateTip = (proportion) => {
    const billAmount = this.state.billAmount;
    const tip = proportion * billAmount;

    // Now that we've calculated the tip and total value, we store it in our
    // app state
    this.setState({
      tip: tip, 
      totalValue: billAmount + tip
    })

    // Used to hide the phone keyboard
    Keyboard.dismiss();
  }

  /*
  === Not used in lesson 1 but is a hint for one of the challenges :) ===
  roundToCents = (amount) => {
    // Rounds a number by 100, rounds the result, then divides it back by 100
    // A nice mathematical way to round a number to 2 digits
    const result = Math.round(amount * 100) / 100;
    return result;
  }
  */

  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.title}>Tip Calculator</Text>

        <TextInput 
          autoFocus={true} 
          keyboardType='numeric' 
          style={styles.billInput} 
          onChangeText={this.textChange} 
          placeholder="Bill Amount" 
        />

        <View style={styles.tipButtonContainer}>
          <Button 
            title="10%" 
            style={styles.tipButton}
            onPress={() => {
              this.calculateTip(0.1);
            }} 
          /> 

          <Button 
            title="15%" 
            style={styles.tipButton}
            onPress={() => {
              this.calculateTip(0.15);
            }} 
          /> 

          <Button 
            title="20%" 
            style={styles.tipButton}
            onPress={() => {
              this.calculateTip(0.2);
            }} 
          /> 

          <Button 
            title="25%" 
            style={styles.tipButton}
            onPress={() => {
              this.calculateTip(0.25);
            }} 
          /> 
        </View>

        <Text style={styles.tipLabel}>Tip: {this.state.tip}</Text>
        <Text style={styles.totalLabel}>Total: {this.state.totalValue}</Text>
      </View>
    );
  }
}

/*
  Styles for our tip calculator
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },
  billInput: {
    width: '80%',
    height: 80,
    fontSize: 28,
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  tipButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  tipLabel: {
    fontSize: 28,
    marginTop: 20
  },
  totalLabel: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 20
  }
});

export default App;

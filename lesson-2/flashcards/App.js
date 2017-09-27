import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  ScrollView, 
  Modal,
  TextInput
} from 'react-native';

/*
  Import our two custom components
*/
import NewCardModal from './NewCardModal';
import Card from './Card';

/*
  Default set of cards
*/
const DEFAULT_CARDS = [
  {
    term: "TERM",
    definition: "Sample definition"
  }
];

class App extends Component {
  // Fill this out
  state = {}
 
  /*
    Toggles the new card modal
  */
  _toggleModal = () => {
    // Fill this out
  }

  /*
    Passed to the new card modal.
    Called when user decides to add new card.
    Creates card object and adds it to our state
  */
  _addCard = (_term, _definition) => {
    // Fill this out
  }

  render() {
    // Loop through the cards array in state and create Card component for each card
    const cards = this.state.cards.map((card, index) => {
      // Fill this out
    });

    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  addButton: {
    backgroundColor: '#2ecc71',
    paddingTop: 20,
    paddingBottom: 20
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20
  }
});

export default App;
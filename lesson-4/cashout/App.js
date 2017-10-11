import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import TransactionScreen from './screens/TransactionScreen';

/*
  Set up our StackNavigator which will have 3 screens defined:
  - Home (our home screen listing all of our transactions)
  - Add (our screen that allows us to add a transaction)
  - Transaction (tapping on an entry will show us details about our transaction)
*/
const App = StackNavigator({
  Home: { screen: HomeScreen },
  Add: { screen: AddScreen },
  Transaction: { screen: TransactionScreen }
});

export default App;
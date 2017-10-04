import { StackNavigator } from 'react-navigation';
import SearchScreen from './SearchScreen';
import BookScreen from './BookScreen';

/* 
  Our App will rely on a StackNavigator to move between screens
  Here we define 2 screens: search and book
  Search - Allows us to search books by title
  Book - Allows us to see details about a particular book
*/
const App = StackNavigator({
  Search: { screen: SearchScreen },
  Book: { screen: BookScreen }
});

export default App;
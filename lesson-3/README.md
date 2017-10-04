# Lesson 3: Networking and Navigation

## Introduction

Last week, you built a flashcards app which helped get you more comfortable with React Native and how components work. Now that you know a bit more about how React Native works, this lesson is intended to teach you how to get your app to make HTTP requests and navigate across screens.

This lesson, we'll be building a librarian application. Users can search for a book title and see the results in a list. If a user taps on a list item, they'll be directed to a screen where they can get more information about the book they selected. 

## Prerequisites
Before starting this lesson, you should have already completed lesson 1 and 2 meaning you have a better understanding of how React components work 

Note: In this repository is a finished `librarian-finished` project that looks similar to what you'll be building. If you're ever stuck, refer to that code as guidance

## Steps
**BEFORE YOU START:** fill out this form w/ project ideas you have for the final project. Feel free to submit as many ideas as you want. These ideas can be as silly or serious as you want. Be creative, think outside the box, think of things you truly want to build. Try putting in 2-3 ideas before next week: https://docs.google.com/forms/d/e/1FAIpQLSclSomxmFEZta9Hrg6tajBbX8caR-e6f5poQ19jIuUMBiTB6Q/viewform?usp=sf_link

1. For this lesson, you'll be using skeleton code to start off your project. Run `git pull` on your scope-f17 repository and copy the `librarian` folder into a separate place on your machine
    * Once you have the folder copied, `cd` into the `librarian` folder and run `npm install` to install the necessary libraries. You can then run `npm start` or `npm run ios/android` like you normally would. You might get a few errors or warnings at first but we'll fix those over the course of the lesson
2. In this lesson, we'll be working with 4 different files: `App.js`, `BookItem.js`, `BookScreen.js`, and `SearchScreen.js`
    * `App.js` - our main entry point to our application. Unlike previous projects, App.js will not be a component we define but rather a StackNavigator, a type of navigation made available to use by the `react-navigation` package
    * `SearchScreen.js` - our 'home' screen for our application. This will define the interface and behavior that allows users to search for books
    * `BookScreen.js` - our 'book screen' for our application. This will define the interface and behavior that allows users to see more details about a book. When a user taps on a book from the SearchScreen, it directs them to the BookScreen 
    * `BookItem.js` - a custom component that we use to render the list of our search results
3. This app is structured differently from previous projects. The reason is cause we're adding navigation to our application. 
    * We're using a StackNavigator which is a component made available to use through the `react-navigation` library. `react-navigation` is a 3rd party library that simplifies navigation. You didn't have to do it but to install it in React Native projects, you run `npm install --save react-navigation`. This saves `react-navigation` as a dependency and downloads the necessary files
    * Read more about react-navigation here: https://reactnavigation.org
    * In `App.js`, we define 2 screens: Search and Book. We point Search to a SearchScreen component and Book to a BookScreen component. If we ever tell our navigator to point to 'Search', it'll take us to our SearchScreen component. If you're familiar with routing in web development, this is pretty similar to that
    * There are other types of navigation like DrawerNavigation and TabNavigation but StackNavigation makes more sense for our application. Feel free to read through React-Navigation's documentation to read more about this topic
4. Let's first setup our SearchScreen:
    * First let's define our SearchScreen's state. Set the state to the following:
      ```jsx
        state = {
          books: [],
          searchTerm: ''
        }
      ```
    * Next, let's fill in the render function for our SearchScreen so we can set up the user interface
    * Set render() to return the following:
      ```jsx
      return (
        <View style={styles.container}>
          <View style={styles.searchView}>
              <TextInput 
                onChangeText={(text) => { 
                  this.setState({
                    searchTerm: text
                  });
                }}
                value={this.state.searchTerm}
                style={styles.searchTextInput}
              />

            <Button title="Search" onPress={this.searchBooks} color='#FFFFFF' style={styles.searchBtn} />
          </View>

          <FlatList
            data={this.state.books}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderBook}
            style={styles.bookList}
          />
        </View>
      );
      ```
    * Let's review what this does. Our SearchScreen returns a View with several children. First is a SearchBar with a TextInput and Button. You should be familiar with what the code for these two components are doing. 
    * Next we have a FlatList, a new component we're introducing this lesson. A FlatList is a component provided by React Native that allows us to make lists from data. Here we have the FlatList to point to data stored in our SearchScreen's state
    * Our renderItem prop is a function that determines the behavior for how our FlatList should render each item in data
    * Lastly, we have a keyExtractor. This function is already filled out for you but the reason it's there is so React can keep track of items in the list by having keys for each element. This assigns a key to each element in our data so React knows what gets deleted and added.
    * Now that we have our state and render filled out, let's add in some of the functions our render function refers to
    * First, let's fill out the `searchBooks` function. This is a key function that I recommend you pay attention to. This is the code for `searchBooks`:
      ```jsx
      searchBooks = () => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchTerm)
              .then((res) => res.json())
              .then((data) => {
                this.setState({
                  books: data.items
                });
              });

        Keyboard.dismiss()
      } 
      ```
    * What this does is use the fetch API (Documention: https://facebook.github.io/react-native/docs/network.html) to access an API endpoint. Here we're using the Google Books API and passing a URL parameter. This is one way of accessing HTTP APIs. 
    * Fetch returns a promise, an asynchronous object in JavaScript. Our first `then` statement says that we're going to take the response, convert it to a JavaScript object, then return it. Our second `then` statement takes the converted JavaScript object, extract the `items` from it, and store it in our books state
    * For reference, here's an example of the result this API returns: https://www.googleapis.com/books/v1/volumes?q=cracking%20the%20coding%20interview
    * At the end of our function is Keyboard.dismiss() which hides/dismisses the Keyboard on the phone
    * Now, when we search in our app, we'll hit an API endpoint. However, nothing will happen because we haven't defined how to render items for our list. Let's fix that now
    * Set the function renderBook to the following:
      ```jsx
      renderBook = ({item}) => {
        return <BookItem book={item.volumeInfo} navigation={this.props.navigation} />
      }
      ```
    * We imported BookItem in the code for you (check the top of SearchScreen.js). What this does is that for every item in the data we pass to our FlatList, we'll create a BookItem component and display it. Note that we pass 2 items here: book (the data from our search results) and navigation.
    * When we use StackNavigator, every screen gets passed along a navigation prop. This allows us to make calls to our Navigator so we can switch screens. We pass along this navigation to `BookItem` so we can refer to it within our child component. 
    * We do this so when a BookItem is pressed, we can transition to the BookScreen to read more details about the selected book.
    * Try running the application now. Unfortunately, nothing is displayed.. but that's because we haven't defined the behavior for BookItem yet. Let's do that now
5. Let's fill out our BookItem.js code
    * Set render() to the following:
      ```jsx
      render() {
        const book = this.props.book;
        let description;

        /*
          Sometimes the description can be super long. 
          This code will shorten the description to be 120 characters max
        */
        if (book.description !== undefined) {
          if (book.description.length >= 120) {
            description = book.description.slice(0,120) + '...';
          } else {
            description = book.description;
          }
        }
        
        return (
          <TouchableWithoutFeedback 
            onPress={() => {
              this.props.navigation.navigate('Book', { book: book })
            }}
          >
            <View style={styles.listItem}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              {(description) ? (<Text style={styles.bookDescription}>{description}</Text>) : null}
            </View>
          </TouchableWithoutFeedback>
        ); 
      }
      ```
    * Let's explain what this does. First, before we return anything, we want to do something with our description. In the Books API, we get information about the book description. However, this description might be paragraphs long. To improve the UX/UI, we shorten the description so it's easier to use.
    * Our code first checks if there is a description. If there is and it's longer than 120 characters, we cut it short and add '...'. Otherwise, we display the description as normal
    * What's key here is the onPress for TouchableWithoutFeedback! Remember how we passed navigation to BookItem? Here, we refer to that navigation so we can make our App switch screens
    * What we do here is tell our StackNavigator to switch to the `Book` screen which was defined in `App.js`. In addition, we pass along the data of the book we want to take a look at.
    * Now that you have defined BookItem, try running the app now. You should be able to search and press on a book item. However, you'll see that you get a blank screen. That's because we haven't defined BookScreen so let's get to that
6. We're close to finishing our application. Now we have to define the interface for `BookScreen.js`
    * In `BookScreen.js`, set the render function to the following:
      ```jsx
      render() {
        /*
          Grab the data that may have been passed to this screen through the navigator
        */
        const { params } = this.props.navigation.state;

        return (
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <Text style={styles.title}>{params.book.title}</Text>

              <Image 
                style={styles.thumbnail}
                resizeMode='contain'
                source={{uri: params.book.imageLinks.thumbnail}}
              />

              <Text style={styles.description}>{params.book.description}</Text>
            </ScrollView>
          </View>
        );
      }
      ```
    * Remember how we passed along data in the onPress function of `BookItem`? To access that data, we need to access `this.props.navigation.state.params`. That's a long statement so our `const { params }` line simplifies that so we just have to get that information from a params const.
    * The rest is fairly simple: we use the data sent to our screen to fill in our interface. 
7. At this point, you should have put together a quick app that allows you to search for books using an HTTP API and navigate to a specific book on selection. Now, note that we helped you out a lot in terms of the styling and interface set up. We wanted to focus more on the mechanics behind the HTTP requests, the navigation, and how data is passed between screens. To make sure you know what you're doing, we want you to finish one of the challenges/assignments we have outlined at the end of this lesson. 
8. Next lesson, as a preview, we'll be challenging you to build an app of your own using many of the concepts we've taught so far. Keep this in mind and keep playing around with the projects we've helped you build. If you have any questions, don't hesistate to contact e-board or ask in #react-native

## Challenges/assignment:
Try to accomplish the following challenges as an assignment. Publish your version of librarian as a Git repository on your own GitHub and tag a member of e-board
* Play with the styles. Try changing colors, font sizes, font families, or even the entire layout
* Add the ability to favorite or star a book (you might need a third screen)
* Look into the response that the Google Books API gives back (Ex: https://www.googleapis.com/books/v1/volumes?q=harry+potter). Try to add more data to the BookScreen so it's more than just the title, image, and description
* Find a different API to play around with (Ex: GitHub has an open API you can access that doesn't require an auth key) and make a similar app using React Native
* Switch up the list interface - maybe add a thumbnail to the listing or make it look prettier
* In the Google Books API, you can get links for each book. Find a way to implement this so users can click on a link to use their browser (this might require more research but is highly encouraged)
* Be creative and add a third screen to the application (splash screen? screen for starred/favorited books? etc)
* Currently, you might run into crashes/errors if a Book doesn't have an image thumbnail or description. Add some checks so your app doesn't crash (Example: Search for "Ready Player One" then click "Trivia: Ready Player One by Ernest Cline")
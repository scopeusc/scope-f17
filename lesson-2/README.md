# Lesson 2: Working with Components

## Introduction

Last week, you built a basic tip calculator which introduced you to a few concepts such as components, styling, action handlers, and more. Now that you've built your first basic app, we're going to dive into components a bit more and explore how data is passed between components. After this, you should have a better grasp on components, what states and props are, and how to manipulate/work with data in a React Native application.

This lesson, we'll be building a basic flashcard application. Users can scroll through a list of cards, tap cards to flip them, and add their own cards with a term and definition.

## Prerequisites
Before starting this lesson, you should have already completed lesson 1 meaning you can build a basic application with buttons and text inputs. 

Note: In this repository is a finished `flashcards-finished` project that looks similar to what you'll be building. If you're ever stuck, refer to that code as guidance

## Steps
1. For this lesson, you'll be using skeleton code to start off your project. Run `git pull` on your scope-f17 repository and copy the `flashcards` folder into a separate place on your machine
    * Once you have the folder copied, `cd` into the `flashcards` folder and run `npm install` to install the necessary libraries. You can then run `npm start` or `npm run ios/android` like you normally would. You might get a few errors or warnings but we'll fix those over the course of the lesson
2. In this folder, you will be working with 3 different files: `App.js`, `Card.js`, and `NewCardModal.js`. App.js is our main app entry point and will have the main default component that controls our entire application. Card.js will define a re-usable component that will illustrate how props and states work. NewCardModal.js will define a modal component that will allow us to add a new card to our application.
    * In this lesson, we've already done a lot of the setup for you. Throughout this lesson, you'll fill in the skeleton code as we help teach you how components work in React + React Native.
3. First, let's set up the state for our `App.js`. In React, state is data tied to our component that will change throughout its life cycle. In our application's case, we will track 2 pieces of data. First is an array of objects that will contain the term and definition data for each card in our flashcard set. Second is a boolean that determines whether or not our "add card" modal is visible.
    * ```jsx
      state = {
        cards: DEFAULT_CARDS,
        modalVisible: false
      } 
      ```
    * Note that cards points to DEFAULT_CARDS which was defined earlier in our program. DEFAULT_CARDS is a `const` that is set up at the top of `App.js`. With this statement, we essentially say our app store the default cards array as part of our state. Feel free to modify the DEFAULT_CARDS array to use your own  custom default terms and definitions.
4. In our App's state, we have an array of card data. This card data will be used to create `Card` components that will display our terms and definitions. Before we use this Card component in our App component, let's code up this re-usable `Card` component
    * In `Card.js`, we currently have a blank state and render function. Before we dive into the `Card` component, let's clarify what this Card component will be used for
    * Our `Card` component is a re-usable component that will take data in as a prop. We'll take this passed in data and use it in the app as fit, but note that a component cannot change prop data. 
    * Our `Card` component will also have a state. Our state will keep track of what side of the card to show: the term or definition side. We shouldn't change what data is passed into our component inside the Card component but we should be able to update what side we show, thus why we keep track of this in our component's state
    * Set the state of our Card component to:
      ```jsx
      state = {
        showTerm: false
      }
      ```
    * In our Card's render() function, set it to return the following:
      ```jsx
      return (
        <TouchableWithoutFeedback onPress={this.flipCard}>
          <View style={[styles.container]}>
            <Text style={styles.cardTitle}>{(this.state.showTerm) ? ("Term") : ("Definition")}</Text>
            <Text style={textStyle}>{(this.state.showTerm) ? (this.props.cardData.term) : (this.props.cardData.definition)}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
      ```
    * What this does is return a `TouchableWithoutFeedback` component that has a `View` as its main child. `TouchableWithoutFeedback` is a component provided by React Native that allows us to build components that respond to touch without visible feedback. We pass along it a function which is our Card component's flipCard function (we haven't filled this out yet, but we will in a bit). When this component is pressed, that function is called
    * Our `View` child can be seen as the container of the Card component. If you're familiar with HTML, this is equivalent to our component's `div` tag. Here we assign it the `container` style which is defined at the bottom of `Card.js`. Styles are essentially JavaScript objects that define the look and feel of a component
    * Inside our View, we have two text labels: the title text and the content text. Note the weird syntax. Let me explain how this works:
        * In JavaScript and React development, you'll be using the Ternary operator a lot. The ternary operator looks like `(x) ? ("true") : ("false")`
        * Essentially this is a simplified `if` statement in one line. It checks the value of `x` and if it's true, it will return the first value "true". Otherwise, it'll return the second value "false"
        * What our label does is check if showTerm is true. If it is, we display "Term", otherwise we have the label as "Definition"
        * We use this same operator in the next Text tag to show either the term content or definition content
    * Next, add this right before the return statement in our render() function:
      ```jsx
      const textStyle = (this.state.showTerm) ? (styles.termText) : (styles.definitionText);
      ```
    * This is another ternary operator stored in a variable. Again, it checks if showTerm is true. If it is, textStyle will point to the termText style, otherwise it'll point to the definitionText style. 
    * Note that this textStyle variable is used inside our return statement. Look at the second Text child. This is a good way to separate logic from the return statement of the render function. Ideally we could've done this with the other ternary operators but that can be left up to you
    * Now let's fill out the flipCard() function of our component. Set the flipCard function to:
      ```jsx
      flipCard = () => {
        this.setState({
          showTerm: !this.state.showTerm
        });
      }
      ```
    * What this does is reverse showTerm and set it as the new state. Now we're done with `Card.js` but we have yet to use it in our main `App` component. Let's go ahead and fix that
5. Let's go back to our `App.js` and use our Card component
    * In our `App` render() function, you should see a variable called `const cards`. What you see is an example of the .map function. In React, this is often used to work with arrays and render data. 
    * Paste the following code where it says to fill code out:
      ```jsx
      // Pass the appropriate data as a prop to the Card component
      return (
        <Card cardData={card} key={index} />
      )
      ```
    * What we're doing is mapping a Card component to every element in our state's cards array. For every element, we create a Card component, pass the appropriate data, and set a key
    * In React, when you map an array to a component, you need to provide a `key` which is a unique identifier for that element. In this case, we're using the index of that card. This is probably not the best practice but works for our simple application
    * Now, after that, we should have a variable `cards` which is essentially an array of `Card` components. Now we can embed this into our App component.
    * In `App`'s render function, set it to return the following:
    ```jsx
    return (
      <View style={styles.container}>
        <ScrollView>
          {cards}
        </ScrollView>
      </View>
    );
    ```
    * What we're doing here is returning a main parent `View` with the container styles. As a child, we add a ScrollView which allows us to scroll through the cards like a list. Then, we embed our `cards` variable using the curly braces.
    * If you build and run the app now, you should be able to scroll through a list of pre-defined flashcards. Add some terms to the EXAMPLE_CARDS and play around with it. Congrats, at this point you've built a very basic flashcards app. If you tap on cards, they should flip to show the definition and vice versa!
6. Now we have a scrolling view with our cards. We defined an array of data and use a re-usable component. Sick! Let's make it dynamic now and code in the ability to add cards
7. Let's use TouchableHighlight to make a custom button
    * Last lesson we used the React Native `Button` component. This component is pretty useful but hard to customize. As an alternative, we can define our own button using the `TouchableHighlight` React Native component. The `TouchableHighlight` component can be styled similarly to an HTML `div` tag and can be passed a function to call when the component is pressed.
    * We've already defined the styles for you so paste this piece of code inside the return of the render() function right after the closing ScrollView tag:
      ```jsx
      <TouchableHighlight 
        style={styles.addButton} 
        onPress={this._toggleModal} 
        underlayColor='#128040'
      >
        <Text style={styles.addButtonText}>Add Card</Text>
      </TouchableHighlight>
      ```
    * What we're doing here is defining a TouchableHighlight which will call our _toggleModal function when pressed. Remember we have a boolean in our state that determines whether or not our add card modal is visible. We'll code that up and come back to it in a bit
    * Feel free to check out the style rules we have defined in the styles object so you have a better feel for how this button was coded
8. Now, let's add NewCardModal to our App. We already coded NewCardModal for you and imported it at the top of `App.js`. We'll go over how this works in a bit. For now, insert this piece of code in the return part of render() right after the opening <View> tag:
    ```jsx
    <NewCardModal 
      modalVisible={this.state.modalVisible} 
      toggleModal={this._toggleModal}
      addCard={this._addCard}
    />
    ```
    * What we're doing here is passing in a variable, modalVisible, which will dictate whether or not this modal is visible
    * In addition, we pass two functions: _toggleModal and _addCard. Remember that data flows in one way in React: from parent to child. Therefore, in order for actions in children to affect the parent, we have to define the behavior in the parent component (App) and pass it to the child (NewCardModal). We can call these functions in the NewCardModal which will affect the data in our parent App component
    * Right now, these functions aren't defined so let's fill them out in `App.js`.
    * For _toggleModal, fill it with the following code:
    ```jsx
    _toggleModal = () => {
      this.setState({
        modalVisible: !this.state.modalVisible
      });
    }
    ```
    * For _addCard, fill it with the following code:
    ```jsx
    _addCard = (_term, _definition) => {
      const cards = this.state.cards;

      cards.push({
        term: _term,
        definition: _definition
      });

      this.setState({
        cards: cards
      });

      this.setState({
        modalVisible: false
      });
    }
    ```
    * These functions affect the state of our App component but are called by a child. This is how you can have actions in children affect the state of a parent. Note that this can get pretty confusing and complex pending on the scale of your application. There are other state management solutions like `Redux` which are beyond the scope of our curriculum but if you're interested, I invite you to read up on them
    * Back to NewCardModal, we won't go to deep into it but essentially, NewCardModal abstracts a bunch of React code and extends the React Native Modal component. We create a basic form with TextInputs, similar to what we did in the `tip-calculator` project, then tie action handlers to the functions we passed in. There are two buttons: a close and add button. When a user taps on the close button, we call the _toggleModal function that was passed as a prop. When they tap the add button, we get the data from the TextInputs and pass it into the _addCard function that was passed as a prop. Take a look at `NewCardModal.js` to get a better feel for how this works
9. At this point, you should have a full function `flashcards` app. You should be able to scroll through a list of flashcards, tap on cards to flip them, and add flashcards to the current set. Let e-board know once you're done and show us your completed app! Now that you're done, I invite you to play around with the code and try out the following challenges. If you succesfully complete any of the challenges, send screenshots to e-board for potential prizes

## Challenges:
* Play with the styles. Try changing colors, font sizes, font families
* Add an additional field to the flashcard like subject, see if you can get this to display
* Add the ability to favorite or star a flashcard
* Add the ability to delete a card (Hint: Read up on the splice function in JavaScript)
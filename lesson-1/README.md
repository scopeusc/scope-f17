# Lesson 1: Introduction to React Native

## Introduction

Last week, you got your React Native environment set up. You should have already setup Git, Node.js/NPM, the create-react-native-app CLI tool, and built/ran the scope-welcome application. Now that you're environment is setup, this week you'll be developing your first React Native app from scratch. 

In this lesson, we'll be building a basic tip calculator that allows you to quickly compute the right tip amount on the fly. Although basic in nature, you'll learn a lot about how React/React Native works, how to interact with components, and more.

## Prerequisites
Before starting this lesson, you should have already completed lesson 0 meaning you have a React Native development environment set up and ready to go.

Note: In this repository is a finished `tip-calculator` project that looks similar to what you'll be building. If you're ever stuck, refer to that code

## Steps
1. In lesson 0, we installed `create-react-native-app` onto your machines. `create-react-native-app` is a CLI that helps in the generation of React Native projects. To show you how it works, lets create our own tip-calculator project from scratch.
    * CD into a folder separate from the `scope-f17` GitHub repository
    * Enter `create-react-native-app tip-calculator` into the command line
        * This will create a folder called `tip-calculator` and will set up a React Native project and install the necessary packages
2. Now that our project has been set up, let's get this default app running on our phones
    * CD into the tip-calculator project (`cd tip-calculator`)
    * Run `npm start` OR `npm run ios/android` pending on how you want to test this application
        * Choose `npm start` if Expo is working for you
        * Choose `npm run ios/android` if you'd rather use a simulator to test your app
    * You should see a very default looking application with 3 lines of text. Let's get into the code and start building this tip calculator
3. Open up the `tip-calculator` project in the code editor of your choosing (#TeamSublime - WW) 
    * Open up App.js. This is the main component of the application 
    * The syntax for this might not look like normal JavaScript. That's because React uses JSX, a combination of JavaScript and XML. In addition, we'll be coding in JavaScript ES6, a modern standard for JavaScript that is syntactically different from what you might be used to
    * Take a look at the `render()` function. Every React component has a render function that dictates how a component should be rendered. `render()` returns a single component that can have many children. In the case of this App, the App component returns a single `View` component with many `Text` children.
        * `View` is similar to a `div` from HTML, `Text` is similar to a `p` or `span` from HTML
4. Let's modify this code! Update the render function to look like the following:
    * ```jsx
        render() {
            return (
              <View style={styles.container}>
                <Text>Scope!</Text>
              </View>
            );
        }
        ```
    * Save `App.js` and check your phone or simulator
    * It should have updated to reflect the new changes in the code. This is known as live reloading, changes in your code will be instantly reflected allowing for easy debugging and instant feedback. It's a neat feature of React Native that you will learn to love
    * Optional: Add a few more `Text` elements and play around with the live reload feature. See your text changes update live on your device/simulator
5. Let's start putting together an actual `tip-calculator` now
    * Add this variable to the beginning of the App component
    * ```jsx
      state = {
        billAmount: 0,
        tip: 0,
        totalValue: 0
      }
      ```
    * This is the App component's `state`. State is one of two types of data that controls a component. State is data that can change throughout the lifecycle of a component
    * In our state, we keep track of three values: the bill amount, the calculated tip amount, and the calculated total value
    * Right now, these values don't mean anything, so let's actually build out the interface for our application
6. Let's start putting together the interface for our application
    * Replace line 2 in App.js with the following chunk of code
    * ```jsx
      import { 
        StyleSheet, 
        Text, 
        View,
        TextInput,
        Button,
        Keyboard
      } from 'react-native';
      ```
        * This piece of code will import the necessary components we need to develop our app's interface
    * Now that we have our imports laid out, let's delete the code we have in our `render()` function so that we return an empty `View`
    * ```jsx
      render() {
        return (
          <View>
          </View>
        );
      }
      ```
    * Let's add a `Text` component and a `TextInput` component
    * ```jsx
      render() {
        return (
          <View style={styles.container}>
            <Text>Tip Calculator</Text>

            <TextInput 
              autoFocus={true} 
              keyboardType='numeric' 
              placeholder='Bill Amount'
            />
          </View>
        );
      }
      ```
    * If you save `App.js`, you'll see our App's interface has changed to have a TextInput. This TextInput doesn't do anything *yet* but it will soon. Let's add a few buttons by adding the following code after our TextInput
    * ```jsx
      <View>
        <Button title="10%" /> 

        <Button title="15%" /> 

        <Button title="20%" /> 

        <Button title="25%" /> 
      </View>
      ``` 
    * Save `App.js`. You'll see buttons with text and a warning about onPress. Again, our buttons and text input don't do anything yet but will soon. Finally, let's add a few Text labels that will output our final tip and total amount. Add this after the code we just added
    * ```jsx
      <Text>Tip: {this.state.tip}</Text>
      <Text>Total: {this.state.totalValue}</Text>
      ```
    * Note the curly braces - This is telling React to output the values of these variables. `this.state` refers to our App's state that we set earlier
7. Sweet, now we have our app's interface setup but again, it doesn't do anything yet nor does it look that pretty. Let's add in some functions to our code so we can get it actually working.
    * Add the following function after the `state` variable
    * ```jsx
      textChange = (value) => {
        // value is a string so we convert value to a float (number with decimals)
        value = parseFloat(value || 0);

        // Store this new value in our application's state
        this.setState({
          billAmount: value
        });
      }
      ```
        * This funky syntax will create a variable in our App component called `textChange` that is a function. This function takes a string value as a parameter, converts it to a number, and stores it in our App's state
        * This will get called everytime our TextInput changes
    * Let's add in another function called `calculateTip`
    * ```jsx
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
      ```
        * This function will take a proportion (like 0.25 or 0.15) and use it to calculate a tip and total value. This will then update our App's state. The last line of the function is used to dismiss the phone keyboard
    * These functions need to be linked up to our interface so they can actually be used. Change the TextInput from before to look like the following
    * ```jsx
        <TextInput 
          autoFocus={true} 
          keyboardType='numeric' 
          onChangeText={this.textChange} 
          placeholder='Bill Amount'
        />
      ```
        * This change says that whenever we change the text, we want to call our `textChange` function which will update our App's state
        * `onChangeText` is a prop specified by React Native that takes in a function. This function will get called whenever the TextInput's value is changed. 
    * Now, let's link up our `calculateTip` function to our buttons. Change your buttons to look like the following
    * ```jsx
      <Button 
        title="10%" 
        onPress={() => {
          this.calculateTip(0.1);
        }} 
      /> 

      <Button 
        title="15%" 
        onPress={() => {
          this.calculateTip(0.15);
        }} 
      /> 

      <Button 
        title="20%" 
        onPress={() => {
          this.calculateTip(0.2);
        }} 
      /> 

      <Button 
        title="25%" 
        onPress={() => {
          this.calculateTip(0.25);
        }} 
      />
      ```
        * What this weird syntax does is allow us to call a function and pass in a parameter. In this case, we call our `calculateTip` function from before and pass along the appropriate proportion corresponding to each button.
        * Like `onChangeText`, `onPress` is a prop specified by React Native that takes in a function. This function will get called whenever the Button is pressed.
    * Now, if we save `App.js` and check our app, it should be working as desired. Put in a random bill amount then press a button to calculate the appropriate tip amount.
8. Sick, our app is working now! Last step is to style our app and make it look prettier
    * At the bottom of App.js, you should see a variable called `styles`. Styles acts like the stylesheet for our component and we can refer to defined styles in our components. If you're familiar with CSS, you'll see some significant similarities
    * For the sake of time, copy and paste the following code into styles
    * ```jsx
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
      ```
    * Now that we have our styles laid out, let's attach these styles to the right components
        * Our title text should have the `title` style attached to it. Update the "Tip Calculator" text to have the right style:
            * `<Text style={styles.title}>Tip Calculator</Text>`
            * If you save `App.js`, you'll see the App's title text will have an updated text style
        * Let's continue applying styles. For our `TextInput`, attach the right style
            * ```jsx
              <TextInput 
                autoFocus={true} 
                keyboardType='numeric' 
                onChangeText={this.textChange} 
                placeholder='Bill Amount'
                style={styles.billInput}
              />
              ```
        * Try adding the rest of the styles to the correct components: tipButtonContainer, tipLabel, totalLabel
    * If all goes well, your app should work and be styled nicely!
9. Now that your app is working and that you have the styles set, show your finished project to a member on e-board
    * If you finish during a meeting, show e-board your finished project
    * If you finish after a meeting, DM a member of e-board a screenshot of your finished project
10. **Assignment:** Now that you've finished, try attempting the following challenges. If you finish any of these, contact e-board so we can mark you off
    * Change the tip percentage values
    * Find a way to round values to two digits
    * Add buttons that let you split the total value for groups of people up to 4 
    * Style the app the way you want it to look (More on React Native styles here: [link](https://facebook.github.io/react-native/docs/style.html))
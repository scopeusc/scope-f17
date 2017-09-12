# Lesson 0: React Native Set Up

## Introduction

Congrats on getting accepted into Scope! This was a competitive semester but nonetheless you impressed us and we thought you’d be a great fit for our community.  This semester is going to be great and we’re glad you’ll be joining us on the ride. By the end of this semester, we hope to teach you the fundamentals of React Native and provide you a friendly and engaging community within the CS ecosystem here at USC.

## Purpose & Goals
In lesson 0, we will be going over how to set up your machine for React Native development. Before we can dive into React Native, we want to make sure you can build and run React Native applications on your machine so we can hit the ground running 

## Prerequisites
React Native is a cross platform development framework that can build for both Android and iOS. As long as you have an Android or iOS device and a Windows or Mac computer suitable for development, you should be good to go for this semester’s curriculum.
For this lesson, you should be somewhat familiar with your OS’s command line tool. If you’re not familiar with your OS’s command line tools, I recommend reading some basic guides on using the command line. 
In addition, though you won’t be coding in this lesson, you should download a text editor suitable for development if you don’t have one already. We recommend Sublime Text or Atom.

## Steps
1. The first piece of software we need to install is Node.js, a Javascript runtime environment that will enable us to build React Native applications. Visit https://docs.npmjs.com/getting-started/installing-node for Node installation instructions.
    * Accept the default settings if any options pop up during the process
    * Run  `node -v`  in your command line tool to see if Node was installed. You should see a version number pop up.
    * Node installations should include NPM, a package manager for Javascript. To test if this was installed properly, run  `npm -v`
    * If any issues occur during Node’s installation (or any further steps), ask for help in our **#help** slack channel
2. If you don’t have one already, set up an account with GitHub, a platform for code sharing and collaboration. Create an account at https://github.com 
3. Once you’ve setup your profile,  visit https://help.github.com/articles/set-up-git/ for Git installation and setup instructions on your local machine
    * Once Git is installed, you need to link your Git with a credential manager so you can authenticate into GitHub. Follow the instructions on the same page.
4. Once Git is setup, fill out this onboarding [Google form](https://docs.google.com/forms/d/e/1FAIpQLSc6uhjtJxuHir5Ki1YP8a95xneqVmdthXOaKWEbs3lbjJ-qCw/viewform?usp=sf_link). Let us know your GitHub username so we can add you to the repository (as well as additional info to help us throughout this semester)
5. Now you have Node.js, NPM, Git, and GitHub set up! If you’re stuck, feel free to ask for help on the slack #help channel. Next, we will install the necessary software necessary for React Native development.
    * Run the command `npm install -g create-react-native-app`
    * This command will install a “global” package that will allow you to generate starting templates for React Native apps
    * Once installation is complete, you can run the command `create-react-native-app [app name]` to generate the basic project structure for a React Native app. For this lesson, you won’t be asked to use this command but we’ll be using it in the future to generate our projects.
6. Next, clone the Fall 2017 React Native repository onto your local machine. This will be the repository containing essential code for lessons and assignments.
    * To copy this code onto your machine, run the command `git clone https://github.com/scopeusc/scope-f17` in your folder of choice
    * **RECOMMENDATION:** Create a dedicated Scope folder on your machine for the curriculum repository, future assignment code, and our project
7. After cloning the curriculum repo, in your command line tool, cd into `scope-f17/lesson-0/f17-welcome`.
8. Run npm install to install the necessary dependencies. 
    * What’s happening here is that every Node project has a package.json file that lists out the applications dependencies and package settings. The install command will use this package.json file to find, download, then install the necessary packages into your current working folder
9. If installation is successful, you can then run the app either on your phone or using an iOS/Android simulator. 
10. To run the app on your phone, download Expo (https://expo.io) on your mobile phone (iOS or Android). Then, on your computer, run the command `npm start`
    * This will start the package manager and should print out a QR code and a URL. In the Expo app on your phone, you can either take a pic of the QR code or enter in the URL manually. 
    * If all goes well, the app should be running on your phone!
    * Note: Expo only works if your computer and phone are on the same wireless network. If both are on the same network and it still doesn’t work, you can either use your phone’s hotspot on your laptop or try running the app in a simulator. There might be issues if you're using USC's public WiFi. If this is the case, follow the next step to get your app running via a simulator
11. To run the app on a simulator, follow the instructions on this page: https://facebook.github.io/react-native/releases/next/docs/getting-started.html. Click “Building Projects with Native Code” and follow the steps to download either Android Studio or XCode.
    * Once you have either one installed, run the command `npm run android` or `npm run ios` (pending on which phone OS you want to target) inside the f17-welcome folder
    * If all goes well, the app should be running in a simulator on your machine!
12. If everything went well, at this point you should have ran your first React Native application (whether that be on your actual phone or on a simulator). Congrats! This means that you have installed the necessary tools that we’ll be using in this curriculum. If you ran into any issues, please ask for #help or contact Wilhelm Willie. 

##  Conclusion
If things went well, you should have been able to build and run a Scope Welcome application that tells you the cool things to look forward to this semester. If you weren’t able to, ran across some roadblocks, or are just overall confused, fret not as you can always ask for help on Slack. 
Now, you might have more questions about how all of this works, what the hell React is, or what’s so cool about React Native. Hopefully these questions will be answered as our next lesson will be an introduction to React Native and its underlying concepts.


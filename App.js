/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// import ExampleComponent from './src/components/ExampleComponent';
// import Books from './src/components/Books';
import { StackNavigator } from 'react-navigation';
import { colors } from './src/components/_base';
import HomeScreen from './src/components/screens/HomeScreen';
import CategoriesScreen from './src/components/screens/CategoriesScreen';
import CategoryScreen from './src/components/screens/CategoryScreen';
import BookScreen from './src/components/screens/BookScreen';

export default StackNavigator (
  {
    Home: {
      screen: HomeScreen
    },
    Categories: {
      screen: CategoriesScreen
    },
    Category: {
      screen: CategoryScreen
    },
    Book: {
      screen: BookScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: colors.normalText,
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold'
      }
    }
  }
);


import React from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './source/screens/Login'

const MainNavigator = createStackNavigator(
    {
        LoginScreen: {screen: Login}
    }, {
        headerMode: "none"
    });

const App = createAppContainer(
    MainNavigator
);

export default App;

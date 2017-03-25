import React from 'react';
import { AppRegistry, View } from 'react-native';
import Page from './page1';
//import Page from './page2';
//import Page from './page3';

//create a component
const wk5test = () => (
  <Page />
);


//render it
AppRegistry.registerComponent('wk5test', () => wk5test);
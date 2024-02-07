import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

const MyApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AppRegistry.registerComponent('MyApp', () => MyApp);

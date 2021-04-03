import 'react-native-gesture-handler';
if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import  {BaseUrl} from './component/BaseUrl';
import {Provider} from 'react-redux';
import store from './component/redux/store';
import {  Reactotron} from "./ReactotronConfig";
const connectedApp= () => 
<Provider store={store}>
    <App />
</Provider>
AppRegistry.registerComponent(appName, () => connectedApp);
BaseUrl();
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {HomeTab} from './HomeTab';

export function AppContainer (props){
    const {IsAuthenticated} =props;
    return (
        <NavigationContainer>
        {IsAuthenticated ? <HomeTab /> : <AuthStack />}
         </NavigationContainer>
         
    )
  
}
import React from 'react';
import {SignInView} from '../signinview';
import {ConfirmView} from '../confirmationview'

import {createStackNavigator} from '@react-navigation/stack'
const stack=createStackNavigator();
export function AuthStack (props) {
return(
<stack.Navigator>
<stack.Screen name='SignInView' component={SignInView} options={{headerShown:false}}/> 
<stack.Screen name='ConfirmView' component={ConfirmView} options={{headerShown:false}} />
</stack.Navigator>
)


}
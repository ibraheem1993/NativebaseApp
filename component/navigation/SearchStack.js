import React from 'react';
import {SearchText} from '../SearchText';
import {createStackNavigator} from '@react-navigation/stack';
const stack=createStackNavigator();
export function SearchStack (props) {
return(
<stack.Navigator>
<stack.Screen name='SearchText' component={SearchText} options={{headerShown:false}}/> 

  
</stack.Navigator>

)


}
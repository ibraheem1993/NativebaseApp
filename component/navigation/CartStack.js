import React from 'react';
import {CartScreen} from '../CartScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductView} from '../ProductView';

const stack=createStackNavigator();
export function CartStack (props) {
return(
<stack.Navigator>
<stack.Screen name='CartScreen' component={CartScreen} options={{headerShown:false}}/> 
<stack.Screen name='ProductView' component={ProductView} options={{headerShown:false}}/> 
  
</stack.Navigator>

)


}
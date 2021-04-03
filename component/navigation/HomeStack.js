import React from 'react';
import {HomeScreen} from '../HomeScreen';
import {CategoryScreen} from '../CategoryScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductView} from '../ProductView';
const stack=createStackNavigator();
export function HomeStack (props) {
return(
<stack.Navigator>
<stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/> 
<stack.Screen name='CategoryScreen' component={CategoryScreen} options={{headerShown:false}} />
<stack.Screen name='ProductView' component={ProductView} options={{headerShown:false}} />
   
  
</stack.Navigator>

)


}
import React from 'react';
import {UserAccount} from '../UserAccountScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {UpdateProfile} from '../updateprofile';
import {AddressForm} from '../AddressForm';
import {PreviewOrders} from '../PreveiewOrders';
const stack=createStackNavigator();
export function UserStack (props) {
return(
<stack.Navigator>
<stack.Screen name='UserAccount' component={UserAccount} options={{headerShown:false}}/> 
<stack.Screen name='UpdateProfile' component={UpdateProfile} options={{headerShown:false}}/> 
<stack.Screen name='AddressForm' component={AddressForm} options={{headerShown:false}}/> 
<stack.Screen name='PreviewOrders' component={PreviewOrders} options={{headerShown:false}}/> 
</stack.Navigator>

)


}
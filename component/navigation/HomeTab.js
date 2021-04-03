import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import {  View,Text} from 'react-native';
import {HomeStack} from './HomeStack';
import {CartStack} from './CartStack';
import {UserStack} from './ProfileStack';
 import {SearchStack} from './SearchStack' ;
  
export function HomeTab (props){
    const Tabs=createBottomTabNavigator();
    return(
       <Tabs.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart'  : 'cart-outline';
          }
         else if (route.name === 'Search') {
            iconName = focused ? 'search'  : 'search-outline';
          }
          else{
            iconName = focused ? 'person'  : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
           <Tabs.Screen name='Home' component={HomeStack}/>
           <Tabs.Screen name='Cart' component={CartStack}/>
           <Tabs.Screen name='Search' component={SearchStack}/>
           <Tabs.Screen name='Profile' component={UserStack}/>
       </Tabs.Navigator> 
    );
}
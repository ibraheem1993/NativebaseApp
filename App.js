import React, { Component } from 'react';
import {  Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Container } from 'native-base';
import {AnatomyExample} from './component/DefaultApp';
import {BadgeExample} from './component/BadgeApp';
import {DeckSwiperExample} from './component/CardApp';
import {FloatingLabelExample} from './component/FormApp';
import {FooterTabsIconTextExample} from './component/FooterApp';
import {PickerInputExample} from './component/PickerApp';
import {ListDividerExample} from './component/ListApp';
import {SignInView} from './component/signinview';
import {ConfirmView} from './component/confirmationview';
import {ItemView} from './component/itemview';
import {ProductView} from './component/ProductView';
import {CartItem} from './component/CartItem';
import {CartScreen} from './component/CartScreen';
import {CheckOut} from './component/CheckOut';
import {SearchText} from './component/SearchText'
import {UserAccount} from './component/UserAccountScreen'
import {UpdateProfile} from './component/updateprofile';
import {AddressForm} from './component/AddressForm';
import {PreviewOrders} from './component/PreveiewOrders';
import {List1Test} from './component/ListTest';
import {FlatListTest} from './component/FlatListTest';
import {SectionListTest} from './component/SectionList';
import {HomeScreen} from './component/HomeScreen';
import {AppContainer} from './component/navigation';
import {CategoryScreen} from './component/CategoryScreen';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {TokenKey,UserKey} from './component/Keys';
import {useSelector,useDispatch} from 'react-redux';
import {reactotron} from "./ReactotronConfig";


export default function App (props) {
      
     const dispatch=useDispatch();
     const setToken= token=> dispatch(
           {
                 type:'SET_TOKEN',
                 payload:{token}
           }
     );
     const setUser= user=> dispatch(
      {
            type:'SET_USER',
            payload:{user}
      }
);

     const token=useSelector(state=>(state.auth.token))
    
      React.useEffect( () => {
           //AsyncStorage.clear();
     AsyncStorage.getItem(TokenKey).then(val => {
      axios.defaults.headers.Authorization='Bearer ' + val;
         setToken(val);
     AsyncStorage.getItem(UserKey).then(us=> {
           setUser(JSON.parse(us));
     })
           
     })
      },[] )
   return token!=='NOT_YET' &&
    <AppContainer IsAuthenticated={!!token} /> 
    
  }
        /* < AnatomyExample /> Default Example   */
       /* <BadgeExample /> Badge & button & Icon And Check Box */ 
       //  <DeckSwiperExample  /> Card Example with PIC
      //  <FloatingLabelExample /> Form Example 
       //<FooterTabsIconTextExample />  Footer Design Complete
      // <PickerInputExample /> Pick Select Option Design
      //<ListDividerExample /> List  Item Table
      // <CategoryView /> all Profuct View
     // <AppContainer IsAuthenticated={false} /> 
    
      
   
  
    

import React, { Component } from 'react';
import axios from 'axios';
import { Container, Header, Content, Item, Input, Icon ,Text,Button, Grid,Col, Label,Left,Body,Title,Right} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {TokenKey} from './Keys';
import {useDispatch,useSelector} from 'react-redux';
import {reactotron} from "../ReactotronConfig";
 //function validate(code) {
//if( code.length !== 4 ){
  //  return false ;
  //}
  //return /^[0-9]+$/.test(code); //Must Be number
//}
function validate(code) {
  if(code.length!==4){
    return false;
  }
  return /^[0-9]+$/.test(code);
}

export  function ConfirmView (props) {
  const {navigation}=props
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
const user = useSelector(state=>(state.auth.user))
  const[CodeVal,changeInput]=React.useState('');
  const {phone}=props.route.params;
  //console.log(phone);
  const ConfirmHandler = () => {
   if(!validate(CodeVal)){
    return alert('Error in Input')
   }
   axios.post('/verify/validate',{phone,code:CodeVal}).then(res => {
     console.log(res.data)
     const {token,userData}=res.data;
     setToken(token);
     setUser(userData);
     axios.defaults.headers.Authorization='Bearer ' + token;
     AsyncStorage.setItem(TokenKey,token);
   }).catch(err => {
     const error_message=err.message.includes('401')? alert('wrong Code'):alert('Please Try Again');
     console.log('Error',err);
     reactotron.log(err)
   })
     //alert(CodeVal)
  }
  
    return (
       
      <Container>
      <Header>
        
        <Left>
          <Button transparent onPress={() => {navigation.navigate('SignInView')}}>
            <Icon name='arrow-back' style={{color: 'black'}} />
          </Button>
        </Left>
        <Body>
        <Title> Code</Title>
        </Body>
        <Right></Right>
      </Header>     
        <Content>
        <Grid style={{height: 120 }}>
        <Col>
        <Text style={{fontSize:22,textAlign:'center',padding:10,fontWeight:'bold'}}>Enter Confirmation Code</Text>
        <Item fixedLabel>
        <Input placeholder='- - - -' onChangeText={changeInput} onSubmitEditing={ConfirmHandler} keyboardType='numeric'/>
            </Item>
        </Col>
        </Grid>
        <Button block dark onPress={ConfirmHandler}>
            <Text>Done</Text>
          </Button>
        </Content>
      </Container>
      
    );
 
}
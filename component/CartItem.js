

import React, { Component } from 'react';
import { Image,TouchableOpacity } from 'react-native';
import {AddToCard} from './AddToCard/functionAddToCard'
import { Container, Header, Content, Card, CardItem,  Text, Button, Icon,  Body, Grid,Col } from 'native-base';
import { useNavigation } from '@react-navigation/native';
export  function CartItem (props) {
 const navigation=useNavigation();
    return (
      <Container>
     
      
     <Card>
     <TouchableOpacity style={{backgroundColor:'red'}} onPress={ () => {
        navigation.navigate('ProductView')
      }}> 
            <CardItem>
              <Grid>
          <Col ><Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{height: 100, width: 120}}/></Col>
          <Col ><Text style={{fontWeight:'bold',fontSize:20,}}>
                Item name
                </Text>
                <Text style={{fontSize:20,color:'blue'}}>
                18 SR
                </Text>
                <AddToCard />
               </Col>
        </Grid>
            </CardItem> 
            </TouchableOpacity>
          </Card>
    
        
      </Container>
    );
  }

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, CardItem, Card, Row, Button, Text, Left, Body, Icon,Title,Right,Grid,Col, Footer } from 'native-base';
import {CartItem} from './CartItem';
import {TouchableOpacity} from 'react-native';
export function CartScreen (props) {
 
    return (
        
      <Container>
      <Header>       
        <Left>
       
        </Left>
        <Body>
        <Title>Cart</Title>
        </Body>
        <Right></Right>
      </Header>    
     
      <Grid>
     
          <Row>
         
          <CartItem />
          
          </Row>
      
        
          <Row>

      <Grid >
       
      <Col style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,color:'blue'}}>
               Total = 18.00 SR
                </Text>
                </Col>
                <Col style={{justifyContent:'center',alignItems:'center'}}>
                <Button dark iconLeft>
            <Icon name='cart' />
            <Text>Check OUT</Text>
          </Button></Col>            
          </Grid>     
          </Row>
          
      </Grid>
     
      <Footer></Footer>
      </Container>
    );
  }

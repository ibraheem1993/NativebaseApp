import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, CardItem, Card, Row, Button, Text, Left, Body, Icon,Title,Right,Grid,Col, Footer, H3 } from 'native-base';
import {CartItem} from './CartItem';


export class CheckOut extends Component {
  render() {
    return (
        
      <Container>
       <Header>
        
          <Left>
            <Button transparent>
              <Icon name='arrow-back' style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
          <Title>CheckOut</Title>
          </Body>
          <Right></Right>
        </Header>     
        <Content>
          <Card>
          <CardItem header bordered>
              <H3>Shipment Details</H3>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                 Almmaady ,cairo ,Egypt
                </Text>
                <Text>
                Building No:14
                </Text>

              </Body>
              <Footer>
              <Button bordered dark>
            <Text>Update</Text>
          </Button>
              </Footer>
            </CardItem>
         
          </Card>
          <Card style={{justifyContent:'center',alignItems:'center'}}>
        
            <CardItem bordered>
            <Text style={{color:'grey'}}>Sub Total : S.R 18.00 </Text>
           
               
            </CardItem>
            <CardItem>
            <Text style={{color:'grey'}}>Shipment Fee : S.R 5.00 </Text>
            </CardItem>
            <CardItem>
            <Text style={{fontWeight:'bold'}}>Total : SR 23.00  </Text>
            </CardItem>
            <CardItem>
            <Button dark iconLeft >
            <Icon name='cash' />
            <Text>Pay</Text>
          </Button>
            </CardItem>
            
         
          </Card>
         
        </Content>
      </Container>
    );
  }
}
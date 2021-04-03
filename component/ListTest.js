import React, { Component } from 'react';
import {  Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body,  Text, Container,Card,CardItem ,Icon, Grid, Col} from 'native-base';
const users=[
    {name:'Ibraheem',phone:'01005674105'},
    {name:'Ahmed',phone:'0597415047'},
    {name:'Ibraheem',phone:'01005674105'},
    {name:'Ahmed',phone:'0597415047'},
    {name:'Ibraheem',phone:'01005674105'},
    {name:'Ahmed',phone:'0597415047'},
    {name:'Ibraheem',phone:'01005674105'},
    {name:'Ahmed',phone:'0597415047'},
    {name:'Ibraheem',phone:'01005674105'},
    {name:'Ahmed',phone:'0597415047'},
    {name:'Ibraheem',phone:'01005674105'},
    {name:'Ahmed',phone:'0597415047'},
];
export  class List1Test extends Component {
  
  render() {
    return (
      <Container>
      <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <Body>
     {users.map(
         user => {
             const {name,phone}=user;
             return(
                <Card>
                <CardItem>
                <Icon active name="person" />
           <Text>{name}</Text>
                </CardItem>
                <CardItem>
                <Icon active name="call" />
           <Text>{phone}</Text>
                </CardItem>
                </Card>
             )
         }
     )}
  
      </Body>
    </Content>
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Footer</Text>
        </Button>
      </FooterTab>
    </Footer>
    </Container>
    );
  }
}
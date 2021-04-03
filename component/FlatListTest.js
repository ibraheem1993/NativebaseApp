import React, { Component } from 'react';
import {FlatList} from 'react-native';
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
export  class FlatListTest extends Component {
  
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
     <FlatList data={users} renderItem={({index,item})=>{
     const {name,phone}=item
     return(
     <Card>
         <CardItem>
             <Icon name='person'></Icon>
             <Text>{name}</Text>
         </CardItem>
         <CardItem>
             <Icon name='call'></Icon>
             <Text>{phone}</Text>
         </CardItem>
     </Card>
     )
     }
     } keyExtractor={(index,item)=>
         index.toString()
     } ></FlatList>
  
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
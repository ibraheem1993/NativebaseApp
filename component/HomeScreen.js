

import React, { Component } from 'react';
import {ItemView} from './itemview';
import {ScrollView} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem,  Text, Button, Icon,  Tab, Grid,Col, Tabs, Row ,Left,Title,Right,Body} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

export  function HomeScreen (props){
    const navigation=useNavigation();
    return (
      <Container>
       <Header>       
        <Left>
       
        </Left>
        <Body>
        <Title>Home</Title>
        </Body>
        <Right></Right>
      </Header>     
        <Content>
         <Card>
             <CardItem> 
           
             <ScrollView horizontal >
               <TouchableOpacity onPress={ () => {
                 navigation.navigate('CategoryScreen')
               }}>
             <Grid>
          <Row ><Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{height: 100, width: 120}}/></Row>
          <Row ><Text style={{fontWeight:'bold',fontSize:20,}}>
              Category Name
                </Text></Row>
        </Grid>
        </TouchableOpacity>
      
 
</ScrollView>
             </CardItem>
             <CardItem>
              <ItemView />
           </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }

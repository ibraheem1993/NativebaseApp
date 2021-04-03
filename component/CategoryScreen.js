

import React, { Component } from 'react';
import {ItemView} from './itemview';
import {ScrollView} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem,  Text, Button, Icon,  Tab, Grid,Col, Tabs, Row ,Left,Title,Right,Body} from 'native-base';
export  function CategoryScreen (props){
    
    return (
      <Container>
       <Header>       
        <Left>
       
        </Left>
        <Body>
        <Title>Category </Title>
        </Body>
        <Right></Right>
      </Header>     
        <Content>
           <ItemView />
        </Content>
      </Container>
    );
  }

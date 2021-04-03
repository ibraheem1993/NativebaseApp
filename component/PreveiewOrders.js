
import {useNavigation} from "@react-navigation/native";
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem,  Text, Button, Icon,  Body, Grid,Col,Left,Title, Right} from 'native-base';
export  function PreviewOrders(props) {
  const navigation=useNavigation();
    return (
      <Container>
       <Header>
        
        <Left>
        <Button transparent onPress={ () => {
            navigation.navigate('UserAccount')
          }}>
            <Icon name='arrow-back' style={{color: 'black'}} />
          </Button>
        </Left>
        <Body>
        <Title>Preview Orders</Title>
        </Body>
        <Right></Right>
      </Header>     
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
              <Grid>
          <Col ><Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{height: 100, width: 120}}/></Col>
          <Col ><Text style={{fontWeight:'bold',fontSize:20,}}>
                Item name
                </Text>
                <Text style={{fontSize:20,color:'blue'}}>
                18 SR
                </Text>
                <Text style={{fontWeight:'bold',fontSize:20,}}>
               Delivered
                </Text></Col>
        </Grid>
              </Body>
            </CardItem> 
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
              <Grid>
          <Col ><Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{height: 100, width: 120}}/></Col>
          <Col ><Text style={{fontWeight:'bold',fontSize:20,}}>
                Item name
                </Text>
                <Text style={{fontSize:20,color:'blue'}}>
                18.00 SR
                </Text>
                <Text style={{fontWeight:'bold',fontSize:20,}}>
               Canceled
                </Text>
               </Col>
        </Grid>
              </Body>
            </CardItem> 
          </Card>
          
        </Content>
      </Container>
    );
  }

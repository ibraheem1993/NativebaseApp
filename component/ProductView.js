import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Button, Text, Left, Body, Icon,Title,Right } from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {AddToCard} from './AddToCard/functionAddToCard'
const cards = [
  {
    text: 'Item Name',
    name: 'This Item DEtails will puted  here all data you need to know abouted ',
    image: require('./img/swiper-1.jpeg'),
  },
  {
    text: 'Item Name',
    name: 'This Item DEtails will puted  here all data you need to know abouted ',
    image: require('./img/swiper-2.jpeg'),
  },
  {
    text: 'Item Name',
    name: 'This Item DEtails will puted  here all data you need to know abouted ',
    image: require('./img/swiper-3.jpeg'),
  },
 
];
export function ProductView (props) {
 const navigation=useNavigation();
    return (
      <Container>
       <Header>
        
          <Left>
            <Button transparent onPress={ () => {
              navigation.navigate('CategoryScreen')
            }}> 
              <Icon name='arrow-back' style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
          <Title>Item details</Title>
          </Body>
          <Right></Right>
        </Header>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                  
                    <Body>
                      <Text >{item.text}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
               
                  <Text>{item.name}</Text>
                 
                </CardItem>
                <CardItem>
                <Text style={{fontSize:20,color:'blue'}}>
                18.00 SR
                </Text>
                </CardItem>
                <CardItem>
               <AddToCard />
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );

}
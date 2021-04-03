import {TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Content, Card, CardItem,  Text, Button, Icon,  Body, Grid,Col } from 'native-base';
export  function ItemView (props) {
  const navigation=useNavigation();
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <TouchableOpacity onPress={ () => {
             navigation.navigate('ProductView')
            }}>
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
                 <Button dark iconLeft>
            <Icon name='cart' />
            <Text>Buy</Text>
          </Button></Col>
        </Grid>
              </Body>
            </CardItem> 
            </TouchableOpacity>
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
                 <Button dark iconLeft>
            <Icon name='cart' />
            <Text>Buy</Text>
          </Button></Col>
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
                18 SR
                </Text>
                 <Button dark iconLeft>
            <Icon name='cart' />
            <Text>Buy</Text>
          </Button></Col>
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
                18 SR
                </Text>
                 <Button dark iconLeft>
            <Icon name='cart' />
            <Text>Buy</Text>
          </Button></Col>
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
                18 SR
                </Text>
                 <Button dark iconLeft>
            <Icon name='cart' />
            <Text>Buy</Text>
          </Button></Col>
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
                18 SR
                </Text>
                 <Button dark iconLeft>
            <Icon name='cart' />
            <Text>Buy</Text>
          </Button></Col>
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
                18 SR
                </Text>
                 <Button dark iconLeft>
            <Icon name='cart' />
            <Text>Buy</Text>
          </Button></Col>
        </Grid>
              </Body>
            </CardItem> 
          </Card>
        </Content>
      </Container>
    );
  }

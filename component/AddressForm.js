import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon,Left,Right,Title,Button,Body ,Form,Label} from 'native-base';
import { useNavigation } from "@react-navigation/native";
export  function AddressForm(props) {
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
        <Title>Address Details</Title>
        </Body>
        <Right></Right>
      </Header>     
        <Content>
         
        
        <Form>
            <Item Active floatingLabel>
              <Label>City</Label>
              <Input />
            
            </Item>
            <Item floatingLabel last>
              <Label>Area</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Street</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Building No</Label>
              <Input />
            </Item>
           
          </Form>
        </Content>
      </Container>
    );
  }

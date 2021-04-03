import React, { Component } from 'react';
import {  Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Container } from 'native-base';
import { axios } from "axios";
export  function AnatomyExample(params) {
  const [repos,GetRepos]=React.useState([]);
  const ReposHandler= () =>{
  axios.get('https://api.github.com/users/2').then(GetRepos=>{
    jsonRespons.data
  }).catch(error=>{
    console.log('error',console.erro)
  })
  
  }
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
      <Button onPress={ReposHandler}><Text>Get</Text></Button>
      {repos.map(repo=>{
        return(<Text>{repo.name}</Text>)
        })}
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
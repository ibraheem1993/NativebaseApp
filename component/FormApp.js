import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Text, Footer,Icon} from 'native-base';
export  class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
           
          </Form>
         
          <Button block style={{marginTop:40}}>
          <Text>Sign UP</Text>
          </Button>
        
        </Content>
        <Footer />
      </Container>
    );
  }
}
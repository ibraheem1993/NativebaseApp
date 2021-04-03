import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Separator } from 'native-base';
export  class ListDividerExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>COMEDY</Text>
            </ListItem>
            <ListItem >
              <Text>Hangover</Text>
            </ListItem>
            <ListItem >
              <Text>Hangover2</Text>
            </ListItem>
            <ListItem last>
              <Text>Cop Out</Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>ACTION</Text>
            </ListItem>
            <ListItem>
              <Text>Terminator Genesis</Text>
            </ListItem>
            <ListItem>
              <Text> Mechanic</Text>
            </ListItem>
            <ListItem>
              <Text> Equilizer</Text>
            </ListItem>
            <ListItem itemHeader>
                <Text>Science Faction</Text>
            </ListItem>
            <ListItem>
                <Text>Purge Day</Text>
            </ListItem>
          </List>

         
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
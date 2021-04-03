import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, Icon,Button,Card,CardItem,Right,ListItem,CheckBox,Body,Left,Title} from 'native-base';
export  class BadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Badge primary>
            <Text>2</Text>
          </Badge>
          <Badge danger>
            <Text>2</Text>
          </Badge>
          <Badge primary>
          <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
          </Badge>
          <Badge style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>1866</Text>
          </Badge>
          
          <Button light><Text> Light </Text></Button>
 
          <Button bordered danger>
            <Text>danger</Text>
          </Button>

          <Button block success>
            <Text>Success</Text>
          </Button>
          <Button full success>
            <Text>Success</Text>
          </Button>
          <Button iconLeft danger>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
          <Button iconLeft>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button disabled block>
              <Text>Block</Text>
            </Button>
            <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
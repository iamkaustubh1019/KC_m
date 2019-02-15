
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,Linking, Alert,Image} from 'react-native';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import SideMenuDrawer from './SideMenuDrawer';
import { Container, Content, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';

export default class cancel extends Component {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>

        <Text style = {{color : "#FFFFFF"}}> = </Text>
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
       <Text>
       <Image
        source={require('./Main.png')}
        style={{width:35, height:18}} />
      </Text>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="Cancelled" color = "white"/>
            <Content>
              {this.renderpin()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }
  renderpin() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,marginTop:250 }}>
        <Text>None of Your Order is cancelled yet</Text>
      </View>
    );
  }
}

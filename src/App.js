import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Text,
  Alert,Image,TouchableOpacity,Linking
} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import CodePin from 'react-native-pin-code';
import { Actions } from 'react-native-router-flux';
import Navbar from './component/Navbar';
import SideMenu from './component/SideMenu';
import SideMenuDrawer from './component/SideMenuDrawer';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, CardBody,Footer,FooterTab,Header } from 'native-base';

const {height, width} = Dimensions.get('window');

export default class App extends Component {

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
        <Text style = {{color : "#4DB6AC"}}> = </Text>
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
       <Text>
       <Image
        source={require('./component/Main.png')}
        style={{width:35, height:18}} />
      </Text>
      </Right>

    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="KC Merchant" color = "white"/>
            <Content>
              {this.renderpin()}


            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }


  renderpin() {
    return (

            <Container >

                <Card>
                <CardItem >
                 <Button
                    transparent
                    onPress = {() => Actions.add()}>
                  <Icon active name="ios-add-circle"  />
                  <Text styles={{marginLeft:100}}>Add Product</Text>

                  <Card>
                  <CardItem >
                   <Button
                      transparent
                      onPress = {() => Actions.add()}>
                    <Icon active name="ios-add-circle"  />
                    <Text styles={{marginLeft:100}}>Add Category</Text>

                  </Button>
                 </CardItem>
               </Card>

                <Card>
                 <CardItem>
                 <Button
                    transparent
                    onPress = {() => Actions.stalk()}>
                   <Icon active name="ios-add-circle" />
                   <Text>Stalk</Text>



                   </Button>
                  </CardItem>
                </Card>

                <Card>
                  <CardItem>
                  <Button
                     transparent
                     onPress = {() => Actions.os()}>
                    <Icon active name="ios-add-circle" />
                    <Text>Order Status</Text>



                    </Button>
                   </CardItem>
                 </Card>
                 <Card>
               <CardItem>
               <Button
                  transparent
                  onPress = {() => Actions.remaining()}>
                 <Icon active name="ios-add-circle" />
                 <Text>Remaining Delivery</Text>



                 </Button>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                <Button
                   transparent
                   onPress = {() => Actions.past()}>
                  <Icon active name="ios-add-circle" />
                  <Text styles>Past Deliveries</Text>



                  </Button>
                 </CardItem>
               </Card>
               <Card>
                   <CardItem>
                   <Button
                      transparent
                      onPress = {() => Actions.cancel()}>
                     <Icon active name="ios-add-circle" />
                     <Text>Cancelled Orders</Text>



                     </Button>
                    </CardItem>
                </Card>

                       <Footer styles = {{backgroundColor:"#000000"}}>
                         <FooterTab styles = {{backgroundColor:"#000000"}}>
                           <Button styles = {{backgroundColor:"#000000"}}>
                             <Icon name="apps" color="#000000" />
                           </Button>
                           <Button>
                             <Icon name="camera" />
                           </Button>
                           <Button active>
                             <Icon active name="navigate" />
                           </Button>
                           <Button>
                             <Icon name="person" />
                           </Button>
                         </FooterTab>
                       </Footer>


</Container>



    );
  }
}


const styles = StyleSheet.create({
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#fcfcfc',
     color: '#000000',
     textShadowRadius: 5,
     margin: 1,
     height: height/8.5,
     width:width
  },
  submitButtonText:{
     color: '#000000',
     fontSize:20,
     justifyContent:'center',
     margin :15
  },
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height : height-60
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  blur: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: width,
    height: height
  },
  avoidingView: {
    borderRadius: 10,
    height: 200,
    marginTop: 50,
    width: width - 30
  },
  containerCodePin: {
    borderRadius: 10
  },
  success: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center'
  },


});

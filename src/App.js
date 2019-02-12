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
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';

const {height, width} = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      displayCodePin: true,
      success: '',
      code:''
    };
  }
  _onFinishCheckingCode2(isValid,code)
  {
    if(!isValid) {
      Alert.alert('Confimation Code', 'Code not match!',[{text : 'OK'}],{
        canceleable: false,
      })
    }
    else {
      this.setState ({code })
      Alert.alert('Confirmation Code ', 'Code Successful!',[{text :'OK',onPress:() => {Actions.home()}}],{
    canceleable : false,})
    }
  }
  onSuccess = () => {
    this.setState({
      displayCodePin: false,
      success: 'A success message :)'
    });
  };
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
      <View style={styles.container}>



            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => Actions.add()
               }>
               <Text style = {styles.submitButtonText}> Add Product </Text>
            </TouchableOpacity>

                  <TouchableOpacity
                     style = {styles.submitButton}
                     onPress = {
                        () => Actions.stalk()
                     }>
                     <Text style = {styles.submitButtonText}> Stalk </Text>
                  </TouchableOpacity>

                        <TouchableOpacity
                           style = {styles.submitButton}
                           onPress = {
                              () => Actions.os()
                           }>
                           <Text style = {styles.submitButtonText}> Order Status </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style = {styles.submitButton}
                           onPress = {
                              () => Actions.add()
                           }>
                           <Text style = {styles.submitButtonText}>Today's Earning </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style = {styles.submitButton}
                           onPress = {
                              () => Actions.add()
                           }>
                           <Text style = {styles.submitButtonText}> Remaining Orders  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style = {styles.submitButton}
                           onPress = {
                              () => Actions.add()
                           }>
                           <Text style = {styles.submitButtonText}> Past Orders </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style = {styles.submitButton}
                           onPress = {
                              () => Actions.add()
                           }>
                           <Text style = {styles.submitButtonText}> Cancelled Order</Text>
                        </TouchableOpacity>




      </View>
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
     height: height/8,
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

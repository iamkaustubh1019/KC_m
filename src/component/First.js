import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,Linking, Alert,Image} from 'react-native';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import SideMenuDrawer from './SideMenuDrawer';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';



export default class First extends Component {


render() {
        return (
          <View style = {styles.container}>

          <Image
           source={require('./Main.png')}
           style={{width: 350, height:180,marginTop:200,marginRight:100}} />


          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => Actions.app()}>
             <Text style = {styles.submitButtonText}> Enter Your Kirana </Text>
          </TouchableOpacity>
          </View>

)

}

}
const styles = StyleSheet.create({
   container: {
      height:800,
      backgroundColor:'#000000',
      marginBottom:0
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#05e700',
      padding: 10,
      margin: 15,
      justifyContent:'center',
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      justifyContent:'center',
      marginLeft:85
   }
})

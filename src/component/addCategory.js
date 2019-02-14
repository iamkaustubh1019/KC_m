import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput, StyleSheet ,Linking, Alert,Image} from 'react-native';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import SideMenuDrawer from './SideMenuDrawer';
import { Container, Content, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AddCategory extends Component {
   state = {
      Key :'',
      Title: '',
      Id: '',
      Image: '',
    }
      ShopServer = () => {
         fetch('http://192.168.43.208:3000/api/category', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           Key: this.state.Key,
           Title: this.state.Title,
           Image: this.state.Image,
           Id : this.state.Id,

         })
       }).then((response) => response.json())
             .then((responseJson) => {
                 Alert.alert(JSON.stringify(responseJson));

             }).catch((error) => {
               console.error(error);
             });

           }

   handleTitle = (text) => {
      this.setState({ Title: text })
   }
   handleImage_url = (text) => {
      this.setState({ Image: text })
   }

   handleId = (text) => {
      this.setState({ Id: text })
   }
   login = (Title, pass) => {
      alert('Title: ' + Title + ' Id: ' + pass)
   }
   render (){
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
         source={require('./Main.png')}
         style={{width:35, height:18}} />
       </Text>
       </Right>
     );
     return(
       <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
           <Container>
             <Navbar left={left} right={right} title="Add Products" color = "white"/>
             <Content>
               {this.renderInput()}
             </Content>
           </Container>
       </SideMenuDrawer>
     );
   }
   renderInput() {

      return (
         <ScrollView style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter the Categor Title"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {this.handleTitle}/>

            <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.ShopServer()}>
                 <Text style = {styles.submitButtonText}> Submit </Text>
              </TouchableOpacity>

         </ScrollView>
      )
   }
}
const styles = StyleSheet.create({
   container: {
      paddingTop: 3,
      margin:2

   },
   input: {
      height: 80,
      borderColor: '#fcfcfc',
      borderWidth: 4
   },
   submitButton: {
      backgroundColor: '#000000',
      padding: 10,
      height: 40,
      marginTop:5
   },
   submitButtonText:{
      color: 'white'
   }
})

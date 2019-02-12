import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput, StyleSheet ,Linking, Alert,Image} from 'react-native';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import SideMenuDrawer from './SideMenuDrawer';
import { Container, Content, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Add extends Component {
   state = {
      Key :'',
      Name: '',
      Price: '', 
      Image: '',
      Discount:'',
    }
      ShopServer = () => {
         fetch('http://192.168.43.208:3000/api/products', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           Key: '121',
           Name: this.state.Name,
           Image: this.state.Image,
           Price : this.state.Price,
           Discount: this.state.Discount
         })
       }).then((response) => response.json())
             .then((responseJson) => {
                 Alert.alert(JSON.stringify(responseJson));

             }).catch((error) => {
               console.error(error);
             });

           }

   handleName = (text) => {
      this.setState({ Name: text })
   }
   handleImage_url = (text) => {
      this.setState({ Image: text })
   }
   handleDiscount = (text) => {
       this.setState({ Discount: text })
    }
   handlePrice = (text) => {
      this.setState({ Price: text })
   }
   login = (Name, pass) => {
      alert('Name: ' + Name + ' Price: ' + pass)
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
             <Navbar left={left} right={right} title="KC Merchant" color = "white"/>
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
               placeholder = "Enter the product Name"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Add Price"
                  placeholderTextColor = "#000000"
                  autoCapitalize = "none"
                  onChangeText = {this.handlePrice}/>
                  <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholder = "Add Quantity"
                     placeholderTextColor = "#000000"
                     autoCapitalize = "none"
                     onChangeText = {this.handlePrice}/>
                     <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Add Description"
                        placeholderTextColor = "#000000"
                        autoCapitalize = "none"
                        onChangeText = {this.handlePrice}/>
               <TextInput style = {styles.input}
                     underlineColorAndroid = "black"
                     placeholder = "Item Discount "
                     placeholderTextColor = "#000000"
                     autoCapitalize = "none"
                     onChangeText = {this.handleDiscount}/>


                     <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {
                               () => Actions.up()
                            }>
                            <Text style = {styles.submitButtonText}> Upload Image </Text>
                         </TouchableOpacity>

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
      paddingTop: 0
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

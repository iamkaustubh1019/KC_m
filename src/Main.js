import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';
import App from './App';
import Login from './page/Login';
import Intro from './component/Intro';
import TableView from './component/TableView';
import Add from './component/add';
import First from './component/First';
import Stalk from './component/Stalk';
import OrderStatus from './component/OrderStatus';
import Upload from './component/Upload';
export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

    render() {
      return(
        <Root>
          <Router>
            <Scene key="root" >
              <Scene  key="intro" component={Intro} hideNavBar />
              <Scene  key="up" component={Upload} hideNavBar />
              <Scene  key="add" component={Add} hideNavBar />
              <Scene  key="os" component={OrderStatus} hideNavBar />
              <Scene key="stalk" component = {Stalk} hideNavBar />
              <Scene  key="login" component={Login} hideNavBar />
              <Scene  initial key="first" component={First} hideNavBar />
              <Scene  key = "app" component = {App} hideNavBar/>
              <Scene  key = "tableview" component = {TableView} hideNavBar/>
            </Scene>
          </Router>
        </Root>
      );
    }

  }

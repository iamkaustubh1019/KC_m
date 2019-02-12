import React, {Component} from 'react';
import Table, { Section, BioCell, StaticCell, TouchableCell } from 'react-native-js-tableview';
import Navbar from '../component/Navbar';
import { Container, View, Content, Left, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default  class TableView extends Component {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => Actions.home()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    return (
      <Container>
        <Navbar left={left} title="My Profile" />
        <Content>
        <Table accentColor="#4DB6AC" scrollable={true}>
          <Section>
            <BioCell title="Mr.Kaustubh" subtitle="Skater" />
            <StaticCell title="My Wishlist" accessory="disclosure" onPress={() => {}} />
          </Section>
          <Section header="Orders">
            <StaticCell title="My Orders" accessory="disclosure" onPress={() => {}} />
            <StaticCell title="Past Orders" accessory="disclosure" onPress={() => {}} />
            <StaticCell title="Cancel Orders" accessory="disclosure" onPress={() => {}} />
          </Section>
          <Section header="Tracking and Cancellation">
            <StaticCell title="Track delivery" accessory="disclosure" onPress={() => {}} />
          </Section>
          <Section header="Payment and Return">
          <StaticCell title="Payments" accessory="disclosure" onPress={() => {}} />
          <StaticCell title="Return Orders" accessory="disclosure" onPress={() => {}} />
          </Section>
          <Section>
            <TouchableCell title="Sign out" onPress={() => Actions.login()} />
          </Section>
        </Table>
        </Content>
      </Container>
    );
  }
}

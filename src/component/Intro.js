import React from 'react';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Welcome to Kirana Calling',
    text:"Now in 4 Steps your order is at your place...",
    icon: 'ios-images',
    colors: ['blue', 'orange'],
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text:
      'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    icon: 'ios-options',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    icon: 'ios-beer',
    colors: ['#29ABE2', '#4F00BC'],
  },
];

export default class Intro  extends React.Component {
  _renderItem (props){
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: 5,
          paddingBottom: 5,
          width: 300,
          height: 300,
        },
      ]}
      color = "black"
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >

      <View>
        <Text style={styles.title}>Hey There</Text>
        <Text style={styles.text}>Hey Buddy....</Text>
      </View>
    </LinearGradient>
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem(this.props.children)}
        bottomButton
        showPrevButton
        showSkipButton
         //hideNextButton
        // hideDoneButton
         onSkip={() => Actions.app()}
      />
    );
  }
}

import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';
import Svg from './Component/Svg';
import svgs from './assets/svgs';

export default class SvgDemo extends Component {
  render() {
    return (
      <View>
        {
          Object.keys(svgs).map((icon, index) =>
            <Svg key={`key-${index}`} icon={icon} size="30" />
          )
        }
        {
          Object.keys(svgs).map((icon, index) =>
            <Text key={`key-${index}-1`}>{icon}</Text>
          )
        }
      </View>
    )
  }
}

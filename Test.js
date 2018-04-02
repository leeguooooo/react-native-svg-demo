import React, {Component} from 'react';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default class SvgExample extends Component {
  render() {
    return (
      <Svg width="50" height="50" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <Path d="M240.75 60.75l-133 132.75q-1.75 1.75-4.25 1.75t-4.25-1.75l-71.5-71.25q-1.75-2-1.75-4.375t1.875-4.125q1.875-1.75 4.25-1.75t4.125 1.75l67.25 67 128.75-128.5q1.75-1.75 4.125-1.75t4.25 1.75Q242.5 54 242.5 56.375t-1.75 4.375" fill="#34475e" class="transform-group"/>
      </Svg>
    );
  }
}

declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import { Component } from 'react';
  import { TextStyle } from 'react-native';

  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle | TextStyle[];
  }

  export default class MaterialCommunityIcons extends Component<IconProps> {}
}

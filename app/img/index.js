'use strict';

import React, { Component } from 'react';
import styles from './style';
import images from './img';
import {
  View,
  Text,
  Image
} from 'react-native';

export default class DisplayPic extends Component{

  render(){

    return(
      <View>
        <Image
          style={styles.img}
          source={images[this.props.num]}
        />
      </View>
    );
  }
}

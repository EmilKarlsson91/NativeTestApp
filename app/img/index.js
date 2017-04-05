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

    // function getImg(index){
    //   return images[index];
    //}

    return(
      <View>
        <Image
          style={styles.img}
          source={require('./res/spongeBob.png')}
        />
      </View>
    );
  }
}

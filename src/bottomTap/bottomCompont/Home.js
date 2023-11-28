import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import My from '../../stackScreen/stackHome/My';
import {TextInput} from 'react-native-paper';
import MapView, {Marker} from 'react-native-maps';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <My />
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default Home;

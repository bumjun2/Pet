import React from 'react';
import {Text, View} from 'react-native';
import My from '../../stackScreen/stackHome/My';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <My />
      <View style={{flex: 2}}></View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default Home;

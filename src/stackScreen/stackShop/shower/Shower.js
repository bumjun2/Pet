import React from 'react';
import {View} from 'react-native';
import ShowerList from './ShowerList';

const Shower = ({navigation}) => {
  return (
    <View>
      <ShowerList navigation={navigation} />
    </View>
  );
};

export default Shower;

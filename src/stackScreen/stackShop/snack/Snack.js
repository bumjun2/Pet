import React from 'react';
import {View} from 'react-native';
import SnackList from './SnackList';

const Snack = ({navigation}) => {
  return (
    <View>
      <SnackList navigation={navigation} />
    </View>
  );
};

export default Snack;

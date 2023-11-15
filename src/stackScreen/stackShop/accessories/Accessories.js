import React from 'react';
import {View} from 'react-native';
import AccessoriesList from './AccessoriesList';

const Accessories = ({navigation}) => {
  return (
    <View>
      <AccessoriesList navigation={navigation} />
    </View>
  );
};

export default Accessories;

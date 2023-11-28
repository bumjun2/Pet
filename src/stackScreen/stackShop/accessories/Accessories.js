import React from 'react';
import {View} from 'react-native';
import AccessoriesList from './AccessoriesList';

const Accessories = ({navigation, route}) => {
  const {data3} = route.params;
  return (
    <View>
      <AccessoriesList navigation={navigation} data={data3} />
    </View>
  );
};

export default Accessories;

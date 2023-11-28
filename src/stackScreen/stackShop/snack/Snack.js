import React from 'react';
import {View} from 'react-native';
import SnackList from './SnackList';

const Snack = ({navigation, route}) => {
  const {data4} = route.params;
  return (
    <View>
      <SnackList navigation={navigation} data={data4} />
    </View>
  );
};

export default Snack;

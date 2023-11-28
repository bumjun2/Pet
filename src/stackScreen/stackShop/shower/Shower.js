import React from 'react';
import {View} from 'react-native';
import ShowerList from './ShowerList';

const Shower = ({navigation, route}) => {
  const {data2} = route.params;
  return (
    <View>
      <ShowerList navigation={navigation} data={data2} />
    </View>
  );
};

export default Shower;

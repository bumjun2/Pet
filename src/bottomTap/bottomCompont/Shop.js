import React from 'react';
import {ScrollView, View} from 'react-native';
import Advertisement from '../../stackScreen/stackShop/Advertisement';
import Category from '../../stackScreen/stackShop/Category';
import NewProduct from '../../stackScreen/stackShop/newProduct/NewProduct';
import Best from '../../stackScreen/stackShop/Best';

const Shop = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Advertisement navigation={navigation} />
        <Category navigation={navigation} />
        <NewProduct />
        <Best />
      </View>
    </ScrollView>
  );
};

export default Shop;

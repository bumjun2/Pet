import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import realm from '../../../realm/Realm';
import Context from '../../stackShop/context/Context';

const FollowerPeople = () => {
  const {on} = useContext(Context);

  const renderItem = ({item}) => (
    <View
      style={{backgroundColor: '#fff', flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity>
        <Image
          source={{uri: item.img}}
          style={{height: 80, width: 80, borderRadius: 50, marginLeft: 20}}
        />
      </TouchableOpacity>
      <View style={{justifyContent: 'center'}}>
        <Text style={{width: 230, textAlign: 'center'}}>{item.id}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={on.following}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FollowerPeople;

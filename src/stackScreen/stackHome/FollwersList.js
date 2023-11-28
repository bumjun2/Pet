import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import realm from '../../realm/Realm';

const FollwersList = ({item}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {item.map((follower, index) => (
        <View key={index} style={{margin: 20}}>
          <Text style={{textAlign: 'center'}}>{follower.nickName}</Text>
          <Image
            source={{uri: follower.img}}
            style={{width: 100, height: 100, borderRadius: 30}}
          />
          <Text style={{textAlign: 'center'}}>{follower.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default FollwersList;

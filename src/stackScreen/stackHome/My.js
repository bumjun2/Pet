import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Board from './board/Board';
import Context from '../stackShop/context/Context';
import FollwersList from './FollwersList';
import realm from '../../realm/Realm';

const My = () => {
  const {on} = useContext(Context);

  const followerList = [];
  for (const element of on.followers) {
    const user = realm.objects('User').filtered('id = $0', element.id)[0];
    followerList.push(user.post);
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '100%', height: 300}}>
        <Board />
      </View>
      <Text
        style={{
          marginTop: 30,
          marginBottom: 20,
          fontWeight: '700',
          fontSize: 20,
        }}>
        팔로잉 게시물
      </Text>
      <FlatList
        style={{
          width: '90%',
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 20,
        }}
        horizontal
        data={followerList}
        renderItem={({item}) => <FollwersList item={item} />}
      />
    </View>
  );
};

export default My;

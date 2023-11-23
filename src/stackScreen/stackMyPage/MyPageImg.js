import React, {useContext, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Context from '../stackShop/context/Context';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const MyPageImg = ({navigation}) => {
  const {on} = useContext(Context);

  const renderItem = ({item}) => (
    <View style={{margin: 5}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OldPost', {post: item});
        }}>
        <Image
          source={{uri: item.img}}
          style={{width: 100, height: 100, borderRadius: 20}}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        data={on.post}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        nestedScrollEnabled={true}
        numColumns={3}
        onEndReachedThreshold={1}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewPost');
        }}
        style={{
          position: 'absolute',
          bottom: 310,
          right: 20,
          width: 50,
          height: 50,
          backgroundColor: '#fff',
          borderColor: 'pink',
          borderWidth: 2,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '700', color: 'pink'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyPageImg;

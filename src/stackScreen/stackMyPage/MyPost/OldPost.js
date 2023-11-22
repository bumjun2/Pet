import React, {useContext, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Context from '../../stackShop/context/Context';

const OldPost = ({route}) => {
  const {on} = useContext(Context);
  const {post} = route.params;

  return (
    <View>
      <View style={{flexDirection: 'row', height: '20%'}}>
        <Image
          source={{uri: on.userImg}}
          style={{width: 50, height: 50, borderRadius: 50, margin: 20}}
        />
        <Text style={{marginTop: 35}}>{on.nickName}</Text>
      </View>
      <Image
        source={{uri: post.img}}
        style={{width: '100%', height: '60%', borderRadius: 20}}
      />
      <Text style={{margin: 10, fontWeight: '700', fontSize: 20}}>
        {post.title}
      </Text>
    </View>
  );
};

export default OldPost;

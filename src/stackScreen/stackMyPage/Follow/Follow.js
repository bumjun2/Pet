import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Serch from './Serch';
import People from './People';

const Follow = () => {
  const [nickName, setNickName] = useState('');

  const serchNickName = newText => {
    setNickName(newText);
  };
  const serchNickNameHandler = newText => {
    serchNickName(newText);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Serch serchNickNameHandler={serchNickNameHandler} />
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          팔로워
        </Text>
      </View>
      <People nickName={nickName} />
    </View>
  );
};

export default Follow;

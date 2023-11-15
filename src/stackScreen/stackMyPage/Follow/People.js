import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';

const People = ({nickName}) => {
  const userName = '귀여운 강아지';

  if (userName === nickName) {
    Alert.alert('찾음');
  }

  return (
    <View style={{backgroundColor: '#fff', flexDirection: 'row'}}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/강아지.jpeg')}
          style={{height: 80, width: 80, borderRadius: 50, marginLeft: 20}}
        />
      </TouchableOpacity>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            width: 230,
            textAlign: 'center',
          }}>
          {userName}
        </Text>
      </View>
    </View>
  );
};

export default People;

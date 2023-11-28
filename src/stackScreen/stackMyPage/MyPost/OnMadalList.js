import React, {useContext, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Context from '../../stackShop/context/Context';
import realm from '../../../realm/Realm';
import {useFocusEffect} from '@react-navigation/native';

const OnMadalList = ({item}) => {
  const {on, setOn} = useContext(Context);

  const commentRemove = () => {
    realm.write(() => {
      for (let i = 0; i < on.post.length; i++) {
        for (let j = 0; j < on.post[i].comment.length; j++) {
          if (on.post[i].comment[j].nickName === item.nickName) {
            Alert.alert('정말 삭제하시겠습니까', '', [
              {
                text: '네',
                onPress: () => {
                  realm.write(() => realm.delete(on.post[i].comment[j]));
                },
              },
              {text: '아니요', onPress: () => console.log('아니요 클릭됨')},
            ]);
          }
        }
      }
    });
  };
  return (
    <View style={styles.continue}>
      <View>
        <Image
          style={{borderRadius: 50, width: 50, height: 50}}
          source={{uri: item.userImg}}></Image>
      </View>
      <View style={styles.useName}>
        {item.nickName === on.nickName ? (
          <Text style={{color: 'pink'}}>게시물 관리자</Text>
        ) : (
          <Text>{item.nickName}</Text>
        )}
        <Text style={{width: 230}}>{item.comment}</Text>
        {item.nickName === on.nickName ? (
          <TouchableOpacity onPress={commentRemove}>
            <Text style={{marginTop: 15, color: 'red'}}>삭제하기</Text>
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    flexDirection: 'row',
    margin: 10,
  },
  useName: {
    marginLeft: 10,
    flexDirection: 'column',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default OnMadalList;

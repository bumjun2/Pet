import React, {useContext} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Context from '../../../stackShop/context/Context';
import realm from '../../../../realm/Realm';

const ModalList = ({item, post}) => {
  const {on} = useContext(Context);

  const deleteHandler = () => {
    for (let i = 0; i <= post.comment.length; i++) {
      if (post.comment[i] === item.id) {
        Alert.alert('정말 삭제하시겠스니까', '', [
          {
            text: '네',
            onPress: () => realm.write(() => realm.delete(item)),
          },
          {text: '아니요', onPress: () => console.log('아니요 클릭됨')},
        ]);
      }
    }
  };
  return (
    <View style={styles.continue}>
      <View>
        <Image
          style={{borderRadius: 50, width: 50, height: 50}}
          source={{uri: item.userImg}}></Image>
      </View>
      <View style={styles.useName}>
        {post.nickName === item.nickName ? (
          <Text style={{color: 'pink'}}>게시물 관리자</Text>
        ) : (
          <Text>{item.nickName}</Text>
        )}

        <Text style={{width: 230}}>{item.comment}</Text>
        {on.nickName === item.nickName ? (
          <TouchableOpacity onPress={deleteHandler}>
            <Text style={{color: 'red'}}>삭제하기</Text>
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
    flexDirection: 'column',
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ModalList;

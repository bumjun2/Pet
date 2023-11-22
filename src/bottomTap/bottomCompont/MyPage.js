import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import UserPicture from '../../stackScreen/stackMyPage/UserPicture';
import UserFollow from '../../stackScreen/stackMyPage/Follow/UserFollow';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyPageImg from '../../stackScreen/stackMyPage/MyPageImg';
import MyPageSave from '../../stackScreen/stackMyPage/MyPageSave';

const MyPage = ({props, changeText, navigation}) => {
  const [list, setList] = useState(0);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <UserPicture props={props} changeText={changeText} />
      <UserFollow navigation={navigation} />
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => setList(0)}>
          <Icon name="apps" size={30} color={'pink'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setList(1)}>
          <Icon name="bookmark-border" size={30} color={'pink'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
        }}>
        {list === 1 ? <MyPageSave /> : <MyPageImg navigation={navigation} />}
      </View>
    </View>
  );
};

export default MyPage;

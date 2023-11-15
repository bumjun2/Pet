import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import MyPage from '../../bottomTap/bottomCompont/MyPage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Context from '../stackShop/context/Context';

const User = ({navigation}) => {
  const [changeText, setChangeText] = useState('');
  const {on, setOn} = useContext(Context);

  useEffect(() => {
    setChangeText(on.nickName);
  }, [on]);

  return (
    <View style={{flex: 1}}>
      <MyPage changeText={changeText} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    height: 150,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default User;

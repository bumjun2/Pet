import React, {useContext, useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import Context from '../stackShop/context/Context';
import realm from '../../realm/Realm';

const LoginScreen = ({navigation, setLogin}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const {setOn} = useContext(Context);
  const {setOff} = useContext(Context);

  const handleLogin = () => {
    realm.write(() => {
      const user = realm
        .objects('User')
        .filtered('id = $0 AND password = $1', userId, password)[0];
      if (user) {
        setLogin(true);
        setOn(user);
      } else {
        Alert.alert('회원 정보가 일치하지 않습니다');
      }
      const notUser = realm.objects('User').filtered('id != $0', userId);
      setOff(notUser);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{width: '43%'}}>
          <Button title="로그인" onPress={handleLogin} />
        </View>
        <View style={{width: '43%'}}>
          <Button
            title="회원가입하기"
            onPress={() => {
              navigation.navigate('Sinup');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default LoginScreen;

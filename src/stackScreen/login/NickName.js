import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import realm from '../../realm/Realm';

const NickName = ({navigation, route}) => {
  const [respons, setRespons] = useState(null);
  const userID = route.params;
  const [changText, setChangText] = useState('');

  const onAddImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) return;
        setRespons(res);
        realm.write(() => {
          const user = realm.objects('User').filtered('id = $0', userID)[0];
          if (user) {
            user.userImg = res.assets[0].uri;
          }
        });
      },
    );
  };

  const Sinup = () => {
    realm.write(() => {
      const username = realm.objects('User').filtered('id = $0', userID)[0];
      if (username) {
        username.nickName = changText;
      }

      navigation.navigate('Login');
    });
  };

  return (
    <View style={styles.continue}>
      <Text
        style={{
          margin: 20,
          backgroundColor: 'pink',
          fontWeight: '700',
          color: 'black',
        }}>
        강아지 사진을 넣으세요
      </Text>
      <TouchableOpacity onPress={onAddImage}>
        {respons === null ? (
          <Icon name="person" size={100} color={'black'} />
        ) : (
          <Image
            style={styles.circle}
            source={{uri: respons?.assets[0]?.uri}}
          />
        )}
      </TouchableOpacity>

      <TextInput
        style={{width: '50%'}}
        placeholder="강아지 이름 기록해주세요"
        textAlign="center"
        onChangeText={setChangText}
      />
      <View style={{width: '40%'}}>
        <Button title="가입완료" onPress={Sinup}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    marginTop: 20,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  font: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default NickName;

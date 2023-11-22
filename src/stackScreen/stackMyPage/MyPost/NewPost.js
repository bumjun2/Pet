import React, {useContext, useState} from 'react';
import {Platform, Text, View, Image, TextInput, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import Context from '../../stackShop/context/Context';
import realm from '../../../realm/Realm';

const NewPost = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState('');
  const {on, setOn} = useContext(Context);

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
        setSelectedImage(res.assets[0].uri);
      },
    );
  };
  const addPost = () => {
    realm.write(() => {
      if (selectedImage === '' || text === '') {
        Alert.alert('사진 또는 강아지 소개를 해주세요');
      } else {
        realm.create('Post', {
          id: Math.floor(Math.random() * 1000) + 1,
          img: selectedImage,
          nickName: on.nickName,
          title: text,
        });

        on.post = [
          ...on.post,
          {
            id: Math.floor(Math.random() * 1000) + 1,
            img: selectedImage,
            nickName: on.nickName,
            title: text,
          },
        ];

        navigation.navigate('MyPage');
        setOn(on);
      }
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0.4,
          backgroundColor: '#fff',
        }}>
        <Text style={{fontWeight: '700'}}>사진추가</Text>
        <TouchableOpacity onPress={onAddImage}>
          {selectedImage === null ? (
            <View
              style={{
                marginTop: 10,
                width: 100,
                height: 100,
                borderColor: 'pink',
                borderWidth: 3,
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
          ) : (
            <Image
              source={{uri: selectedImage}}
              style={{width: 200, height: 200, borderRadius: 20, marginTop: 10}}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: '700', margin: 10}}>강아지를 소개하세요</Text>
        <TextInput
          style={{
            width: '80%',
            height: '60%',
            backgroundColor: 'blue',
            borderRadius: 30,
            backgroundColor: '#fff',
            borderColor: 'pink',
            borderWidth: 3,
            padding: 20,
            marginTop: 30,
          }}
          placeholder="강아지를 소개하세요"
          multiline={true}
          onChangeText={setText}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyPage');
          }}>
          <Text>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addPost}>
          <Text>게시물 추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPost;

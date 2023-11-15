import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Context from '../stackShop/context/Context';
import realm from '../../realm/Realm';

const UserPicture = ({changeText}) => {
  const {on} = useContext(Context);
  const [img, setImg] = useState(on.userImg);

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
        realm.write(() => {
          const user = realm.objects('User').filtered('id = $0', on.id)[0];
          if (user) {
            setImg((user.userImg = res.assets[0].uri));
          }
        });
      },
    );
  };

  return (
    <View style={styles.continue}>
      <TouchableOpacity onPress={onAddImage}>
        {on.userImg === '' ? (
          <Icon name="person" size={100} color={'black'} />
        ) : (
          <Image style={styles.circle} source={{uri: img}} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={changeText}>
        <Text style={styles.font}>{changeText}</Text>
      </TouchableOpacity>
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

export default UserPicture;

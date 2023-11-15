import React, {useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PostRiew = ({onModalToggle}) => {
  const [inputIcon, setInputIcon] = useState(false);
  const [starIcon, setStarIcon] = useState(false);

  const handleIconPress = () => {
    setInputIcon(!inputIcon);
  };
  const starHandler = () => {
    setStarIcon(!starIcon);
    if (starIcon) {
      Alert.alert('저장이 취소 되었습니다.');
    } else {
      Alert.alert('저장되었습니다');
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={handleIconPress} style={{marginTop: 10}}>
        <Icon
          name={inputIcon ? 'thumb-up-alt' : 'thumb-up-off-alt'}
          size={40}
          color={'black'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onModalToggle}
        style={{marginTop: 10, marginLeft: 10}}>
        <Icon name="messenger-outline" size={40} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={starHandler}
        style={{marginTop: 10, marginLeft: 240}}>
        <Icon
          name={starIcon ? 'turned-in' : 'turned-in-not'}
          size={40}
          color={'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  module: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
    borderRadius: 20,
  },
});

export default PostRiew;

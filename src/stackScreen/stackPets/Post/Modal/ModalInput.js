import React from 'react';
import {StyleSheet, TextInput, View, Button, Alert} from 'react-native';

const ModalInput = ({handlerModalList, commentHandler, text}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        placeholder="🐶 댓글을 달아주세요!!"
        onChangeText={newtext => handlerModalList(newtext)}
        style={styels.input}
        value={text}
      />
      <Button
        title="추가"
        style={styels.button}
        onPress={commentHandler}></Button>
    </View>
  );
};

const styels = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: '#ffff',
    borderColor: '#ccc',
    borderWidth: 2,
    width: 255,
  },
  button: {
    backgroundColor: 'blue',
  },
});

export default ModalInput;

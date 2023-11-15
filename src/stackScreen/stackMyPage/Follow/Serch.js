import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Serch = ({serchNickNameHandler}) => {
  return (
    <View style={{height: 80, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={styles.input}
        placeholder="찾으실 계정을 입력하세요"
        onChangeText={newText => serchNickNameHandler(newText)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
});

export default Serch;

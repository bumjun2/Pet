import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModalTitle = ({isModalVisible, setModalVisible}) => {
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!isModalVisible);
        }}
        style={{flex: 0.5}}>
        <Icon name="highlight-off" size={30} color={'red'} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>두근두근 소통창</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ModalTitle;

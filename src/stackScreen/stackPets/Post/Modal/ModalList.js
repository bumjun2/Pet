import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ModalList = ({text}) => {
  return (
    <View style={styles.continue}>
      <View>
        <Image
          style={{borderRadius: 50, width: 50, height: 50}}
          source={require('../../../../assets/강아지.jpeg')}></Image>
      </View>
      <View style={styles.useName}>
        <Text>귀여운 강아지</Text>
        <Text style={{width: 230}}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    flexDirection: 'row',
    margin: 10,
  },
  useName: {
    flexDirection: 'column',
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ModalList;

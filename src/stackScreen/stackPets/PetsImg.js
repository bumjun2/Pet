import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const width_proportion = '33%';

const PetsImg = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imgs}
        onPress={() => {
          navigation.navigate('PetsPost');
        }}>
        <Image source={require('../../assets/알파카.jpeg')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imgs}
        onPress={() => {
          navigation.navigate('PetsPost');
        }}>
        <Image source={require('../../assets/알파카.jpeg')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imgs}
        onPress={() => {
          navigation.navigate('PetsPost');
        }}>
        <Image source={require('../../assets/알파카.jpeg')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imgs: {
    borderRadius: 10,
    width: width_proportion,
    height: 100,
  },
});

export default PetsImg;

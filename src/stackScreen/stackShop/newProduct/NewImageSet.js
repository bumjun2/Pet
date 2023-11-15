import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const NewImageSet = ({imageSource, title, price}) => {
  return (
    <View style={{padding: 10}}>
      <View>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}원</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    textAlign: 'center',
    color: 'red',
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default NewImageSet;

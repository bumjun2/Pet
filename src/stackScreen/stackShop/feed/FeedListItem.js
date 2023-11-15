import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FeedListItem = ({imageSource, title, price, navigation}) => {
  const dataHandler = () => {
    navigation.navigate('Goods', {
      imageSource,
      title,
      price,
    });
  };
  return (
    <TouchableOpacity style={styles.listItem} onPress={dataHandler}>
      <View>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}원</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 10,
  },
  image: {
    margin: 10,
    width: 'auto',
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

export default FeedListItem;

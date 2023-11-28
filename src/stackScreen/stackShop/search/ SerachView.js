import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import realm from '../../../realm/Realm';

const SerachView = ({item, navigation}) => {
  const searchCount = () => {
    realm.write(() => {
      const rank = realm
        .objects('SearchRanking')
        .filtered('text = $0', item.title)[0];

      if (!rank) {
        realm.create('SearchRanking', {
          text: item.title,
          count: 1,
          img: item.imageSource,
          price: item.price,
        });
      } else {
        rank.count++;
      }
    });
    navigation.navigate('Goods', {
      item,
    });
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
      }}
      onPress={searchCount}>
      <Image source={item.imageSource} style={styles.img} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
});

export default SerachView;

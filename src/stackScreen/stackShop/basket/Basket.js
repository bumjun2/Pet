import React, {useContext, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Context from '../context/Context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Basket = () => {
  const {data, setData} = useContext(Context);

  const RemovedHandler = index => {
    const update = [...data];
    update.splice(index, 1);
    setData(update);
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {data.length === 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#000',
            }}>
            장바구니가 비었습니다.
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View
              style={{
                margin: 10,
                flexDirection: 'row',
                borderBlockColor: 'pink',
                borderLeftColor: 'pink',
                borderRightColor: 'pink',
                borderWidth: 3,
                position: 'relative',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                }}
                onPress={() => {
                  RemovedHandler(index);
                }}>
                <Icon name={'remove-shopping-cart'} size={30} color={'pink'} />
              </TouchableOpacity>

              <Image
                source={item.imageSource}
                style={{width: 150, height: 100, borderRadius: 10}}
              />

              <View style={{height: 'auto', justifyContent: 'space-around'}}>
                <Text style={styles.font}>{item.title}</Text>
                <Text style={styles.font}>가격: {item.upPrice}</Text>
                <Text style={styles.font}>수량: {item.Count}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    color: 'black',
    fontWeight: '700',
  },
});

export default Basket;

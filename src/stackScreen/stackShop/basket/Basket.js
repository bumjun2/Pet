import React, {useContext, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Context from '../context/Context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import realm from '../../../realm/Realm';

const Basket = ({route}) => {
  const {on, setOn} = useContext(Context);

  const removeItemFromBasket = (item, index) => {
    realm.write(() => {
      const itemToDelete = realm
        .objects('Basket')
        .filtered('id == $0', item.id);
      realm.delete(itemToDelete);
    });

    setOn(prevOn => {
      return {
        ...prevOn,
        basket: prevOn.basket.filter((_, i) => i !== index),
      };
    });
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {on.basket.length === 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
            장바구니가 비었습니다.
          </Text>
        </View>
      ) : (
        <FlatList
          data={on.basket}
          renderItem={({item, index}) => (
            <View
              style={{
                margin: 10,
                marginTop: 20,
                flexDirection: 'row',
                borderColor: 'pink',
                borderWidth: 3,
                borderRadius: 10,
                position: 'relative',
              }}>
              <TouchableOpacity
                onPress={() => removeItemFromBasket(item, index)}
                style={{
                  position: 'absolute',
                  top: -18,
                  left: 5,
                }}>
                <View
                  style={{
                    width: 25,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'red'}}>삭제</Text>
                </View>
              </TouchableOpacity>

              <Image
                source={item.img}
                style={{width: 150, height: 100, borderRadius: 10}}
              />

              <View
                style={{
                  height: 'auto',
                  justifyContent: 'space-around',
                  width: 150,
                }}>
                <Text style={styles.font}>{item.titel}</Text>
                <Text style={styles.font}>가격: {item.price}</Text>
                <Text style={styles.font}>수량: {item.quantity}</Text>
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

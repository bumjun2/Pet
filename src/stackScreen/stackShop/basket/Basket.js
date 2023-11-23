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
import realm from '../../../realm/Realm';

const Basket = ({route}) => {
  const {on, setOn} = useContext(Context);
  console.log(on.basket);

  const removeItemFromBasket = (item, index) => {
    realm.write(() => {
      realm.delete(on.basket[index]);
      console.log(on.basket);
    });
    // 상태 업데이트
    setOn(prevOn => {
      return {
        ...prevOn,
        basket: prevOn.basket.filter((item, i) => i !== index),
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
                flexDirection: 'row',
                borderColor: 'pink',
                borderWidth: 3,
                borderRadius: 10,
                position: 'relative',
              }}>
              <TouchableOpacity
                onPress={() => removeItemFromBasket(item, index)}>
                <Text>삭제</Text>
              </TouchableOpacity>

              <Image
                source={item.img}
                style={{width: 150, height: 100, borderRadius: 10}}
              />

              <View style={{height: 'auto', justifyContent: 'space-around'}}>
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

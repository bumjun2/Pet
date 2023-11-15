import React, {useContext, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Context, {ContextConsumer} from '../context/Context';

const Goods = ({route, navigation}, props) => {
  const [Count, setCount] = useState(1);
  const {imageSource, title, price} = route.params;
  const [upPrice, setUpPrice] = useState(price);
  const {data, setData} = useContext(Context);

  const CountUpHandler = () => {
    setCount(Count + 1);
    setUpPrice(upPrice + price);
  };

  const CountDownHandler = () => {
    if (Count > 0) {
      setCount(Count - 1);
      setUpPrice(upPrice - price);
    }
  };
  const basket = () => {
    const newItem = {imageSource, title, upPrice, Count};
    setData([...data, newItem]);
    Alert.alert(title, '장바구니에 담겼습니다', [
      {
        text: '장바구니 보러가기',
        onPress: () => {
          navigation.navigate('Basket');
        },
      },
      {
        text: '닫기',
        style: 'cencel',
      },
    ]);
  };
  return (
    <View style={{position: 'relative', flex: 1}}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.price}>{upPrice}원</Text>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={CountUpHandler}>
              <Text style={styles.countButton}>⬆️</Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{Count}</Text>
            <TouchableOpacity
              onPress={() => CountDownHandler()}
              disabled={Count === 0}>
              <Text style={styles.countButton}>⬇️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 3,
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            basket();
          }}>
          <Text style={styles.buttonText}>장바구니 담기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>바로 구매하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 5,
    marginTop: 10,
    color: '#000',
  },
  price: {
    marginTop: 10,
    marginRight: 10,
    fontSize: 20,
    textAlign: 'right',
    fontWeight: '700',
    color: 'red',
  },
  button: {
    width: '45%',
    height: 40,
    borderWidth: 2,
    borderColor: 'pink',
    borderRadius: 20,
  },
  button2: {
    width: '45%',
    height: 40,
    backgroundColor: 'pink',
    borderRadius: 20,
  },
  buttonText: {
    marginTop: 8,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'pink',
  },
  buttonText2: {
    marginTop: 10,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  countText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    width: 30,
    textAlign: 'center',
  },
  countButton: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Goods;

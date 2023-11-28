import {DrawerToggleButton} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Payment = ({route}) => {
  const {imageSource, title, upPrice, item} = route.params;
  const [click, setClick] = useState(false);
  const click2 = !click;

  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <Text style={{marginTop: 10, fontSize: 20, fontWeight: '700'}}>
        상품 정보
      </Text>
      <Image source={imageSource || item.img || item.imageSource} />
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          marginBottom: 20,
          marginTop: 10,
        }}>
        {title || item.text || item.title}
      </Text>
      <Text>금액: {upPrice}</Text>
      <Text style={{marginTop: 10, fontSize: 15, fontWeight: '700'}}>
        결제 방법
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={click ? styles.boder2 : styles.boder}
          onPress={() => {
            setClick(true);
          }}>
          <Text style={styles.font}>카카오페이</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={click2 ? styles.boder2 : styles.boder}
          onPress={() => {
            setClick(false);
          }}>
          <Text style={styles.font}>무통장 입금</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginTop: 150}}
        onPress={() => {
          if (click) {
            Alert.alert('카카오 3333-090372758', '여기로 보내주세요 ~ ㅎㅎ');
          } else if (click2) {
            Alert.alert('국민은행 010-3713-2835', '여기로 보내주세요 ~ ㅎㅎ');
          }
        }}>
        <Text style={{fontSize: 20, color: 'skyblue', fontWeight: '700'}}>
          결제 완료
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boder: {
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '30%',
    height: 50,
    textAlign: 'center',
    paddingTop: 15,
  },
  boder2: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    width: '30%',
    height: 50,
    textAlign: 'center',
    paddingTop: 15,
  },
  font: {
    textAlign: 'center',
  },
});

export default Payment;

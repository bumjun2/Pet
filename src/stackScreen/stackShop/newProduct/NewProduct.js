import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import NewImageSet from './NewImageSet';

const data = [
  {
    key: '1',
    imageSource: require('../../../assets/FeedList/list1.jpeg'),
    title: '도그랑 개사료 진도골드 10kg(1+1)',
    price: 30000,
  },
  {
    key: '2',
    imageSource: require('../../../assets/Shower/list2.jpeg'),
    title: '페스룸 반려동물 릴렉스 샤워 2.0',
    price: 23500,
  },
  {
    key: '3',
    imageSource: require('../../../assets/Accessories/list3.jpeg'),
    title: '반려동물 앙증 앵두 니트 케이프',
    price: 4900,
  },
  {
    key: '4',
    imageSource: require('../../../assets/SnackList/list4.jpeg'),
    title: '굿데이 강아지간식 건강한 육포 300g',
    price: 11900,
  },
  {
    key: '5',
    imageSource: require('../../../assets/FeedList/list5.png'),
    title: '네츄럴코어 퍼피 에코5',
    price: 43500,
  },
];

const NewProduct = () => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{color: 'pink', fontWeight: '700', fontSize: 20, padding: 10}}>
          Hot 신상품
        </Text>
        <Text style={{padding: 15, color: '#000'}}>전체보기</Text>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <NewImageSet
              imageSource={item.imageSource}
              title={item.title}
              price={item.price}
            />
          )}
          horizontal={true}
          contentContainerStyle={{paddingEnd: 40}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 'auto',
  },
});

export default NewProduct;

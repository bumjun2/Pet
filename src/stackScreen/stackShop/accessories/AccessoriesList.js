import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Order from '../feed/Order';
import FeedListItem from '../feed/FeedListItem';

const data = [
  {
    key: '1',
    imageSource: require('../../../assets/Accessories/list1.jpeg'),
    title: '복자네일상 강아지머리핀 이쁜5종세트 악세서리 헤어핀 미간핀',
    price: 8900,
  },
  {
    key: '2',
    imageSource: require('../../../assets/Accessories/list2.jpeg'),
    title: '도그아이 애견용 모자 + 목도리 세트',
    price: 8490,
  },
  {
    key: '3',
    imageSource: require('../../../assets/Accessories/list3.jpeg'),
    title: '반려동물 앙증 앵두 니트 케이프',
    price: 4900,
  },
  {
    key: '4',
    imageSource: require('../../../assets/Accessories/list4.jpeg'),
    title: '도그아이 애견용 모자 + 목도리 세트',
    price: 8490,
  },
  {
    key: '5',
    imageSource: require('../../../assets/Accessories/list5.jpeg'),
    title: '도그아이 반려동물 썬캡',
    price: 10900,
  },
];

const AccessoriesList = ({navigation}) => {
  const [sortedData, setSortedData] = useState(data);

  const handleSort = option => {
    if (option === '랭킹순') {
      setSortedData([...data]);
    } else if (option === '낮은가격순') {
      const sorted = [...data].sort((a, b) => a.price - b.price);
      setSortedData(sorted);
    } else if (option === '높은가격순') {
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setSortedData(sorted);
    } else if (option === '판매량순') {
    }
  };
  return (
    <View style={styles.container}>
      <Order onSort={handleSort} />
      <FlatList
        data={sortedData}
        renderItem={({item}) => (
          <FeedListItem
            imageSource={item.imageSource}
            title={item.title}
            price={item.price}
            navigation={navigation}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
        keyExtractor={item => item.key}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AccessoriesList;

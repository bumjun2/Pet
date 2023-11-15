import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Order from '../feed/Order';
import FeedListItem from '../feed/FeedListItem';

const data = [
  {
    key: '1',
    imageSource: require('../../../assets/SnackList/list1.jpeg'),
    title: '굿데이 건강한육포 반려견간식 300g',
    price: 11500,
  },
  {
    key: '2',
    imageSource: require('../../../assets/SnackList/list2.jpeg'),
    title: '킵펫 말랑말랑 노즈워크 져키 강아지 간식 1kg',
    price: 12900,
  },
  {
    key: '3',
    imageSource: require('../../../assets/SnackList/list3.jpeg'),
    title: '페페로니 반려견간식 오메가3 져키 연어 180g + 소고기 180g',
    price: 11400,
  },
  {
    key: '4',
    imageSource: require('../../../assets/SnackList/list4.jpeg'),
    title: '굿데이 강아지간식 건강한 육포 300g',
    price: 11900,
  },
  {
    key: '5',
    imageSource: require('../../../assets/SnackList/list5.jpeg'),
    title: '펫더맨 마이도기 강아지 간식 300g',
    price: 15590,
  },
];

const SnackList = ({navigation}) => {
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

export default SnackList;

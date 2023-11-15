import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Order from '../feed/Order';
import FeedListItem from '../feed/FeedListItem';

const data = [
  {
    key: '1',
    imageSource: require('../../../assets/FeedList/list1.jpeg'),
    title: '딩동펫 반려동물 말랑 샴푸 브러쉬',
    price: 5500,
  },
  {
    key: '2',
    imageSource: require('../../../assets/Shower/list2.jpeg'),
    title: '페스룸 반려동물 릴렉스 샤워 2.0',
    price: 23500,
  },
  {
    key: '3',
    imageSource: require('../../../assets/Shower/list3.jpeg'),
    title: '딩동펫 반려견 베이직 접이식 욕조 중형',
    price: 17800,
  },
  {
    key: '4',
    imageSource: require('../../../assets/Shower/list4.jpeg'),
    title: '도그월드 강아지 고양이 샤워가운 4color',
    price: 9900,
  },
  {
    key: '5',
    imageSource: require('../../../assets/Shower/list5.jpeg'),
    title: '러브트리스 반려동물 접이식 욕조',
    price: 13900,
  },
];

const ShowerList = ({navigation}) => {
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

export default ShowerList;

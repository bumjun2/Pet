import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FeedListItem from './FeedListItem';
import {FlatList} from 'react-native-gesture-handler';
import Order from './Order';

const data = [
  {
    key: '1',
    imageSource: require('../../../assets/FeedList/list1.jpeg'),
    title: '도그랑 개사료 진도골드 10kg(1+1)',
    price: 30000,
  },
  {
    key: '2',
    imageSource: require('../../../assets/FeedList/list2.jpeg'),
    title: '탐사 6free 강아지 사료 연어 레시피',
    price: 29000,
  },
  {
    key: '3',
    imageSource: require('../../../assets/FeedList/list3.png'),
    title: '도그랑 클래식 전연령 사료 중소형',
    price: 36000,
  },
  {
    key: '4',
    imageSource: require('../../../assets/FeedList/list4.jpeg'),
    title: '로얄캐닌 어덜트 독 미니 인도어 (실내견용) 건식사료',
    price: 80800,
  },
  {
    key: '5',
    imageSource: require('../../../assets/FeedList/list5.png'),
    title: '네츄럴코어 퍼피 에코5 유기농 70% 작은입자 강아지사료',
    price: 43500,
  },
];

const FeedList = ({navigation, click}) => {
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
            click={click}
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

export default FeedList;

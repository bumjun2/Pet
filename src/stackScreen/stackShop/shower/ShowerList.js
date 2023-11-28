import React, {useContext, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Order from '../feed/Order';
import FeedListItem from '../feed/FeedListItem';
import Context from '../context/Context';

const ShowerList = ({navigation, data}) => {
  const [sortedData, setSortedData] = useState(data);
  const {shop, setShop} = useContext(Context);

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

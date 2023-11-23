import React, {useContext} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';
import Context from '../stackShop/context/Context';

const PetsImg = ({navigation}) => {
  const {off} = useContext(Context);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.imgs}
      onPress={() => {
        navigation.navigate('PetsPost', {post: item});
      }}>
      <Image
        source={{uri: item.img}}
        style={{borderRadius: 10, width: 100, height: 100}}
      />
    </TouchableOpacity>
  );
  const flatListData = [];

  for (let i = 0; i < off.length; i++) {
    for (let j = 0; j < off[i].post.length; j++) {
      flatListData.push(off[i].post[j]);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        nestedScrollEnabled={true}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgs: {
    margin: 10,
    borderRadius: 10,
    height: 100,
  },
});

export default PetsImg;

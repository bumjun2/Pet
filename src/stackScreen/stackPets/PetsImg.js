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

const width_proportion = '33%';

const PetsImg = ({navigation}) => {
  const {off} = useContext(Context);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.imgs}
      onPress={() => {
        navigation.navigate('PetsPost');
      }}>
      <Image
        source={{uri: item.img}}
        style={{borderRadius: 10, width: 100, height: 100}}
      />
    </TouchableOpacity>
  );

  const flatListData = off.flatMap(user => user.post);

  return (
    <View style={styles.container}>
      <FlatList data={flatListData[0]} renderItem={renderItem} horizontal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  imgs: {
    borderRadius: 10,
    width: width_proportion,
    height: 100,
  },
});

export default PetsImg;

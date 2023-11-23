import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

const SerachUserImg = ({user, navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{margin: 5}}
      onPress={() => {
        navigation.navigate('PetsPost', {post: item});
      }}>
      <Image
        source={{uri: item.img}}
        style={{borderRadius: 10, width: 100, height: 100}}
      />
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        data={user.post}
        renderItem={renderItem}
        numColumns={3}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default SerachUserImg;

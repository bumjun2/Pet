import React from 'react';
import {Text, View} from 'react-native';
import FeedList from './FeedList';

const Feed = ({navigation}) => {
  return (
    <View>
      <FeedList navigation={navigation} />
    </View>
  );
};

export default Feed;

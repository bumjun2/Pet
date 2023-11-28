import React from 'react';
import {Text, View} from 'react-native';
import FeedList from './FeedList';

const Feed = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <View>
      <FeedList navigation={navigation} data={data} />
    </View>
  );
};

export default Feed;

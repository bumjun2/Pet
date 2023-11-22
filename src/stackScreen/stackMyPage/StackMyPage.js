import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import User from './User';
import Follow from './Follow/Follow';
import Following from './Follow/Following';
import NewPost from './MyPost/NewPost';
import OldPost from './MyPost/OldPost';

const Stack = createStackNavigator();

const StackMyPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={User}
        options={{
          title: 'MyPage',
        }}
      />
      <Stack.Screen
        name="Follow"
        component={Follow}
        options={{
          title: '팔로워',
        }}
      />
      <Stack.Screen
        name="Following"
        component={Following}
        options={{
          title: '팔로잉',
        }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{
          title: '게시물 생성',
        }}
      />
      <Stack.Screen
        name="OldPost"
        component={OldPost}
        options={{
          title: '게시물',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackMyPage;

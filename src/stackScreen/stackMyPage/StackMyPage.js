import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import User from './User';
import Follow from './Follow/Follow';

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
        component={Follow}
        options={{
          title: '팔로잉',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackMyPage;

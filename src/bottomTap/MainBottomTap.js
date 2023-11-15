import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StackHome from '../stackScreen/stackHome/StackHome';
import StackPets from '../stackScreen/stackPets/StackPets';

import StackMyPage from '../stackScreen/stackMyPage/StackMyPage';
import StackShop from '../stackScreen/stackShop/StackShop';

const Tab = createMaterialBottomTabNavigator();
const MainBottomTap = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="pink">
      <Tab.Screen
        name="bottomHome"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="펫스"
        component={StackPets}
        options={{
          tabBarLabel: 'Pets',
          tabBarIcon: ({color}) => (
            <Icon name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="상점"
        component={StackShop}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({color}) => (
            <Icon name="shopping-basket" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="내 정보"
        component={StackMyPage}
        options={{
          tabBarLabel: 'MyPage',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTap;

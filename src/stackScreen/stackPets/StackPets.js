import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Pets from '../../bottomTap/bottomCompont/Pets';
import PetsPost from './Post/PetsPost';
import Post from './Post/Post';
import SearchUser from './SearchUser';

const Stack = createStackNavigator();

const StackPets = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pets"
        component={Pets}
        options={{
          headerShown: false,
          title: false,
        }}
      />

      <Stack.Screen
        name="PetsPost"
        component={Post}
        options={{
          title: 'Post',
        }}
      />

      <Stack.Screen
        name="SearchUser"
        component={SearchUser}
        options={{
          title: false,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackPets;

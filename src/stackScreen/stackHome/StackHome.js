import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../../bottomTap/bottomCompont/Home';

const Stack = createStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackHome;

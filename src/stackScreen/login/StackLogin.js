import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import LoginScreen from './Login';
import Sinup from './Sinup';
import NickName from './NickName';

const Stack = createStackNavigator();

const StackLogin = ({setLogin}) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Sinup"
        component={Sinup}
        options={{
          title: 'Sinup',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: 'Login',
          headerShown: false,
        }}>
        {props => <LoginScreen {...props} setLogin={setLogin} />}
      </Stack.Screen>

      <Stack.Screen
        name="NickName"
        component={NickName}
        options={{
          name: 'NickName',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackLogin;

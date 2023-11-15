import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Pets from '../bottomTap/bottomCompont/Pets';
import Home from '../bottomTap/bottomCompont/Home';

const Drawerr = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawerr.Navigator initialRouteName="Home">
      <Drawerr.Screen name="Home" component={Home} />
      <Drawerr.Screen name="Pets" component={Pets} />
    </Drawerr.Navigator>
  );
};

export default Drawer;

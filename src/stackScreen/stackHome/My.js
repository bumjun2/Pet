import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import Board from './board/Board';
import Context from '../stackShop/context/Context';

const My = () => {
  const {on} = useContext(Context);
  console.log(on.followers);
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 300,
        }}>
        <Board />
      </View>
      <View>
        <FlatList data={on.followers} />
      </View>
    </View>
  );
};

export default My;

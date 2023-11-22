import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Context from '../../stackShop/context/Context';
import realm from '../../../realm/Realm';

const UserFollow = ({navigation}) => {
  const {on} = useContext(Context);

  return (
    <View style={{marginTop: 40}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={styles.font}>팔로워</Text>
        <Text style={styles.font}>팔로잉</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Follow')}>
          <Text style={styles.font}>{on.following.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Following')}>
          <Text style={styles.font}>{on.followers.length}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default UserFollow;

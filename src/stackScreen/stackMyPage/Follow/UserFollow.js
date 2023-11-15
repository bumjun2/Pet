import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const UserFollow = ({navigation}) => {
  return (
    <View style={{flex: 1, marginTop: 40}}>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={styles.font}>팔로워</Text>
        <Text style={styles.font}>팔로잉</Text>
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Follow')}>
          <Text style={styles.font}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Following')}>
          <Text style={styles.font}>0</Text>
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

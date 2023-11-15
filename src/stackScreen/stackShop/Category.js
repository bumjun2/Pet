import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Category = ({navigation}) => {
  return (
    <View
      style={{
        flex: 0.3,
        marginTop: 10,
        borderRadius: 20,
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Feed', {});
          }}>
          <View style={styles.category}>
            <Text style={{fontSize: 40}}>🍚</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Snack');
          }}>
          <View style={styles.category}>
            <Text style={{fontSize: 40}}>🍭</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Accessories');
          }}>
          <View style={styles.category}>
            <Text style={{fontSize: 40}}>🎀</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Shower');
          }}>
          <View style={styles.category}>
            <Text style={{fontSize: 40}}>🛁</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={styles.categoryLabel}>사료</Text>
        <Text style={styles.categoryLabel}>간식</Text>
        <Text style={styles.categoryLabel}>악세사리</Text>
        <Text style={styles.categoryLabel}>샤워</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    marginTop: 10,
    marginBottom: 10,
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Category;

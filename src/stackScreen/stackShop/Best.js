import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FeedListItem from './feed/FeedListItem';

const Best = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = option => {
    setSelectedOption(option);
  };

  const isOptionSelected = option => {
    return option === selectedOption;
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        margin: 5,
      }}>
      <Text style={{color: 'pink', fontSize: 20, fontWeight: '700'}}>
        카테고리별 랭킹!
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
          backgroundColor: '#ccc',
          borderRadius: 50,
        }}>
        <TouchableOpacity onPress={() => handleOptionClick('사료')}>
          <Text
            style={[
              styles.text,
              isOptionSelected('사료') && styles.selectedText,
            ]}>
            사료
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionClick('간식')}>
          <Text
            style={[
              styles.text,
              isOptionSelected('간식') && styles.selectedText,
            ]}>
            간식
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionClick('악세사리')}>
          <Text
            style={[
              styles.text,
              isOptionSelected('악세사리') && styles.selectedText,
            ]}>
            악세사리
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionClick('샤워')}>
          <Text
            style={[
              styles.text,
              isOptionSelected('샤워') && styles.selectedText,
            ]}>
            샤워
          </Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    marginRight: 10,
    color: '#fff',
  },
  selectedText: {
    backgroundColor: 'pink',
    width: 100,
    borderRadius: 50,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
  },
});

export default Best;

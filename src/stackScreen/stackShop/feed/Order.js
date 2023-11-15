import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Order = ({onSort}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = option => {
    setSelectedOption(option);
    onSort(option);
  };

  const isOptionSelected = option => {
    return option === selectedOption;
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 20,
        height: 40,
        flexDirection: 'row',
        padding: 10,
      }}>
      <TouchableOpacity onPress={() => handleOptionClick('랭킹순')}>
        <Text
          style={[
            styles.text,
            isOptionSelected('랭킹순') && styles.selectedText,
          ]}>
          랭킹순
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionClick('낮은가격순')}>
        <Text
          style={[
            styles.text,
            isOptionSelected('낮은가격순') && styles.selectedText,
          ]}>
          낮은가격순
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionClick('높은가격순')}>
        <Text
          style={[
            styles.text,
            isOptionSelected('높은가격순') && styles.selectedText,
          ]}>
          높은가격순
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionClick('판매량순')}>
        <Text
          style={[
            styles.text,
            isOptionSelected('판매량순') && styles.selectedText,
          ]}>
          판매량순
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    marginRight: 10,
    color: 'black',
  },
  selectedText: {
    color: 'blue',
  },
});

export default Order;

import React, {useState} from 'react';
import {Image, StyleSheet, Text, Touchable, View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import FeedListItem from './feed/FeedListItem';

const Best = ({data, data2, data3, data4}) => {
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Text style={{color: 'pink', fontSize: 20, fontWeight: '700'}}>
          카테고리별 랭킹!
        </Text>

        <Text
          style={{position: 'absolute', right: 0}}
          onPress={() => {
            handleOptionClick(null);
          }}>
          내리기
        </Text>
      </View>
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
      {isOptionSelected('사료') ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.imageSource}
                  style={{width: 100, height: 100}}
                />
                <Text style={{marginLeft: 20, width: 150, fontWeight: '700'}}>
                  {item.title}
                </Text>
              </View>
            </View>
          )}
        />
      ) : isOptionSelected('간식') ? (
        <FlatList
          data={data4}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.imageSource}
                  style={{width: 100, height: 100}}
                />
                <Text style={{marginLeft: 20, width: 150, fontWeight: '700'}}>
                  {item.title}
                </Text>
              </View>
            </View>
          )}
        />
      ) : isOptionSelected('악세사리') ? (
        <FlatList
          data={data3}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.imageSource}
                  style={{width: 100, height: 100}}
                />
                <Text style={{marginLeft: 20, width: 150, fontWeight: '700'}}>
                  {item.title}
                </Text>
              </View>
            </View>
          )}
        />
      ) : isOptionSelected('샤워') ? (
        <FlatList
          data={data2}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.imageSource}
                  style={{width: 100, height: 100}}
                />
                <Text style={{marginLeft: 20, width: 150, fontWeight: '700'}}>
                  {item.title}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <View></View>
      )}
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

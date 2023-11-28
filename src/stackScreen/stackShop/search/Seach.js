import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import SerachView from './ SerachView';
import realm from '../../../realm/Realm';
import {ScrollView} from 'react-native-gesture-handler';

const Search = ({navigation, route}) => {
  const [text, setText] = useState('');

  const [ranking, setRanking] = useState([]);

  const {data, data2, data3, data4} = route.params;

  const filtered = [...data, ...data2, ...data3, ...data4].filter(item =>
    item.title.toLowerCase().includes(text.toLowerCase()),
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
        <Text style={{fontSize: 20, marginLeft: 10}}>⬅️</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={styles.input}
          placeholder="원하시는 제품을 검색하세요"
          onChangeText={setText}
        />
        <TouchableOpacity>
          <Text style={{marginLeft: 10}}>검색</Text>
        </TouchableOpacity>
      </View>
      {text === '' ? (
        <View>
          <Text style={styles.font}>많이 검색한 상품</Text>
          <FlatList
            data={realm
              .objects('SearchRanking')
              .sorted('count', true)
              .slice(0, 4)}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Goods', {
                    item,
                  });
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    margin: 10,
                    borderRadius: 20,
                    borderColor: 'black',
                    borderWidth: 1,
                    position: 'relative',
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      width: 50,
                      height: 50,
                      top: -15,
                      left: 5,
                    }}>
                    {index === 0 ? (
                      <Text style={{fontSize: 30}}>🥇</Text>
                    ) : index === 1 ? (
                      <Text style={{fontSize: 30}}>🥈</Text>
                    ) : index === 2 ? (
                      <Text style={{fontSize: 30}}>🥉</Text>
                    ) : (
                      <Text>{index + 1}위</Text>
                    )}
                  </View>
                  <Image source={item.img} style={styles.img} />
                  <Text>{item.text}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <FlatList
          data={filtered}
          renderItem={({item}) => (
            <SerachView item={item} navigation={navigation} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '85%',
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  font: {
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
});

export default Search;

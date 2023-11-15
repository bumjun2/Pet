import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PetsImg from '../../stackScreen/stackPets/PetsImg';
import {ScrollView} from 'react-native-gesture-handler';
import realm from '../../realm/Realm';
import Context from '../../stackScreen/stackShop/context/Context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Pets = ({navigation}) => {
  const [click, setClick] = useState(false);
  const [text, setText] = useState('');
  const [userNames, setUserNames] = useState([]);
  const {off} = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const names = [];

      for (let i = 0; i < off.length; i++) {
        if (off[i].id.startsWith(text)) {
          await realm.write(() => {
            const user = realm
              .objects('User')
              .filtered('id = $0', off[i].id)[0];
            if (user) {
              names.push({
                id: user.id,
                userImg: user.userImg,
              });
            }
          });
        }
      }
      setUserNames(names);
    };

    if (click && text !== '') {
      fetchData();
    }
  }, [click, text, off]);

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="🐶 이름을 입력하세요!!"
          style={click ? styles.searchInput : styles.input}
          onFocus={() => setClick(true)}
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity
          style={{
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 7,
          }}
          onPress={() => {
            setClick(false);
            setUserNames([]);
            setText('');
          }}>
          <Text>취소</Text>
        </TouchableOpacity>
      </View>
      {click ? (
        text === '' ? (
          <View></View>
        ) : (
          <ScrollView>
            {userNames.map((user, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  margin: 20,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: 'pink',
                  padding: 10,
                }}
                onPress={() => {
                  navigation.navigate('SearchUser', {
                    user,
                  });
                }}>
                {user.userImg === '' ? (
                  <Icon name="person" size={50} color={'black'} />
                ) : (
                  <Image
                    source={{uri: user.userImg}}
                    style={{width: 50, height: 50, borderRadius: 50}}
                  />
                )}

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 15, marginLeft: 20, fontWeight: '700'}}>
                    {user.id}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )
      ) : (
        <ScrollView>
          <PetsImg navigation={navigation} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 70,
  },
  input: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffff',
    height: 40,
  },
  searchInput: {
    borderRadius: 10,
    backgroundColor: '#ffff',
    width: '90%',
  },
});

export default Pets;

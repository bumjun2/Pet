import React, {useContext, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Context from '../../stackShop/context/Context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native-gesture-handler';
import ModalInput from '../../stackPets/Post/Modal/ModalInput';
import ModalTitle from '../../stackPets/Post/Modal/ModalTitle';
import ModalList from '../../stackPets/Post/Modal/ModalList';
import OnMadalList from './OnMadalList';
import realm from '../../../realm/Realm';

const OldPost = ({route}) => {
  const {on} = useContext(Context);
  const {post} = route.params;

  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  const ModalLists = newText => {
    setText(newText);
  };

  const handlerModalList = newText => {
    ModalLists(newText);
  };
  const commentHandler = () => {
    comment();
    realm.write(() => {
      post.comment = [
        ...post.comment,
        {
          nickName: on.nickName,
          userImg: on.userImg,
          comment: text,
        },
      ];
    });
  };
  const comment = () => {
    setText('');
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', height: '10%'}}>
        <Image
          source={{uri: on.userImg}}
          style={{width: 50, height: 50, borderRadius: 50, margin: 20}}
        />
        <Text style={{marginTop: 25}}>{on.nickName}</Text>
      </View>
      <Image
        source={{uri: post.img}}
        style={{width: '100%', height: '70%', marginTop: 20}}
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{marginTop: 10}}>
          <Icon name="thumb-up-alt" size={40} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 10, marginLeft: 10}}
          onPress={() => setModalVisible(true)}>
          <Icon name="messenger-outline" size={40} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10, marginLeft: 240}}>
          <Icon name="turned-in-not" size={40} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text>{post.title}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalTitle
              setModalVisible={setModalVisible}
              isModalVisible={isModalVisible}
            />
            <ModalInput
              handlerModalList={handlerModalList}
              commentHandler={commentHandler}
              text={text}
            />
            <FlatList
              data={post.comment}
              renderItem={({item}) => <OnMadalList item={item} />}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderBlockColor: 'black',
    borderWidth: 1,
    width: 300,
    height: 500,
  },
});

export default OldPost;

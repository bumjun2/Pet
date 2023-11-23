import React, {useContext, useState} from 'react';
import {FlatList, Modal, StyleSheet, View} from 'react-native';

import PetsPost from './PetsPost';

import ModalTitle from './Modal/ModalTitle';
import ModalInput from './Modal/ModalInput';
import ModalList from './Modal/ModalList';
import realm from '../../../realm/Realm';
import Context from '../../stackShop/context/Context';

const Post = ({route}) => {
  const {post} = route.params;
  const {on} = useContext(Context);

  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleModalToggle = () => {
    toggleModal();
  };
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
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <PetsPost onModalToggle={handleModalToggle} post={post} />
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
              renderItem={({item}) => <ModalList item={item} post={post} />}
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
export default Post;

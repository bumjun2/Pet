import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PostUser from './PostUser';
import PostRiew from './PostRiew';
import Context from '../../stackShop/context/Context';

const PetsPost = ({onModalToggle, post}) => {
  return (
    <View style={styles.continue}>
      <View style={styles.postUser}>
        <PostUser post={post} />
      </View>
      <View style={styles.imgSet}>
        <Image style={styles.img} source={{uri: post.img}} />
        <Text style={{margin: 10, fontWeight: '700'}}>{post.title}</Text>
      </View>
      <View style={styles.review}>
        <PostRiew onModalToggle={onModalToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    flex: 1,
  },
  imgSet: {
    marginTop: 10,
    height: '70%',
  },
  img: {
    borderRadius: 20,
    justifyContent: 'center',
    width: '100%',
    height: '90%',
  },
});

export default PetsPost;

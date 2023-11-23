import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PostUser = ({post}) => {
  return (
    <View style={styles.continue}>
      <Image style={styles.userImage} source={{uri: post.userImg}} />
      <Text style={styles.userName}>{post.nickName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    flexDirection: 'row',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'red',
    marginTop: 10,
    marginLeft: 20,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
  },
});

export default PostUser;

import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Context from '../stackShop/context/Context';
import realm from '../../realm/Realm';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SerachUserImg from './SerachUserImg';

const SearchUser = ({route, navigation}) => {
  const {user} = route.params;
  const {on, setOn, off} = useContext(Context);

  const isUserFollowing = user.following.some(item => item.id === on.id);
  const [isFollowing, setIsFollowing] = useState(isUserFollowing);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
    realm.write(() => {
      const currentUser = realm.objects('User').filtered('id = $0', on.id)[0];

      const existingFollower = realm
        .objects('Follower')
        .filtered('id = $0', user.id)[0];
      const existingFollowing = realm
        .objects('Following')
        .filtered('id = $0', on.id)[0];

      const isAlreadyFollowing =
        existingFollower && existingFollower.isFollowing;

      if (!isAlreadyFollowing) {
        if (!existingFollower) {
          realm.create('Follower', {
            id: user.id,
            img: user.userImg,
            isFollowing: true,
          });
        }

        const followersList = realm
          .objects('Follower')
          .filtered('id = $0', user.id)[0];
        on.followers = [...on.followers, followersList];

        const offUser = off.find(item => item.id === user.id);

        if (existingFollowing) {
          const isAlreadyFollowing = offUser.following.some(
            following => following.id === on.id,
          );
          if (!isAlreadyFollowing) {
            realm.create('Following', {
              id: on.id,
              img: on.userImg,
              isFollowing: true,
            });
            offUser.following = [
              ...offUser.following,
              {
                id: on.id,
                img: on.userImg,
                isFollowing: true,
              },
            ];
          }
        } else {
          realm.create('Following', {
            id: on.id,
            img: on.userImg,
            isFollowing: true,
          });
          offUser.following = [
            ...offUser.following,
            {
              id: on.id,
              img: on.userImg,
              isFollowing: true,
            },
          ];
        }
      } else {
        const userToDelete = realm
          .objects('Follower')
          .filtered('id=$0', user.id);
        realm.delete(userToDelete);

        const followersList = on.followers.filter(
          followerId => followerId !== user.id,
        );
        on.followers = followersList;

        const offUser = off.find(item => item.id === user.id);
        if (offUser) {
          const followingIndex = offUser.following.findIndex(
            following => following.id === on.id,
          );
          if (followingIndex !== -1) {
            realm.delete(offUser.following[followingIndex]);
            offUser.following.splice(followingIndex, 1);
          }
        }
        setIsFollowing(false);
      }
      setOn(currentUser);
    });
  };

  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: user.userImg}}
          style={{width: 100, height: 100, borderRadius: 50, marginTop: 40}}
        />
        <Text style={styles.font}>{user.id}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginTop: 20,
          }}>
          <Text style={styles.font}>팔로잉</Text>
          <Text style={styles.font}>팔로워</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <Text style={styles.font}>{user.following.length}</Text>
          <Text style={styles.font}>{user.followers.length}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: isFollowing
                ? FOLLOWING_COLOR
                : NOT_FOLLOWING_COLOR,
              width: 100,
              height: 30,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={toggleFollow}>
            <Text style={{color: isFollowing ? 'yellow' : '#fff'}}>
              {isFollowing ? '언팔로우' : '팔로우'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 30,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'pink'}}>메세지</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SerachUserImg user={user} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

const FOLLOWING_COLOR = 'pink';
const NOT_FOLLOWING_COLOR = 'blue';

export default SearchUser;

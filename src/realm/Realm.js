import Realm from 'realm';

class Follower extends Realm.Object {
  static schema = {
    name: 'Follower',
    properties: {
      id: 'string',
      img: 'string',
      isFollowing: 'bool',
    },
  };
}
class Following extends Realm.Object {
  static schema = {
    name: 'Following',
    properties: {
      id: 'string',
      img: 'string',
      isFollowing: 'bool',
    },
  };
}
class Post extends Realm.Object {
  static schema = {
    name: 'Post',
    properties: {
      id: 'int',
      img: 'string',
      nickName: 'string',
      title: 'string',
    },
  };
}

class User extends Realm.Object {
  static schema = {
    name: 'User',
    properties: {
      _id: 'int',
      id: 'string',
      password: 'string',
      address: 'string',
      username: 'string',
      nickName: 'string',
      userImg: 'string',
      followers: 'Follower[]',
      following: 'Following[]',
      post: 'Post[]',
    },
    primaryKey: 'id',
  };
}

// 동적으로 스키마를 관리
// realm.close();
const realm = new Realm({
  schema: [User, Follower, Following, Post],
  schemaVersion: 12,
});

// console.log('Realm Path:', realm.path);

const users = realm.objects('User');
// console.log(users);

// 데이터 삭제 트랜잭션
// realm.write(() => {
//   realm.deleteAll();
//   console.log(users);
// });

export default realm;

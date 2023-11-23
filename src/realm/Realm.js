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
      userImg: 'string',
      comment: 'Comment[]',
    },
  };
}

class Comment extends Realm.Object {
  static schema = {
    name: 'Comment',
    properties: {
      nickName: 'string',
      userImg: 'string',
      comment: 'string',
    },
  };
}

class Basket extends Realm.Object {
  static schema = {
    name: 'Basket',
    properties: {
      id: 'int',
      img: 'int',
      titel: 'string',
      price: 'int',
      quantity: 'int',
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
      basket: 'Basket[]',
    },
    primaryKey: 'id',
  };
}

// 동적으로 스키마를 관리
// realm.close();
const realm = new Realm({
  schema: [User, Follower, Following, Post, Comment, Basket],
  schemaVersion: 22,
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

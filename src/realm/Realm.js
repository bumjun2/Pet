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
      userImg: 'string?',
      followers: 'Follower[]',
      following: 'Following[]',
      post: 'Post[]',
      basket: 'Basket[]',
    },
    primaryKey: 'id',
  };
}

class SearchRanking extends Realm.Object {
  static schema = {
    name: 'SearchRanking',
    properties: {
      text: 'string',
      count: 'int',
      img: 'int',
      price: 'int',
    },
  };
}

class Marker extends Realm.Object {
  static schema = {
    name: 'Marker',
    properties: {
      id: 'string',
      maker: 'string',
      nickName: 'string',
      img: 'string',
      comment: 'string',
    },
  };
}

// 동적으로 스키마를 관리
// realm.close();
const realm = new Realm({
  schema: [
    User,
    Follower,
    Following,
    Post,
    Comment,
    Basket,
    SearchRanking,
    Marker,
  ],
  schemaVersion: 41,
});

// console.log('Realm Path:', realm.path);

const users = realm.objects('User');

// console.log(users);

// realm.write(() => {
//   realm.deleteAll('SearchRanking');
// });

// 데이터 삭제 트랜잭션
// realm.write(() => {
//   realm.deleteAll();
//   console.log(users);
// });

export default realm;

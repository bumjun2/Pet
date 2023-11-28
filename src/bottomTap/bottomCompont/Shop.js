import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Advertisement from '../../stackScreen/stackShop/Advertisement';
import Category from '../../stackScreen/stackShop/Category';
import NewProduct from '../../stackScreen/stackShop/newProduct/NewProduct';
import Best from '../../stackScreen/stackShop/Best';

const data = [
  {
    key: '1',
    imageSource: require('../../Assets/FeedList/list1.jpeg'),
    title: '도그랑 개사료 진도골드 10kg(1+1)',
    price: 30000,
  },
  {
    key: '2',
    imageSource: require('../../Assets/FeedList/list2.jpeg'),
    title: '탐사 6free 강아지 사료 연어 레시피',
    price: 29000,
  },
  {
    key: '3',
    imageSource: require('../../Assets/FeedList/list3.png'),
    title: '도그랑 클래식 전연령 사료 중소형',
    price: 36000,
  },
  {
    key: '4',
    imageSource: require('../../Assets/FeedList/list4.jpeg'),
    title: '로얄캐닌 어덜트 독 미니 인도어 건식사료',
    price: 80800,
  },
  {
    key: '5',
    imageSource: require('../../Assets/FeedList/list5.png'),
    title: '네츄럴코어 퍼피 에코5 유기농 강아지사료',
    price: 43500,
  },
];
const data2 = [
  {
    key: '1',
    imageSource: require('../../Assets/Shower/list1.jpeg'),
    title: '딩동펫 반려동물 말랑 샴푸 브러쉬',
    price: 5500,
  },
  {
    key: '2',
    imageSource: require('../../Assets/Shower/list2.jpeg'),
    title: '페스룸 반려동물 릴렉스 샤워 2.0',
    price: 23500,
  },
  {
    key: '3',
    imageSource: require('../../Assets/Shower/list3.jpeg'),
    title: '딩동펫 반려견 베이직 접이식 욕조 중형',
    price: 17800,
  },
  {
    key: '4',
    imageSource: require('../../Assets/Shower/list4.jpeg'),
    title: '도그월드 강아지 고양이 샤워가운 4color',
    price: 9900,
  },
  {
    key: '5',
    imageSource: require('../../Assets/Shower/list5.jpeg'),
    title: '러브트리스 반려동물 접이식 욕조',
    price: 13900,
  },
];

const data3 = [
  {
    key: '1',
    imageSource: require('../../Assets/Accessories/list1.jpeg'),
    title: '복자네일상 강아지머리핀 이쁜5종세트',
    price: 8900,
  },
  {
    key: '2',
    imageSource: require('../../Assets/Accessories/list2.jpeg'),
    title: '도그아이 애견용 목도리 세트',
    price: 8490,
  },
  {
    key: '3',
    imageSource: require('../../Assets/Accessories/list3.jpeg'),
    title: '반려동물 앙증 앵두 니트 케이프',
    price: 4900,
  },
  {
    key: '4',
    imageSource: require('../../Assets/Accessories/list4.jpeg'),
    title: '도그아이 애견용 모자 세트',
    price: 8490,
  },
  {
    key: '5',
    imageSource: require('../../Assets/Accessories/list5.jpeg'),
    title: '도그아이 반려동물 썬캡',
    price: 10900,
  },
];

const data4 = [
  {
    key: '1',
    imageSource: require('../../Assets/SnackList/list1.jpeg'),
    title: '굿데이 건강한육포 반려견간식 300g',
    price: 11500,
  },
  {
    key: '2',
    imageSource: require('../../Assets/SnackList/list2.jpeg'),
    title: '킵펫 노즈워크 져키 강아지 간식 1kg',
    price: 12900,
  },
  {
    key: '3',
    imageSource: require('../../Assets/SnackList/list3.jpeg'),
    title: '페페로니 연어 180g + 소고기 180g',
    price: 11400,
  },
  {
    key: '4',
    imageSource: require('../../Assets/SnackList/list4.jpeg'),
    title: '굿데이 강아지간식 건강한 육포 300g',
    price: 11900,
  },
  {
    key: '5',
    imageSource: require('../../Assets/SnackList/list5.jpeg'),
    title: '펫더맨 마이도기 강아지 간식 300g',
    price: 15590,
  },
];

const Shop = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Advertisement
            navigation={navigation}
            data={data}
            data2={data2}
            data3={data3}
            data4={data4}
          />
        </View>
        <Category
          navigation={navigation}
          data={data}
          data2={data2}
          data3={data3}
          data4={data4}
        />
        <NewProduct />
      </ScrollView>

      <View>
        <Best data={data} data2={data2} data3={data3} data4={data4} />
      </View>
    </View>
  );
};

export default Shop;

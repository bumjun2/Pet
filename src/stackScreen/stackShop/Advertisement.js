import React, {useContext, useState} from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Badge} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Context from './context/Context';

const Advertisement = ({navigation, data, data2, data3, data4}) => {
  const [hover, setHover] = useState(false);
  const {on} = useContext(Context);

  const images = [
    require('../../Assets/re/1.png'),
    require('../../Assets/re/2.png'),
    require('../../Assets/re/3.png'),
  ];

  const handleMouse = () => {
    setHover(!hover);
  };

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() =>
            navigation.navigate('Search', {
              data,
              data2,
              data3,
              data4,
            })
          }>
          <Icon name="search" size={30} color={'black'} />
        </TouchableOpacity>
        <View style={{margin: 10, position: 'relative'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
            <Icon name="shopping-basket" size={30} color={'black'} />
            {on.basket.length === 0 ? null : (
              <Badge
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  backgroundColor: 'pink',
                }}>
                {on.basket.length}
              </Badge>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleMouse}>
        <View style={styles.container}>
          <Swiper autoplay autoplayTimeout={2.5}>
            {images.map((image, index) => (
              <View style={styles.slide} key={index}>
                <Image source={image} style={styles.image} />
              </View>
            ))}
          </Swiper>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Advertisement;

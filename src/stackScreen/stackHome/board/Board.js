import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Context from '../../stackShop/context/Context';
import realm from '../../../realm/Realm';

const Board = () => {
  const {on} = useContext(Context);
  const [text, setText] = useState('');

  const [mapRegion, setMapRegion] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // 초기 지도 화면 설정
    if (on.address) {
      fetchAddressCoordinates(on.address);
    }
  }, [on]);

  const fetchAddressCoordinates = async address => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address,
        )}&key=AIzaSyCFtBCNXMabUlQ38J_Nhlck3gXtFo8kQ78`,
      );

      const data = await response.json();
      if (data.results.length > 0) {
        const {location} = data.results[0].geometry;

        // 초기 지도 화면 및 마커 설정
        setMapRegion({
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });

        // 모든 회원의 마커 표시
        const allMarkers = await getAllMarkers();
        // null이 아닌 마커만 설정
        setMarkers(allMarkers.filter(marker => marker !== null));
      } else {
        console.log('주소를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('에러 발생: ', error);
    }
  };

  const getAllMarkers = async () => {
    const markerObjects = realm.objects('Marker');
    const markerPromises = markerObjects.map(async marker => {
      const markerLocation = marker.maker;
      const markerResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          markerLocation,
        )}&key=AIzaSyCFtBCNXMabUlQ38J_Nhlck3gXtFo8kQ78`,
      );
      console.log(marker.nickName);
      const markerData = await markerResponse.json();
      if (markerData.results.length > 0) {
        const {location} = markerData.results[0].geometry;
        return {
          latitude: location.lat,
          longitude: location.lng,
          nickName: marker.nickName,
          comment: marker.comment,
          img: marker.img,
        };
      } else {
        console.log(`마커 주소를 찾을 수 없습니다: ${markerLocation}`);
        return null;
      }
    });

    return Promise.all(markerPromises);
  };

  const handleSearch = () => {
    if (text) {
      fetchAddressCoordinates(text);
    }
  };

  const handleMapRegionChange = region => {};

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TextInput
          placeholder="주소를 입력하세요"
          style={{width: '85%'}}
          value={text}
          onChangeText={setText}
        />
        <Text onPress={handleSearch}> 검색 </Text>
      </View>
      {mapRegion && (
        <MapView
          style={{flex: 1}}
          region={mapRegion}
          onRegionChangeComplete={handleMapRegionChange}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
              title={marker.nickName}
              description={marker.comment}>
              {marker.img ? (
                <Image
                  source={{uri: marker.img}}
                  style={{width: 30, height: 30}}
                />
              ) : null}
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
};

export default Board;

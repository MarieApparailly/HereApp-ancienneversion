import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import UsersListScreen from './UsersListScreen';

const UsersMapScreen = ({navigation}) => {
  const list = () => {
    return <UsersListScreen />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          list();
        }}
      />
      <View style={[{flex: 3}, styles.container]}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 44.83476,
            longitude: -0.573644,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 44.8059307,
              longitude: -0.5996017,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Vous êtes ici'}
            //description={'This is a description of the marker'}
          />
          <Marker
            pinColor={'#772372'}
            draggable
            coordinate={{
              latitude: 44.83476,
              longitude: -0.573644,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Marie Apparailly'}
            description={'0626221915'}
          />
          <Marker
            pinColor={'#242333'}
            draggable
            coordinate={{
              latitude: 44.82476,
              longitude: -0.583644,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Tiphaine Petit'}
            description={'0745887110'}
          />
          <Marker
            image={{
              uri: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Image.png',
            }}
            draggable
            coordinate={{
              latitude: 44.83076,
              longitude: -0.595644,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Joseph Beasse'}
            description={'0624785022'}
          />
          <Marker
            pinColor={'#347139'}
            draggable
            coordinate={{
              latitude: 44.82876,
              longitude: -0.585644,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Mathys Traversier'}
            description={'0784556120'}
          />
          <Marker
            pinColor={'#746855'}
            draggable
            coordinate={{
              latitude: 44.80476,
              longitude: -0.583644,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Clémence Monnier'}
            description={'0678900043'}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};
export default UsersMapScreen;

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  switchList: {
    flexDirection: 'row-reverse',
    position: 'absolute',
    top: 100,
    left: 30,
  },
});

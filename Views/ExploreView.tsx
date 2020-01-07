import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { SearchBar } from './Searchbar'
import ButtonSlider from './ButtonSlider'
import { SearchTypes } from './MainView'
import MapboxGL, { SymbolLayerStyle } from '@react-native-mapbox-gl/maps'
import { Icon } from 'react-native-elements'
import RestaurantIcon from "../assets/images/RestaurantsMapImage.png";
import BarsIcon from "../assets/images/BarMapImage.png";
import ClubsIcon from "../assets/images/ClubsMapImage.png";
import EventsIcon from "../assets/images/EventsMapImage.png";
import firebase, { firestore } from 'firebase'
import 'firebase/firestore'
import { EventDAO, createEventDAO } from '../entities'
import Drawer from 'react-native-advance-draggable-view'
import { NearPlacesList } from './common/NearPlacesList'
import { AppState } from '../redux/store'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import { calcDistance, toRadians } from './HelperFunctions'
import { DragUpView } from './common/DragUpView'
import { setPlaceAction } from '../redux/placeReducer'
console.disableYellowBox = true;
MapboxGL.setAccessToken("pk.eyJ1IjoiZmliczcwMDAiLCJhIjoiY2p4MXplcGExMDE0bDQ0cXFuOXVnM2dlZSJ9.D0HbtL6Bbvd77XRzD-QmlQ");


const START = [15.4192276, 47.0631052];
const ICONS = [15.4192276, 47.0631052];

const iconStyle: SymbolLayerStyle = {
  iconImage: ['get', 'icon'],

  iconSize: 0.8,
};

type FeatureType = {
  type: 'Feature',
  id: string,
  properties: {
    icon: string
  },
  geometry: {
    type: 'Point',
    coordinates: [number, number]
  }
}

function createFeature(id: string, icon: string, coordinates: [number, number]): FeatureType {
  return {
    type: "Feature",
    id,
    properties: {
      icon
    },
    geometry: {
      coordinates,
      type: "Point"
    }
  }
}

var icons = {
  Events: EventsIcon,
  Bars: BarsIcon,
  Restaurants: RestaurantIcon,
  Clubs: ClubsIcon
}

// var icons = {};

// var promises: Promise<{ source: any, title: string }>[] = [];

// for (const item of SearchTypes) {
//   promises.push(item.iconType.getImageSource(item.type, 80, 'black').then(v => ({ source: v, title: item.title })));
// }
// Promise.all(promises).then(v => v.forEach(x => icons[x.title] = x.source));


const mapStateToProps = (state: AppState) => ({
  place: state.place
})

const mapDispatchToProps = {
  setPlace: setPlaceAction
}
type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const enhance = connect(mapStateToProps, mapDispatchToProps);


const ExploreView = ({ navigation, place, setPlace }: props) => {


  const location = [place.location.lon || START[0], place.location.lat || START[1]]

  const db = firebase.firestore().collection('events');
  const [search, updateSearch] = useState(""); //TODO: implement
  const [zoomLevel, setZoomLevel] = useState(14);
  const [lat, setLat] = useState(15.4192276);
  const [lon, setLon] = useState(47.0631052);
  const [diameeter, setDiameeter] = useState(0);
  const [filter, setFilter] = useState(SearchTypes.map(v => ({ title: v.title, selected: false })));
  const [lastQuery, setLastQuery] = useState(null);

  const [points1, setPoints1] = useState<FeatureType[]>([]);
  const featureCollection1 = {
    type: 'FeatureCollection',
    features: points1
  };
  const [points2, setPoints2] = useState<FeatureType[]>([]);
  const featureCollection2 = {
    type: 'FeatureCollection',
    features: points2
  };
  const [points3, setPoints3] = useState<FeatureType[]>([]);
  const featureCollection3 = {
    type: 'FeatureCollection',
    features: points3
  };
  const [points4, setPoints4] = useState<FeatureType[]>([]);
  const featureCollection4 = {
    type: 'FeatureCollection',
    features: points4
  };

  const [nearPlaces, setNearPlaces] = useState<EventDAO[]>([]);


  const map: React.MutableRefObject<MapboxGL.MapView> = useRef(null);
  const camera: React.MutableRefObject<MapboxGL.Camera> = useRef(null);

  const onRegionDidChange = async () => {
    if (!map.current) return;
    const center = await map.current.getCenter();
    const zoom = await map.current.getZoom();
    const visibleBounds = (await map.current.getVisibleBounds()) as any as number[][];
    setLat(center[1]);
    setLon(center[0]);
    setZoomLevel(zoom);
    const [[lon1, lat1], [lon2, lat2]] = visibleBounds;
    const dist = calcDistance(lon1, lat1, lon2, lat2)
    setDiameeter(dist); 
    await getFirebaseData();
    if(place.name) return;
    const p = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${center[1]}, ${center[0]}&key=AIzaSyBiKgVaBRi8e_5tca-RwD-D0li8_Yt2Pc8`)
    const data = await (await p).json();

    if (data.results && data.results.length > 0) {
      var city = data.results[0].address_components.filter(a=> a.types.some(x=> x == "administrative_area_level_2"))[0].long_name;
      
      const center = await map.current.getCenter();
      setPlace({location: { lat: center[1], lon: center[0]}, name: city});
    }
  }

  const getFirebaseData = async (fv = null) => {
    const [[lon1, lat1], [lon2, lat2]] = (await map.current.getVisibleBounds()) as any as number[][]
    if (!fv && lastQuery) {
      const [[fblon1, fblat1], [fblon2, fblat2]] = lastQuery;
      if (lat1 <= fblat1 && lon1 <= fblon1 && lat2 >= fblat2 && lon2 >= fblon2) return;
      const maxDiff = 0.1 / zoomLevel;
      const borderDiffs = [
        Math.abs(lat1 - fblat1),
        Math.abs(lat2 - fblat2),
        Math.abs(lon1 - fblon1),
        Math.abs(lon2 - fblon2)
      ];

      if (borderDiffs.every(v => v < maxDiff)) return;
    }
    setLastQuery([[lon1, lat1], [lon2, lat2]]);
    const ne = new firebase.firestore.GeoPoint(lat1, lon1);
    const sw = new firebase.firestore.GeoPoint(lat2, lon2);
    var query = db.where('geo', '>=', sw).where('geo', '<=', ne);
    if ((fv || filter).some(v => v.selected)) {
      const f = (fv || filter).filter(v => v.selected).map(v => v.title);
      query = query.where('type', 'in', f);
    }
    const sn = await query.get();
    setNearPlaces(sn.docs.map(d => ({ ...d.data(), id: d.id } as EventDAO)))
    const features = sn.docs.map((e): FeatureType => createFeature(e.id, e.get('type'), [e.get('geo').longitude, e.get('geo').latitude]));
    // ;
    setPoints1(features.filter(v => v.properties.icon == SearchTypes[0].title));
    setPoints2(features.filter(v => v.properties.icon == SearchTypes[1].title));
    setPoints3(features.filter(v => v.properties.icon == SearchTypes[2].title));
    setPoints4(features.filter(v => v.properties.icon == SearchTypes[3].title));
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ButtonSlider data={SearchTypes} onChange={(v, i) => {
        var filterval = [...filter];
        filterval[i] = { ...filter[i], selected: v };
        setFilter(filterval);
        getFirebaseData(filterval);
      }} height={100} //TODO:IMPLEMENT
      />
      <DragUpView Draggable={
        <View style={{ backgroundColor: 'transparent', transform: [{ translateY: -28 }] }}>
          <View style={{ backgroundColor: "#fffe", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <View style={{ width: 80, height: 8, borderRadius: 5, backgroundColor: "#aaa", alignSelf: "center", margin: 10 }} />
          </View>
          <View style={{ padding: 15, backgroundColor: "white" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}  >{place.name}</Text>
            <Text style={{ fontSize: 15 }}>Found
            <Text style={{ fontWeight: "bold" }}> {nearPlaces.length} places</Text>
              {" near "}
              <Text style={{ fontWeight: "bold" }}>{place.name}</Text></Text>
          </View>
          <View style={{ flex: 1 }}>
            <NearPlacesList navigation={navigation} onPressItem={(event) => null}//TODO:IMPL
              events={nearPlaces.map(e => ({ ...e, distance: calcDistance(location[1], location[0], e.geo.latitude, e.geo.longitude) }))
                .sort((a, b) => a.distance - b.distance)} />
          </View>
        </View>}
        headerHeight={100}>
        <MapboxGL.MapView ref={map} style={{ flex: 1 }} onRegionDidChange={onRegionDidChange}  >
          <MapboxGL.Camera ref={camera} key={1} zoomLevel={14} minZoomLevel={10} centerCoordinate={START} animationDuration={0} />
          <MapboxGL.Images images={icons} />
          <MapboxGL.ShapeSource id="sc1" shape={featureCollection1} cluster={false}>
            <MapboxGL.SymbolLayer id="sl1" style={iconStyle} />
          </MapboxGL.ShapeSource>
          <MapboxGL.ShapeSource id="sc2" shape={featureCollection2} cluster={false}>
            <MapboxGL.SymbolLayer id="sl2" style={iconStyle} />
          </MapboxGL.ShapeSource>
          <MapboxGL.ShapeSource id="sc3" shape={featureCollection3} cluster={false}>
            <MapboxGL.SymbolLayer id="sl3" style={iconStyle} />
          </MapboxGL.ShapeSource>
          <MapboxGL.ShapeSource id="sc4" shape={featureCollection4} cluster={false}>
            <MapboxGL.SymbolLayer id="sl4" style={iconStyle} />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </DragUpView>
      <SearchBar setPlace={(p)=>{
        camera.current.flyTo([p.location.lon, p.location.lat], 1000); setPlace(p)}} place={place} ></SearchBar>
    </View>
  )
}

export default enhance(ExploreView)

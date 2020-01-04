import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import Searchbar from './Searchbar'
import ButtonSlider from './ButtonSlider'
import { SearchTypes } from './MainView'
import MapboxGL, { SymbolLayerStyle } from '@react-native-mapbox-gl/maps'
import { Icon } from 'react-native-elements'
import TestIcon from "../assets/images/-icons---3-contact.png";
import firebase from 'firebase'
import 'firebase/firestore'
// const Types = SearchTypes.map(v=> v.title);
// [[47.07075209, 15.46578839],
// [47.08634322, 15.38421093],
// [47.08153777, 15.43549997],
// [47.04397546, 15.40551375],
// [47.0741651, 15.4943256],
// [47.09154882, 15.43315509],
// [47.08238386, 15.40669488],
// [47.10137763, 15.42536707],
// [47.08829, 15.46509843],
// [47.05862608, 15.43295286],
// [47.05193507, 15.47573326],
// [47.09768414, 15.44009911],
// [47.06093671, 15.4806011],
// [47.05341515, 15.42916201],
// [47.05237505, 15.48807235],
// [47.08071943, 15.49736888],
// [47.06290238, 15.49274481],
// [47.06145043, 15.4871527],
// [47.05581686, 15.41119901],
// [47.0378862, 15.40725835],
// [47.05473936, 15.42254011],
// [47.0695828, 15.37939805],
// [47.09873366, 15.42527786],
// [47.04910381, 15.40011043],
// [47.04842904, 15.47022224],
// [47.05448444, 15.44564028],
// [47.07135638, 15.46022236],
// [47.10066678, 15.39930187],
// [47.09522774, 15.45547109],
// [47.08960718, 15.46892984],
// [47.05143764, 15.39639563],
// [47.11159157, 15.46450535],
// [47.03243243, 15.46478825],
// [47.10539399, 15.40909041],
// [47.07113512, 15.46109887],
// [47.07418362, 15.39664771],
// [47.03728414, 15.42067641],
// [47.10257373, 15.48067347],
// [47.05699763, 15.48998783],
// [47.09852317, 15.42667022],
// [47.11081792, 15.42284424],
// [47.03254867, 15.43832291],
// [47.06948839, 15.47603607],
// [47.09341799, 15.39911315],
// [47.09691166, 15.39677218],
// [47.04354991, 15.44674905],
// [47.0769489, 15.47000889],
// [47.05083088, 15.39371961],
// [47.03379634, 15.44560608],
// [47.05386554, 15.40006976],
// [47.03560998, 15.41060298],
// [47.04212215, 15.43073449],
// [47.09565704, 15.4610487],
// [47.032339, 15.42660721],
// [47.05022928, 15.47626578],
// [47.10437611, 15.45235948],
// [47.07146898, 15.43389648],
// [47.07410656, 15.39234947],
// [47.04327954, 15.39020968],
// [47.09883979, 15.49077774],
// [47.07082531, 15.46420277],
// [47.03741011, 15.41270643],
// [47.05098705, 15.44725332],
// [47.06278521, 15.43241053],
// [47.05797776, 15.4838929],
// [47.08775187, 15.48543362],
// [47.09356267, 15.48543636],
// [47.04946804, 15.48125167],
// [47.06893942, 15.38302992],
// [47.08935268, 15.37843282],
// [47.08202735, 15.41156609],
// [47.11607668, 15.41933371],
// [47.0532051, 15.46760336],
// [47.10752178, 15.4632876],
// [47.0346776, 15.4655618],
// [47.0644429, 15.48357772],
// [47.03786906, 15.40050544],
// [47.03874823, 15.43072366],
// [47.04112906, 15.47549928],
// [47.03316547, 15.45873037],
// [47.07710126, 15.37997854],
// [47.03273063, 15.43655573],
// [47.06541263, 15.43522543],
// [47.10818224, 15.41812437],
// [47.10157034, 15.45632568],
// [47.09905631, 15.40827503],
// [47.06700908, 15.46939384],
// [47.09734158, 15.47608273],
// [47.06417059, 15.41718004],
// [47.07344195, 15.38279345],
// [47.10779034, 15.44431339],
// [47.07981709, 15.43794017],
// [47.04592235, 15.45275202],
// [47.11052065, 15.45724418],
// [47.05877202, 15.47404972],
// [47.11539152, 15.44639392],
// [47.10360535, 15.42666597],
// [47.11338342, 15.43445591],
// [47.10817136, 15.40479118],
// [47.07447431, 15.39678772],
// ].map(v=> ({type: Types[Math.floor(Math.random()*4)%4], geo: new firebase.firestore.GeoPoint(v[0], v[1])}))
// .map(v=> firebase.firestore().collection('events').add(v));
MapboxGL.setAccessToken("pk.eyJ1IjoiZmliczcwMDAiLCJhIjoiY2p4MXplcGExMDE0bDQ0cXFuOXVnM2dlZSJ9.D0HbtL6Bbvd77XRzD-QmlQ");

const toRadians = (val: number) => val * Math.PI / 180;

function calcDistance(lat1, lon1, lat2, lon2) {

  var R = 6371e3; // metres
  var φ1 = toRadians(lat1);
  var φ2 = toRadians(lat2);
  var Δφ = toRadians(lat2 - lat1);
  var Δλ = toRadians(lon2 - lon1);

  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var d = R * c;
  return d;
}

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
//test7
var icons = {};

var promises: Promise<{ source: any, title: string }>[] = [];

for (const item of SearchTypes) {
  promises.push(item.iconType.getImageSource(item.type, 80, 'black').then(v => ({ source: v, title: item.title })));
}
Promise.all(promises).then(v => v.forEach(x => icons[x.title] = x.source));

const ExploreView = () => {
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
  }

  const getFirebaseData = async (fv = null) => {
    const [[lon1, lat1], [lon2, lat2]] = (await map.current.getVisibleBounds()) as any as number[][]
    if (lastQuery) {
      const [[fblon1, fblat1], [fblon2, fblat2]] = lastQuery;
      if (lat1 <= fblat1 && lon1 <= fblon1 && lat2 >= fblat2 && lon2 >= fblon2) return;
    }
    setLastQuery([[lon1, lat1], [lon2, lat2]]);
    const ne = new firebase.firestore.GeoPoint(lat1, lon1);
    const sw = new firebase.firestore.GeoPoint(lat2, lon2);
    var query = db.where('geo', '>=', sw).where('geo', '<=', ne);
    if ((fv || filter).some(v => v.selected)) {
      const f = (fv || filter).filter(v => v.selected).map(v => v.title);
      console.log(f);
      query = query.where('type', 'in', f);
    }
    const sn = await query.get();
    const features = sn.docs.map((e): FeatureType => ({
      id: e.id, geometry: {
        coordinates: [e.get('geo').longitude, e.get('geo').latitude],
        type: "Point"
      }, properties: { icon: e.get('type') }, type: "Feature"
    }));
    // console.log(features);
    setPoints1(features.filter(v=> v.properties.icon == SearchTypes[0].title));
    setPoints2(features.filter(v=> v.properties.icon == SearchTypes[1].title));
    setPoints3(features.filter(v=> v.properties.icon == SearchTypes[2].title));
    setPoints4(features.filter(v=> v.properties.icon == SearchTypes[3].title));
  }
  return (
    <View>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Searchbar value={search} updateSearch={updateSearch}></Searchbar>
      <ButtonSlider data={SearchTypes} onChange={(v, i) => {
        var filterval = [...filter];
        filterval[i] = { ...filter[i], selected: v };
        setFilter(filterval);
        getFirebaseData(filterval);
      }} height={100} //TODO:IMPLEMENT
      />
      <View style={{ height: "100%", width: "100%", backgroundColor: "#f00" }}>
        <MapboxGL.MapView ref={map} style={{ flex: 1 }} onRegionDidChange={onRegionDidChange}  >
          <MapboxGL.Camera ref={camera} key={1} zoomLevel={12} minZoomLevel={10} centerCoordinate={START} />
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
      </View>
    </View>
  )
}

export default ExploreView

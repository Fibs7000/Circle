import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Welcome2 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <LinearGradient
        start={{
          x: 0.5,
          y: 0,
        }}
        end={{
          x: 0.5,
          y: 1.28,
        }}
        locations={[0, 1]}
        colors={['rgb(99, 175, 252)', 'rgb(45, 102, 209)']}
        style={styles.viewViewLinearGradient}>
        <View style={styles.viewView}>
          <View
            style={{
              marginTop: 200,
              flex: 1,
              alignItems: 'center'
            }}>
            <Image
              source={require('../assets/images/circleWhite.png')}
              style={styles.gruppe10072Image}

            />
            <Text style={styles.circleText}>CIRCLE</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          />
          <View style={styles.buttonsView}>
            <View
              pointerEvents="box-none"
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
              }}>
              <View
                pointerEvents="box-none"
                style={{
                  height: 17,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                //TODO: IMPL BTN
                >
                  <Text style={styles.registrierenText}>Registrieren</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                  }}
                />
                <TouchableOpacity
                //TODO: IMPL BTN
                >
                  <Text style={styles.anmeldenText}>Anmelden</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              pointerEvents="box-none"
              style={{
                position: 'absolute',
                alignSelf: 'center',
                top: 0,
                bottom: 0,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/images/pfad-2519.png')}
                style={styles.pfad2519Image}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  viewViewLinearGradient: {
    flex: 1,
  },
  viewView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  topImage: {
    backgroundColor: 'transparent',
    resizeMode: 'cover',
    alignSelf: 'stretch',
    width: null,
    height: 45,
  },
  gruppe10072Image: {
    backgroundColor: 'transparent',
    height: 200
  },
  circleText: {
    color: 'white',
    fontFamily: '.SFNSDisplay',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    letterSpacing: 15,
    backgroundColor: 'transparent'
  },
  buttonsView: {
    backgroundColor: 'transparent',
    width: 286,
    height: 37,
    marginBottom: 24,
  },
  registrierenText: {
    color: 'white',
    fontFamily: '.AppleSystemUIFont',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    letterSpacing: 0.06,
    backgroundColor: 'transparent',
  },
  anmeldenText: {
    color: 'white',
    fontFamily: '.AppleSystemUIFont',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    letterSpacing: 0.06,
    backgroundColor: 'transparent',
  },
  pfad2519Image: {
    backgroundColor: 'transparent',
    resizeMode: 'center',
    width: 2,
    height: 37,
  },
  indicatorView: {
    backgroundColor: 'white',
    opacity: 0.2,
    borderRadius: 1,
    width: 134,
    height: 3,
    marginBottom: 9,
  },
});

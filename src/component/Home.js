import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  render() {
    let imagePath = {
      uri: 'https://mobile.softpedia.com/screenshots/icon_Unit-Converter-by-Kanasz-Robert-Windows-Phone.jpg',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.font}> unit Converter </Text>
        <Image source={imagePath} style={styles.image} />
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Unit convertor')}>
            <Text style={styles.start}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  font: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 40,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: '#182c45',
  },
  button: {
    margin: 50,
    height: 55,
    width: 280,
    borderRadius: 15,
    backgroundColor: '#182c45',
    justifyContent: 'center',
    marginTop: 50,
  },
  start: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  image: {
    width: 260,
    height: 260,
    //margin: 20,
  },
});
export default Home;

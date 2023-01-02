import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

class Home extends Component {
  render() {
    let imagePath = { uri: 'https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Accessories-Media-Converter-icon.png', };
    return (
      <View style={styles.container}>
        <Text style={styles.font}> Welcome to Unit Converter </Text>
        <Image source={imagePath} style={{ width: 130, height: 130 }} />
        <View style={styles.button}>
          <Button title='Start' color='#e00d73'
            onPress={() => this.props.navigation.navigate('Unit convertor')} />
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
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
    color: '#e04c0d',
    fontWeight: 'bold',
  },
  button: {
    margin: 30

  }
});
export default Home;

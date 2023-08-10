import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
// import { WARNA_PUTIH } from 'utils/warna'


import { Logo } from 'assets/Image';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 4000)
  }, [navigation]);

  return (
    <ImageBackground source={Logo} style={styles.background}>
      <View>
        <Text style={styles.label}>Maven</Text>
        <Text style={styles.Text}>YOUR BEAUTIFUL DESTINY</Text>
      </View>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center'
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: -10,
    color: '#ffffff',
    textAlign: 'center'
  }

})
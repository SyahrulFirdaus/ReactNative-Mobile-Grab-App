import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MainFeatureSub = (props) => {
  return (
    <View style={{
      alignItems: 'center',
      width: '25%',

    }}>
      <Image style={styles.ImageFiturUtama} source={props.image} />
      <Text style={styles.TextFiturUtama}>{props.title}</Text>

    </View>
  )
}

export default MainFeatureSub

const styles = StyleSheet.create({

  ImageFiturUtama: {
    height: 55,
    width: 55,
    marginTop: 15,
  },
  TextFiturUtama: {
    textAlign: 'center',
    marginTop: 4
  }
})
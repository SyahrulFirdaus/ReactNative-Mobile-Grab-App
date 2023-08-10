import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MainFeatureSub = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignItems: 'center',
        width: '25%',

      }}>
      <Image style={styles.ImageFiturUtama} source={props.image} />
      <Text style={styles.TextFiturUtama}>{props.title}</Text>

    </TouchableOpacity>
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
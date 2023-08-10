import { StyleSheet, View } from 'react-native'
import React from 'react'
import MainFeatureSub from './MainFeatureSub'
import { useNavigation } from '@react-navigation/native';

const MainFeature = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperFiturUtama}>
      <MainFeatureSub onPress={() => navigation.navigate('Food')} title="Food" image={require('../assets/Image/food.jpg')} />
      <MainFeatureSub title="Bike" image={require('../assets/Image/bike.jpg')} />
      <MainFeatureSub title="Car" image={require('../assets/Image/car.jpg')} />
      <MainFeatureSub title="Delivery" image={require('../assets/Image/send.jpg')} />
      <MainFeatureSub title="Subscription" image={require('../assets/Image/subscribe.jpg')} />
      <MainFeatureSub title="Doctor" image={require('../assets/Image/doctor.jpg')} />
      <MainFeatureSub title="Pulsa/Token" image={require('../assets/Image/pulsa.jpg')} />
      <MainFeatureSub title="More" image={require('../assets/Image/more.jpg')} />
    </View>

  )
}

export default MainFeature

const styles = StyleSheet.create({
  wrapperFiturUtama: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    flexWrap: 'wrap',
    width: '100%',
  },
})
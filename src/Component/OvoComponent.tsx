import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OvoComponent = () => {
  return (
    <View>
      <View style={styles.wrapperPay}>
             <View>
              <Image style={styles.ovoFeatureImage} source = {require('../assets/Image/pay.jpg')} />
              <Text style = {{ 
                alignSelf: 'center' , 
                marginTop: 5 ,
                fontSize: 14
                }}>Pay</Text>
             </View>

             <View>
              <Image style={styles.ovoFeatureImage} source = {require('../assets/Image/topup.jpg')} />
              <Text style = {{ 
                alignSelf: 'center' , 
                marginTop: 5 ,
                fontSize: 14
                }}>Top Up</Text>
             </View>

             <View>
              <Image style={styles.ovoFeatureImage} source = {require('../assets/Image/reward.jpg')} />
              <Text style = {{ 
                alignSelf: 'center' , 
                marginTop: 5 ,
                fontSize: 14
                }}>Rewards</Text>
             </View>
          </View>
    </View>
  )
}

export default OvoComponent

const styles = StyleSheet.create({
    wrapperPay : {
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  ovoFeatureImage : {
    height: 37,
    width: 37,
    marginTop: 25,
    marginHorizontal: 30
  }
})
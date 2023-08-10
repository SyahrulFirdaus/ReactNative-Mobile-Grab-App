
import { Image, StyleSheet, Text, View, Dimensions, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import OvoComponent from '../../Component/OvoComponent'
import MainFeature from '../../Component/MainFeature'
import PromoItem from '../../Component/PromoItem'



const Home = () => {
  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" translucent backgroundColor="#ffffff" />
        <Image style={{
          height: 140,
          width: windowWidth,
          marginTop: 28,
          backgroundColor: 'powderblue',
        }} source={require('assets/Image/awan.jpg')} />
        <Text style={styles.greetingText}>Selamat Siang</Text>
        <View style={styles.wrapperOvo}>
          <View style={styles.textOvo}>
            <Text style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#383838'
            }}>Ovo Balance</Text>
            <Text style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#383838'
            }}>Rp 1.000.000</Text>
          </View>
          <View style={styles.garisOvo}></View>
          <OvoComponent />
        </View>
        <View style={{
          marginHorizontal: 18,
        }}>
          <MainFeature />
        </View>
        <View style={styles.divider}></View>
        <PromoItem />
      </View>
    </ScrollView>
  )
}

export default Home
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838'
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: '#ffffff',
    elevation: 4,
    borderRadius: 10
  },
  textOvo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  garisOvo: {
    height: .8,
    backgroundColor: "#adad",
    margin: 10,
  },
  divider: {
    width: windowWidth,
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15
  }

})
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconGoogle, IconPassword, IconUsername } from 'assets'
import { Login } from 'assets'
import { WARNA_DISABLE } from 'utils'

const Akun = ({
  navigation
}) => {
  return (
    <View >
      <View style={styles.background}>
        <View >
          <Login style={styles.LoginImage} />
        </View>
      </View>

      <Text style={styles.TextLogin}>SIGN IN</Text>
      <View style={styles.Username} >
        <Text style={styles.inputUsername}>Username</Text>
        <IconUsername style={styles.IconUsername} />
      </View>

      <View style={styles.Password}>
        <Text
          style={styles.inputPassword}>Password
        </Text>
        <IconPassword style={styles.IconPassword} />
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
              paddingTop: 15,
              marginLeft: 175,
              color: '#7F8487'
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <View style={styles.Submit}>
          <Text style={styles.submitLogin}>SIGN IN</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('Register')}
          style={{
            fontSize: 12,
            paddingTop: 15,
            color: '#270082',
            textAlign: 'center'
          }
          }
        >
          Don't have a Account ? Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={styles.sigInGoogle}
        >
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontWeight: '900'
            }}
          >Sign in With Google</Text>
          <IconGoogle style={{
            marginLeft: 15,
            marginTop: -22
          }} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Akun
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  background: {
    marginTop: 28,
    backgroundColor: '#BDCDD6',
    height: windowHeight * 0.35
  },
  LoginImage: {
    marginTop: 31,
    marginLeft: 90,
  },
  TextLogin: {
    fontSize: 30,
    marginLeft: 50,
    fontWeight: 'bold',
    color: '#03C988'
  },
  Username: {
    height: windowHeight * 0.065,
    borderRadius: 25,
    marginHorizontal: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  Password: {
    height: windowHeight * 0.065,
    borderRadius: 25,
    marginHorizontal: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000'
  },
  inputUsername: {
    marginTop: 13,
    marginLeft: 45,
    color: '#D8D8D8'
  },
  inputPassword: {
    marginTop: 13,
    marginLeft: 45,
    color: '#D8D8D8'
  },
  Submit: {
    backgroundColor: '#03C988',
    height: windowHeight * 0.065,
    borderRadius: 25,
    marginHorizontal: 40,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  submitLogin: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 11,
    textAlign: 'center',
    color: '#ffffff'
  },
  IconPassword: {
    marginLeft: 13,
    marginTop: -24,
  },
  IconUsername: {
    marginLeft: 12,
    marginTop: -24,
  },

  sigInGoogle: {
    backgroundColor: '#ffffff',
    marginVertical: 20,
    marginHorizontal: 40,
    height: windowHeight * 0.055,
    borderRadius: 10
  },

})
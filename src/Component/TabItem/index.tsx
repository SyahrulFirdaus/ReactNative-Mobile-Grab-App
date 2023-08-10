import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IconAkun, IconHome, IconPesanan, IconPesananActive, IconInbox, IconInboxActive, IconAkunActive, IconHomeActive } from '../../assets'
const TabItem = ({ isFocused, onPress, onLongPress, label }) => {

  const Icon = () => {
    if (label === "Home") return isFocused ? <Image
      style={{
        width: 28,
        height: 28
      }}
      source={require('../../assets/Image/nav-home-active.jpg')} />
      :
      <Image
        style={{
          width: 28,
          height: 28
        }}
        source={require('../../assets/Image/nav-home.jpg')} />

    if (label === "Activity") return isFocused ?
      <Image
        style={{
          width: 28,
          height: 28,

        }}
        source={require('../../assets/Image/nav-activity-active.jpg')} />
      :
      <Image
        style={{
          width: 28,
          height: 28,
        }}
        source={require('../../assets/Image/nav-activity.jpg')} />
    if (label === "Inbox") return isFocused ?
      <Image
        style={{
          width: 28,
          height: 28,
        }}
        source={require('../../assets/Image/nav-inbox-active.jpg')} />
      :
      <Image
        style={{
          width: 28,
          height: 28,
        }}
        source={require('../../assets/Image/nav-inbox.jpg')} />
    if (label === "Payment") return isFocused ?
      <Image
        style={{
          width: 28,
          height: 28,
        }}
        source={require('../../assets/Image/nav-payment-active.jpg')} />
      :
      <Image
        style={{
          width: 28,
          height: 28,
        }}
        source={require('../../assets/Image/nav-payment.jpg')} />


    if (label === "Account") return isFocused ?
      <Image
        style={{
          width: 28,
          height: 28,
        }}
        source={require('../../assets/Image/nav-account-active.jpg')} />
      :
      <Image
        style={{
          width: 28,
          height: 28,
        }}
        source={require('../../assets/Image/nav-account.jpg')} />

    return <IconHome />
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
    >
      <Icon />
      <Text style={{ color: isFocused ? '#09AB54' : '#222', fontSize: 11, paddingTop: 3 }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({

})
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PromoItemSub = (props) => {
    return (

        <View style={styles.wrapper}>
            <Image source={props.image} style={styles.promoImage} />
            <View style={styles.TextPromo}>
                <Text style={{
                    fontSize: 13,
                    fontWeight: 'bold'
                }}>{props.text}</Text>
            </View>
            {
                props.diskon ? <View style={styles.textDiskon}><Text>{props.diskon}</Text></View> 
                : 
                <View> <Text></Text> </View>
            }
            <View style ={{ 
                marginLeft: 10,
                marginBottom: 8,
                flexDirection: 'row'
             }}>
                <Image source={require('assets/Image/calendar.png')} style={{ 
                    height: 13, 
                    width: 13,
                    }} 
                />
                <Text style ={{ 
                    marginLeft: 8,
                    fontSize: 11,
                    color: '#575757'
                 }}>{props.durasi}</Text>
            </View>
        </View>

    )
}

export default PromoItemSub
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffffff',
        elevation: 4,
        borderRadius: 8,
        width: windowWidth / 2 - 27,
        marginRight: 18,
        marginBottom: 18
    },
    promoImage: {
        width: windowWidth / 2 - 27,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    TextPromo: {
        marginLeft: 10,
        marginVertical: 10,
    },
    textDiskon : {
        position: 'absolute',
        top: 10,
        backgroundColor: '#ffffff',
        padding : 4,
        borderRadius: 4,
        left: 4
    }
})
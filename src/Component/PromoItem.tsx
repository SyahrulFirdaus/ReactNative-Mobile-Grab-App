import { StyleSheet, View } from 'react-native'
import React from 'react'
import PromoItemSub from './PromoItemSub'

const PromoItem = () => {
    return (
        <View style={{
            marginHorizontal: 18,
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row'
        }}>
            <PromoItemSub
                image={{ uri: 'https://img.freepik.com/premium-photo/lotek-is-indonesian-traditional-salad-consist-vegetable-with-sweet-spicy-peanuts-sauce_581937-3145.jpg' }}
                text="Makanan Khas Sunda"
                diskon="Diskon 40 %"
                durasi ="Until 20 Oct 2023"
            />
            <PromoItemSub
                image={{ uri: 'https://img.qraved.co/v2/image/data/1514875895172-m.jpeg' }}
                text="Makanan Khas Betawi"
                diskon="Diskon 40 %"
                durasi="Until 20 Oct 2023"

            />
            <PromoItemSub
                image={{ uri: 'https://img-global.cpcdn.com/recipes/04ff167684f95d4d/1200x630cq70/photo.jpg' }}
                text="Nasi Kuning Markotop"
                diskon="Diskon 40 %"
                durasi="Until 20 Oct 2023"

            />
        </View>
    )
}

export default PromoItem

const styles = StyleSheet.create({})
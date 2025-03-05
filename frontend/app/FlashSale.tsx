import {
    StyleSheet, Text, View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React, { useState } from 'react'
import { FlashList } from '@shopify/flash-list';

const Product = [
    {
        id: 1,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Dược Sư Tự Sự [Light Novel] - Tập 8 [Tặng Bookmark + Postcard + Set 5 móc khóa]',
        price: 90000,
        sale: 11,
        quantity: 10,
        bought: 8
    },
    {
        id: 2,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Dược Sư Tự Sự [Light Novel] - Tập 8 [Tặng Bookmark + Postcard + Set 5 móc khóa]',
        price: 90000,
        sale: 20,
        quantity: 8,
        bought: 2
    },
    {
        id: 3,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Dược Sư Tự Sự [Light Novel] - Tập 8 [Tặng Bookmark + Postcard + Set 5 móc khóa]',
        price: 90000,
        sale: 20,
        quantity: 4,
        bought: 1
    },
    {
        id: 4,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Dược Sư Tự Sự [Light Novel] - Tập 8 [Tặng Bookmark + Postcard + Set 5 móc khóa]',
        price: 90000,
        sale: 46,
        quantity: 10,
        bought: 5
    },
    {
        id: 5,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Dược Sư Tự Sự [Light Novel] - Tập 8 [Tặng Bookmark + Postcard + Set 5 móc khóa]',
        price: 90000,
        sale: 20,
        quantity: 10,
        bought: 5
    },
];

const FlashSale = () => {
    const [prod, setProd] = useState(Product);

    const formatCurrency = (amount: number) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const renderProd = ({ item, index }: any) => {
        const priceSale = item.price * (item.sale / 100);
        const road = (item.bought / item.quantity) * 100;

        return (
            <TouchableOpacity style={styles.prodContainer}>
                <Image source={item.img} style={{ width: 150, height: 150, marginRight: 8 }} resizeMode='contain' />
                <View style={styles.content}>
                    <View>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize: 14}}>{item.name}</Text>
                        <View style={styles.sale}>
                            <Text style={styles.textPriceSale}>{formatCurrency(priceSale)} đ</Text>
                            <Text style={styles.textPercent}>-{item.sale}%</Text>
                        </View>
                        <Text style={styles.oldPrice}>{formatCurrency(item.price)}đ</Text>
                    </View>
                    <View style={styles.haveBuy}>
                        {road > 50 && (
                            <Image
                                source={require('@/assets/icons/firesale.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    position: 'absolute',
                                    left: 5,
                                    top: '-30%',
                                    zIndex: 1
                                }}
                            />
                        )}
                        <Text style={{ color: 'white', textAlign: 'center', zIndex: 1 }}>đã bán {item.bought}</Text>
                        <View style={{
                            backgroundColor: item.bought == 0 ? 'none' : '#FC424B',
                            padding: 3,
                            borderRadius: 20,
                            width: `${road}%`,
                            position: 'absolute',
                            height: '100%',
                            top: 0, left: 0
                        }} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Image
                    source={require('@/assets/images/imgFlashsale.png')}
                    style={{
                        width: '100%', height: 200,
                    }} />
                <View style={styles.navContainer}>
                    <TouchableOpacity>
                        <Image source={require('@/assets/icons/left.png')}
                            style={{
                                width: 30, height: 20,
                            }} />
                    </TouchableOpacity>
                    <Text style={styles.textXL}>Flash <Image source={require('@/assets/icons/flash.png')} style={{ width: 20, height: 20, tintColor: '#FFA722' }} /> Sale</Text>
                    <TouchableOpacity>
                        <Image source={require('@/assets/icons/cart.png')}
                            style={{
                                width: 20, height: 20,
                                tintColor: 'white'
                            }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.timeContainer}>
                    <View style={styles.currentTime}>
                        <Text style={[styles.textXSS, { textAlign: 'center' }]}>Kết thúc sau</Text>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={styles.textTime}>00</Text>
                            <Text style={styles.textTime}>00</Text>
                            <Text style={styles.textTime}>00</Text>
                        </View>
                        <Text style={{ width: '50%', backgroundColor: 'white', height: 5, borderRadius: 5 }}></Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }}>20 : 00</Text>
                        <Text style={styles.textXSS}>Sắp diễn ra</Text>
                    </View>
                </View>
                <View style={styles.fireContainer}>
                    <View style={{ padding: 10, borderWidth: 1, width: 45, borderRadius: 100, borderColor: '#FC424C' }}>
                        <Image source={require('@/assets/icons/fire.png')} style={{ width: 25, height: 25 }} />
                    </View>
                    <Text style={{ textAlign: 'center', color: '#2B62A2' }}>Tiki chọn</Text>
                </View>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <Image source={require('@/assets/images/banner3.jpg')} style={{width: '95%', height: 110, marginHorizontal: 10, borderRadius: 5, marginTop: 8}} resizeMode='cover'/>
                <View style={{ padding: 10 }}>
                    <FlashList
                        data={prod}
                        renderItem={renderProd}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default FlashSale

const styles = StyleSheet.create({
    haveBuy: {
        backgroundColor: '#FE999F',
        padding: 3,
        borderRadius: 20
    },
    oldPrice: {
        color: '#ADADAD',
        textDecorationLine: 'line-through',
        textDecorationColor: '#ADADAD'
    },
    textPercent: {
        backgroundColor: '#FFF0F3',
        padding: 2,
        borderColor: '#FC424C',
        borderWidth: 1,
        color: '#FC424C',
        borderRadius: 3,
        fontSize: 10,
        fontWeight: '500'
    },
    textPriceSale: {
        fontSize: 20,
        color: '#FC424C',
        fontWeight: '700'
    },
    sale: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginTop: 10
    },
    content: {
        justifyContent: 'space-between',
        width: '58%'
    },
    prodContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 5,
    },
    fireContainer: {
        justifyContent: 'center',
        width: 90, height: 90,
        borderWidth: 2,
        alignItems: 'center',
        position: 'absolute',
        bottom: 5, left: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: '#2B62A2'
    },
    textTime: {
        padding: 3,
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 5,
        color: '#2B62A2'
    },
    currentTime: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeContainer: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        top: '25%'

    },
    textXSS: {
        fontSize: 10,
        color: 'white',
    },
    textXL: {
        fontSize: 19,
        color: 'white',
        fontWeight: '700'
    },
    navContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10
    }
})
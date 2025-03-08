import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { FlashList } from '@shopify/flash-list';

const FlashSale = [
    {
        id: 1,
        price: 85.650,
        sale: 35,
        img: require('@/assets/images/img_def.jpg')
    },
    {
        id: 2,
        price: 85.650,
        sale: 35,
        img: require('@/assets/images/img_def.jpg')
    },
    {
        id: 3,
        price: 85.650,
        sale: 35,
        img: require('@/assets/images/img_def.jpg')
    },
    {
        id: 4,
        price: 85.650,
        sale: 35,
        img: require('@/assets/images/img_def.jpg')
    },
    {
        id: 5,
        price: 85.650,
        sale: 35,
        img: require('@/assets/images/img_def.jpg')
    },
];

const COLLECTIONS = [
    {
        id: 1,
        name: 'Top 100 sản phẩm bán chạy nhất',
        img: require('@/assets/images/banner5.jpg')
    },
    {
        id: 2,
        name: 'Top 100 sản phẩm bán chạy nhất',
        img: require('@/assets/images/banner5.jpg')
    },
    {
        id: 3,
        name: 'Top 100 sản phẩm bán chạy nhất',
        img: require('@/assets/images/banner5.jpg')
    },
    {
        id: 4,
        name: 'Top 100 sản phẩm bán chạy nhất',
        img: require('@/assets/images/banner5.jpg')
    },
    {
        id: 5,
        name: 'Top 100 sản phẩm bán chạy nhất',
        img: require('@/assets/images/banner5.jpg')
    },
];

const TOP3 = [
    {
        id: 1,
        name: '1 Lon Pedisua 800g (Dành cho tre từ 1 - 10) giúp cải thiện cân nặng và chiều cao',
        rating: 5,
        bought: 549,
        price: 850000,
        img: require('@/assets/images/img_def_2.jpg')
    },
    {
        id: 2,
        name: '1 Lon Pedisua 800g (Dành cho tre từ 1 - 10) giúp cải thiện cân nặng và chiều cao',
        rating: 5,
        bought: 549,
        price: 850000,
        img: require('@/assets/images/img_def_2.jpg')
    },
    {
        id: 3,
        name: '1 Lon Pedisua 800g (Dành cho tre từ 1 - 10) giúp cải thiện cân nặng và chiều cao',
        rating: 5,
        bought: 549,
        price: 850000,
        img: require('@/assets/images/img_def_2.jpg')
    },
];

const StoreScreen = () => {
    const [flash, setFlash] = useState(FlashSale);
    const [collection, setCollection] = useState(COLLECTIONS);
    const [top3, setTop3] = useState(TOP3);

    const formatCurrency = (amount: number) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const renderFlashSale = ({ item, index }: any) => {
        return (
            <TouchableOpacity style={{ justifyContent: 'space-between', width: 80, marginRight: 10 }}>
                <View style={{ width: 80, height: 70 }}>
                    <Text style={styles.sale}>-{item.sale}%</Text>
                    <Image
                        source={item.img}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='contain' />
                </View>
                <Text style={styles.priceSale}>{item.price} đ</Text>
                <Text style={styles.inforSale}>Vừa mở bán</Text>
            </TouchableOpacity>
        );
    };

    const renderCollections = ({ item, index }: any) => {
        return (
            <TouchableOpacity style={{ width: '100%', marginVertical: 5, paddingHorizontal: 5 }}>
                <Image
                    source={item.img}
                    style={styles.imgCollect}></Image>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.textM}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderTop = ({ item, index }: any) => {
        const medalImages = [
            require('@/assets/icons/rank_1.png'),
            require('@/assets/icons/rank_2.png'),
            require('@/assets/icons/rank_3.png')
        ];
        return (
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, height: 150}}>
                <View style={{ width: '30%' }}>
                    <Image
                        source={item.img}
                        style={{ width: '95%', height: '95%' }}
                        resizeMode='contain' />
                    <Image source={medalImages[index]}
                    style={{
                        position: 'absolute',
                        right: 0,
                        width: 35,
                        height: 40
                    }} />
                </View>
                <View style={{width: '68%', justifyContent: 'space-between', height: '100%'}}>
                    <View>
                    <Text style={{fontSize: 14}} numberOfLines={2} ellipsizeMode='tail'>{item.name}</Text>
                    <Text style={[styles.textM, {textAlign: 'left', color: 'gray'}]}>
                        5 <Image source={require('@/assets/icons/start.png')} style={{ width: 12, height: 10, tintColor: '#FEBF13' }} />
                        | Đã bán {item.bought}
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'semibold',
                        marginVertical: 5
                    }}>{formatCurrency(item.price)} đ</Text>
                    </View>
                    <Text style={[styles.textM, {
                        textAlign: 'left',
                        color: 'gray',
                        paddingTop: 8,
                        borderTopWidth: 1,
                        borderTopColor: '#EDEDED'
                    }]}>Giao siêu tốc 2h</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (

        <View style={{ alignSelf: 'auto' }}>
            <View style={styles.flashSaleContainer}>
                <Image
                    source={require('@/assets/images/imgFlashsale.png')}
                    style={{ width: '100%', height: 200 }} />
                <View style={styles.flashSaleBox}>
                    <View style={styles.flashSaleTime}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Giá sốc hôm nay</Text>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.timeFlash}>00</Text>:
                                <Text style={styles.timeFlash}>25</Text>:
                                <Text style={styles.timeFlash}>55</Text>
                                <Image
                                    source={require('@/assets/icons/right.png')}
                                    style={{ width: 20, height: 20, tintColor: 'white' }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxFlash}>
                        <FlashList
                            data={flash}
                            renderItem={renderFlashSale}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ height: '100%' }} />
                    </View>
                </View>
            </View>
            <View style={{ height: 110, marginTop: 5 }}>
                <View style={{
                    position: 'absolute', zIndex: 1, alignItems: 'center', width: '100%', height: '100%',
                    justifyContent: 'center'

                }}>
                    <Text style={{ color: '#0B60B7', fontSize: 20, fontWeight: 'bold' }}>Bộ sưu tập</Text>
                    <Text style={{ color: '#0B60B7', fontWeight: 'semibold' }}>Your Store Name</Text>
                </View>
                <Image
                    source={require('@/assets/images/img_bosuutap.png')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='contain' />
            </View>
            <View style={{ padding: 10, backgroundColor: 'white' }}>
                <FlashList
                    data={collection.slice(0, 4)}
                    renderItem={renderCollections}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={{ height: '100%' }} />
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={[styles.textM, { fontWeight: 'semibold', fontSize: 14 }]}>Xem tất cả <Image source={require('@/assets/icons/right.png')} style={{ width: 10, height: 8, tintColor: '#000000' }} /></Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor: 'white', marginVertical: 5}}>
                <Text style={{fontSize: 16, margin: 15}}>Sản Phẩm Bán Chạy Nhất</Text>
                <View>
                    <FlashList
                        data={top3}
                        renderItem={renderTop}
                        horizontal={false}
                        showsVerticalScrollIndicator={false} />
                </View>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={[styles.textM, { fontWeight: 'semibold', fontSize: 14, marginBottom: 10, color: '#2D6FBB' }]}>Xem tất cả <Image source={require('@/assets/icons/right.png')} style={{ width: 10, height: 8, tintColor: '#2D6FBB' }} /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StoreScreen

const styles = StyleSheet.create({
    textM: {
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 5,
        paddingHorizontal: 5
    },
    imgCollect: {
        width: '100%',
        height: 100,
        borderRadius: 10
    },
    inforSale: {
        textAlign: 'center',
        padding: 3,
        backgroundColor: '#FE999F',
        color: 'white',
        fontSize: 10,
        borderRadius: 20
    },
    priceSale: {
        color: '#CB5B67',
        textAlign: 'center',
        fontSize: 13,
        marginVertical: 6
    },
    sale: {
        position: 'absolute',
        color: '#CB5B67',
        borderColor: '#CB5B67',
        padding: 2,
        borderRadius: 3,
        borderWidth: 1.5,
        backgroundColor: '#FFF2F8',
        zIndex: 1,
        fontSize: 8
    },
    boxFlash: {
        height: 140,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    timeFlash: {
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 5,
        color: '#CD6272',
        marginHorizontal: 2
    },
    flashSaleTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flashSaleBox: {
        padding: 10,
        position: 'absolute',
        height: 200,
        width: '100%',
        justifyContent: 'space-between'
    },
    flashSaleContainer: {
        height: 200,
    },
});
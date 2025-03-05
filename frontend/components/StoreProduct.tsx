import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import productItem from './product_item';

const DANHMUC = [
    { id: 1, img: require('@/assets/images/img_def.jpg'), name: 'Giày - Dép nữ' },
    { id: 2, img: require('@/assets/images/img_def.jpg'), name: 'Điện Gia Dụng' },
    { id: 3, img: require('@/assets/images/img_def.jpg'), name: 'Điện Thoại - Máy Tính Bảng' },
    { id: 4, img: require('@/assets/images/img_def.jpg'), name: 'Máy Ảnh - Máy Quay Phim' },
    { id: 5, img: require('@/assets/images/img_def.jpg'), name: 'Thời trang nam' },
    { id: 6, img: require('@/assets/images/img_def.jpg'), name: 'Laptop' },
    { id: 7, img: require('@/assets/images/img_def.jpg'), name: 'Đồng hồ' },
    { id: 8, img: require('@/assets/images/img_def.jpg'), name: 'Sách' },
    { id: 9, img: require('@/assets/images/img_def.jpg'), name: 'Văn phòng phẩm' },
];

const FILTER = [
    {
        id: 1,
        name: 'Phổ biến'
    },
    {
        id: 2,
        name: 'Bán chạy'
    },
    {
        id: 3,
        name: 'Hàng mới'
    },
    {
        id: 4,
        name: 'Giá'
    },
];

const Product = [
    {
        id: 1,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Thao túng tâm Lý',
        rating: 3.3,
        support: [
            require('@/assets/images/topdeal.jpg'),
            require('@/assets/images/chinhhang.jpg'),
        ],
        bought: 16637,
        price: 101400,
        sale: 40
    },
    {
        id: 2,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Miieengs dán mụn giúp giảm mụn sưng viêm Acnes với chất lượng perfect, tin chúng toai',
        rating: 3.3,
        support: [
            require('@/assets/images/topdeal.jpg'),
            require('@/assets/images/chinhhang.jpg'),
            require('@/assets/images/freeship.jpg'),
        ],
        bought: 16637,
        price: 51400,
        sale: 14
    },
    {
        id: 3,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Thao túng tâm Lý',
        rating: 3.3,
        support: [
            require('@/assets/images/topdeal.jpg'),
            require('@/assets/images/chinhhang.jpg'),
        ],
        bought: 16637,
        price: 101400,
        sale: 40
    },
    {
        id: 4,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Thao túng tâm Lý',
        rating: 3.3,
        support: [
            require('@/assets/images/topdeal.jpg'),
            require('@/assets/images/chinhhang.jpg'),
        ],
        bought: 16637,
        price: 101400,
        sale: 40
    },
    {
        id: 5,
        img: require('@/assets/images/img_def.jpg'),
        name: 'Thao túng tâm Lý',
        rating: 3.3,
        support: [
            require('@/assets/images/topdeal.jpg'),
            require('@/assets/images/chinhhang.jpg'),
        ],
        bought: 16637,
        price: 101400,
        sale: 40
    },
];

const StoreProduct = () => {
    const [filterIndex, setFilterIndex] = useState(0);
    const [showDanhMuc, setShowDanhMuc] = useState(false);
    const [product, setProduct] = useState(Product);

    const formatCurrency = (amount: number) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const displayDanhMuc = showDanhMuc ? DANHMUC : DANHMUC.slice(0, 4);

    const renderDanhMuc = ({ item, index }: any) => {
        return (
            <TouchableOpacity style={styles.itemDanhMuc}>
                <Image source={item.img}
                    style={{
                        width: 50, height: 55,
                        marginRight: 10
                    }}
                    resizeMode='contain' />
                <Text style={styles.textS} numberOfLines={2} ellipsizeMode='tail'>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderFilter = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => setFilterIndex(index)}>
                <Text style={[styles.textS,
                index == filterIndex && { color: '#2B78C0' }
                ]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderProd = ({ item, index }: any) => {
        return (
            <TouchableOpacity style={{ width: '100%' }}>
                <View style={[styles.prodContainer,
                (index % 2) != 0 && { position: 'absolute', right: 0 }
                ]}>
                    <View>
                        <Image source={item.img}
                            style={{ width: '100%', height: 165, overflow: 'hidden' }}
                            resizeMode='contain' />
                        <Text style={[styles.textXS, {
                            color: 'white',
                            fontWeight: '200',
                            padding: 3,
                            backgroundColor: '#DB373E',
                            borderRadius: 5,
                            position: 'absolute'
                        }]}>3.3</Text>
                        <View style={{
                            position: 'absolute',
                            flexDirection: 'row',
                            padding: 5,
                            backgroundColor: 'white',
                            bottom: 0,
                            gap: 5, borderTopRightRadius: 5
                        }}>
                            {item.support.map((icon: any, inx: number) => (
                                <Image
                                    key={inx}
                                    source={icon}
                                    style={{ height: 20, width: 40 }}
                                />
                            ))}
                        </View>
                    </View>
                    <Text style={[styles.textS, {
                        marginVertical: 10,
                        height: 38
                    }]} numberOfLines={2} ellipsizeMode='tail'>{item.name}</Text>
                    <Text style={[styles.textXS, {
                        color: '#9F9FA2'
                    }]}><Text style={[styles.textXS, {
                        color: '#000000'
                    }]}>{item.rating}</Text> <Image source={require('@/assets/icons/start.png')} style={{ width: 15, height: 13, tintColor: '#FED640' }} /> | Đã bán {item.bought}</Text>
                    <View style={{ flexDirection: 'row', gap: 5, marginVertical: 10, alignItems: 'flex-end' }}>
                        <Text style={[styles.textM, {
                            color: '#FF3E51',
                            fontWeight: 'bold'
                        }]}>{formatCurrency(item.price)} đ</Text>
                        <Text style={[styles.textXS, {
                            color: '#FF3E51',
                            fontWeight: 'bold',
                            marginBottom: 2
                        }]}>-{item.sale}%</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        gap: 8,
                        borderTopWidth: 0.5,
                        borderTopColor: '#F3F3F3',
                        paddingTop: 8,
                        marginTop: 10
                    }}>
                        <Image source={require('@/assets/icons/haft-sun.png')}
                            style={{ height: 20, width: 25 }} />
                        <Text>Giao sáng mai</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.categoriesContainer}>
                <Text style={[styles.textM, { marginTop: 10, marginBottom: 5 }]}>Mua Sắm Theo Danh Mục</Text>
                <FlashList
                    data={displayDanhMuc}
                    renderItem={renderDanhMuc}
                    numColumns={2}
                    estimatedItemSize={100} />
                <TouchableOpacity onPress={() => setShowDanhMuc(!showDanhMuc)}>
                    <Text style={[styles.textM, { textAlign: 'center', marginTop: 10, color: '#2B78C0' }]}>{showDanhMuc ? 'Thu gọn' : 'Xem Thêm Các Danh Mục Khác'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
                <FlashList
                    data={FILTER}
                    renderItem={renderFilter}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    extraData={filterIndex}
                    ItemSeparatorComponent={() => <View style={{
                        width: 5, height: 5, backgroundColor: '#EAE9EF', marginHorizontal: 27,
                        marginVertical: 'auto',
                        borderRadius: 10,
                    }} />}
                />
            </View>
            <View style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Text style={[styles.textXS, {
                    textDecorationLine: 'underline',
                    fontWeight: '500',
                    flex: 1,
                    borderRightWidth: 1,
                    borderRightColor: '#EEEEEE'
                }]}>Phường Bến Nghé, Quận 1, Hồ Chí Minh</Text>
                <Text style={[styles.textM, {
                    color: '#F93C49',
                    fontWeight: 'bold',
                    paddingVertical: 3,
                    paddingHorizontal: 10,
                    backgroundColor: '#F6F5FB',
                    borderRadius: 15,
                    marginLeft: 8
                }]}>Now</Text>
            </View>
            <View style={{ padding: 10 }}>
                <FlashList
                    data={product}
                    renderItem={renderProd}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    )
}

export default StoreProduct

const styles = StyleSheet.create({
    prodContainer: {
        width: '97%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 6,
        marginBottom: 10
    },
    boxContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginTop: 8,
        marginBottom: 1,
        paddingVertical: 10
    },
    categoriesContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    row: {
        justifyContent: 'space-between'
    },
    itemDanhMuc: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#F6F5FB',
        width: '95%',
        margin: 5
    },
    textXS: {
        fontSize: 12,
    },
    textS: {
        fontSize: 14,
    },
    textM: {
        fontSize: 16
    },
    textL: {
        fontSize: 18
    }
});
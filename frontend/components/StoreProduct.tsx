import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { FlashList } from '@shopify/flash-list';

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

const StoreProduct = () => {
    const [dmIndex, setDMIndex] = useState(0);
    const [showDanhMuc, setShowDanhMuc] = useState(false);

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
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.categoriesContainer}>
                <Text style={[styles.textL, {marginTop: 10, marginBottom: 5}]}>Mua Sắm Theo Danh Mục</Text>
                <FlashList
                    data={displayDanhMuc}
                    renderItem={renderDanhMuc}
                    numColumns={2} 
                    estimatedItemSize={100}/>
                <TouchableOpacity onPress={() => setShowDanhMuc(!showDanhMuc)}>
                    <Text style={[styles.textM, {textAlign: 'center', marginTop: 10, color: '#2B78C0'}]}>{showDanhMuc ? 'Thu gọn' : 'Xem Thêm Các Danh Mục Khác'}</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default StoreProduct

const styles = StyleSheet.create({
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
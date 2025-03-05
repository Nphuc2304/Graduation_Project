import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const StoreProfile = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.boxInfor, { marginBottom: 8 }]}>
                <View style={styles.boxPercent}>
                    <Text style={styles.textL}>0 %</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.textM}>Tỉ lệ hủy </Text>
                        <Image source={require('@/assets/icons/help-rounded.png')} style={{ width: 18, height: 18 }} />
                    </View>
                </View>
                <View style={{ height: '100%', borderWidth: 0.5, borderColor: '#F0F0F0' }}></View>
                <View style={styles.boxPercent}>
                    <Text style={styles.textL}>0 %</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.textM}>Tỉ lệ hủy </Text>
                        <Image source={require('@/assets/icons/help-rounded.png')} style={{ width: 18, height: 18 }} />
                    </View>
                </View>
            </View>
            <View style={styles.boxInfor}>
                <Text style={styles.textM}>Thông Tin Cửa Hàng</Text>
            </View>
            <View style={styles.boxInfor2}>
                <Image source={require('@/assets/icons/date-rounded.png')} style={styles.imgIcon} />
                <Text style={[styles.textS, { paddingLeft: 30, width: '50%' }]}>Thành viên từ năm</Text>
                <Text style={[styles.textS, { color: '#000000' }]}>2010</Text>
            </View>
            <View style={styles.boxInfor}>
                <Image source={require('@/assets/icons/box-rounded.png')} style={styles.imgIcon} />
                <Text style={[styles.textS, { paddingLeft: 30, width: '50%' }]}>Sản phẩm</Text>
                <Text style={[styles.textS, { color: '#000000' }]}>2000+</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Image source={require('@/assets/icons/store-rounded.png')} style={styles.imgIcon} />
                <Text style={[styles.textS, { paddingLeft: 30, width: '50%' }]}>Mô tả cửa hàng</Text>
                <Text style={[styles.textS, { marginVertical: 10, color: '#000000' }]}>Mua online sản phẩm của cửa hàng Tiki Trading trên Tiki.vn. chất lượng cao, uy tín, giá tốt. Chính hãng. Giao hàng toàn quốc</Text>
            </View>
            <View style={styles.boxInfor}>
                <Image source={require('@/assets/icons/start-rounded.png')} style={styles.imgIcon} />
                <Text style={[styles.textS, { paddingLeft: 30, width: '50%' }]}>Đánh giá</Text>
                <Text style={[styles.textS, { color: '#000000' }]}>4.7 / 5 <Image /> (5.5tr+)</Text>
            </View>
            <View style={styles.boxInfor2}>
                <Image source={require('@/assets/icons/user-favo-rounded.png')} style={styles.imgIcon} />
                <Text style={[styles.textS, { paddingLeft: 30, width: '50%' }]}>Người theo dõi</Text>
                <Text style={[styles.textS, { color: '#000000' }]}>508.0k+</Text>
            </View>
            <View style={styles.boxInfor}>
                <Image source={require('@/assets/icons/chat-rounded.png')} style={styles.imgIcon} />
                <Text style={[styles.textS, { paddingLeft: 30, width: '50%' }]}>Phản hồi Chat</Text>
                <Text style={[styles.textS, { color: '#000000' }]}>Chưa có</Text>
            </View>
        </View>
    )
}

export default StoreProfile

const styles = StyleSheet.create({
    imgIcon: {
        position: 'absolute',
        width: 20, height: 20
    },
    boxPercent: {
        width: '50%',
        backgroundColor: 'white',
        paddingVertical: 8
    },
    boxInfor2: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'flex-start'
    },
    boxInfor: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10
    },
    textS: {
        fontSize: 14,
        color: '#767676'
    },
    textM: {
        fontSize: 16,
        textAlign: 'center',
        color: '#767676'
    },
    textL: {
        fontSize: 25,
        fontWeight: 'semibold',
        color: '#009128',
        textAlign: 'center'
    }
});
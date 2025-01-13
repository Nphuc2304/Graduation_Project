import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Systrace } from "react-native";

const LoginSrceen = () => {
    return (
        <View style={styles.container}>
            {/*Header*/}
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/imgshop.jpg')}
                    style={styles.logo}
                />

            </View>
            <Text style={styles.welcomeText}>Xin chào!</Text>
            <Text style={styles.subText}>Đăng nhập hoặc Tạo tài khoản</Text>


            {/*Input*/}

            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
            />

            {/* Continue Button */}
            <TouchableOpacity>
                <Text style={styles.buttonText}> Tiếp tục</Text>
            </TouchableOpacity>

            {/* Email Login*/}
            <Text style={styles.linkText}>Đăng nhập bằng Email</Text>

            {/* Login với Facebook/ google */}
            <Text style={styles.orText}>Hoặc tiếp tục bằng</Text>

            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialText}>Google</Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <Text style={styles.footer}>
                Bằng việc tiếp tục, bạn đã đọc và đồng ý với{' '}
                <Text style={styles.linkText}>điều khoản sử dụng</Text>,{' '}
                <Text style={styles.linkText}>chính sách bảo mật thông tin cá nhân</Text> và{' '}
                <Text style={styles.linkText}>hướng dẫn hủy/xóa tài khoản</Text>.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },

    header: {
        alignItems: 'center',
        marginVertical: 20,
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    subText: {
        fontSize: 16,
        color: '#666',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 15,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#FF3B30',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    linkText: {
        color: '#007BFF',
        textAlign: 'center',
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
    orText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginVertical: 15,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    socialButton: {
        backgroundColor: '#E9ECEF',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    socialText: {
        fontSize: 16,
        color: '#000',
    },
    footer: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
    },

});

export default LoginSrceen;
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const CreateAccountScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    
    <View style={styles.body}>
  
    <TouchableOpacity style={styles.backButton1}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>

    <SafeAreaView style={styles.container}>
        
      <TouchableOpacity style={styles.backButton}>
        {/* Icon có thể sử dụng từ react-native-vector-icons */}
        {/* <Icon name="arrow-back" size={24} color="#000" /> */}
      </TouchableOpacity>
      
      <Text style={styles.title}>Tạo tài khoản</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Vui lòng cho biết tên của bạn</Text>
        <TextInput
          style={styles.input}
          placeholder="Họ & Tên"
          placeholderTextColor="#999"
        />
        <Text style={styles.hint}>
          Gồm 2 từ trở lên, không bao gồm số và ký tự đặc biệt
        </Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Đặt mật khẩu</Text>
        <View style={styles.passwordContainer}>
          
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mật khẩu"
            placeholderTextColor="#999"
            secureTextEntry={!passwordVisible}
          />

          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Text style={styles.showText}>
              {passwordVisible ? 'Ẩn' : 'Hiện'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.hint}>
          Từ 8 đến 32 ký tự, bao gồm số và chữ
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tạo Tài Khoản</Text>
      </TouchableOpacity>

    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    padding: 20,
  },
  backButton1: {
    position: 'absolute',
    top: 20,
    
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
    bottom: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  hint: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showText: {
    color: '#007BFF',
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#FF3B30',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;

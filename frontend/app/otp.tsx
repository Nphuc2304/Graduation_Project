import React, { useState, useRef } from 'react';
import {StyleSheet,Text,TextInput,View,TouchableOpacity,TextInputProps} from 'react-native';

const OTPVerificationScreen: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Tự động chuyển focus đến ô tiếp theo
    if (text && index < otp.length - 1 && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Nhập mã xác minh</Text>
      <Text style={styles.subtitle}>
        Để xác minh số điện thoại là của bạn, nhập mã gồm 6 chữ số vừa được gửi đến{' '}
        <Text style={styles.phoneNumber}>...</Text>
      </Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  phoneNumber: {
    fontWeight: 'bold',
    color: '#000000',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
    backgroundColor: '#F8F8F8',
  },
});

export default OTPVerificationScreen;

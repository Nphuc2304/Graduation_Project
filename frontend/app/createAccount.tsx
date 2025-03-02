import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert
} from "react-native";
import { register } from "@/src/services/productsServices";

const CreateAccountScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email.includes("@")) {
      Alert.alert("Lỗi", "Email không hợp lệ");
      return;
    }
  
    if (username.trim().length < 2) {
      Alert.alert("Lỗi", "Tên người dùng phải có ít nhất 2 ký tự");
      return;
    }
  
    if (password.length < 8) {
      Alert.alert("Lỗi", "Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }
  
    try {
      const userData = { email, username, password };
      const response = await register(userData); // Đã sửa lỗi truyền dữ liệu
  
      if (response.status) {
        Alert.alert("Thành công", "Tạo tài khoản thành công!", [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert("Thất bại", response.message);
      }
    } catch (error: any) {
      Alert.alert("Lỗi", error.response?.data?.message || "Không thể tạo tài khoản");
    }
  };



  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 17, height: 17, marginRight: 10 }}
              source={require("@/assets/icons/left-arrow.png")}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Tạo tài khoản</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Vui lòng cho biết tên của bạn</Text>
          <TextInput
            style={styles.input}
            placeholder="Họ & Tên"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.hint}>
            Gồm 2 từ trở lên, không bao gồm số và ký tự đặc biệt
          </Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Vui lòng nhập Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.hint}>
            Nhập email của bạn
          </Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Đặt mật khẩu</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Re-type password"
              placeholderTextColor='#828282'
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showRePassword}></TextInput>
            <TouchableOpacity onPress={() => setShowRePassword(!showRePassword)} style={styles.eye}>
              <Image
                source={require('../assets/images/eye.png')}
                style={{ width: 29, height: 18 }}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.hint}>Từ 8 đến 32 ký tự, bao gồm số và chữ</Text>
        </View>


        <TouchableOpacity
          style={styles.button}
          // 
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Tạo Tài Khoản</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({

  inputContainer: {
    width: '100%',
    marginTop: 16
  },
  eye: {
    marginRight: 15,
    width: 15,
    height: 18,
    position: 'absolute',
    right: 13,
    top: 15
  },
  body: {
    padding: 20,
    backgroundColor: "#F8F8FF",
    height: "100%",
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
    fontWeight: "700",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  input: {
    height: 50,

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#F8F8FF",
  },
  hint: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  showText: {
    color: "#007BFF",
    fontSize: 16,
    marginLeft: 10,
  },

  button: {
    backgroundColor: "#FF3B30",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateAccountScreen;

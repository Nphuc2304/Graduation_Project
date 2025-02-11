import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

const CreateAccountScreen = ({ navigation }: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
                {passwordVisible ? "Ẩn" : "Hiện"}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.hint}>Từ 8 đến 32 ký tự, bao gồm số và chữ</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Tạo Tài Khoản</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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

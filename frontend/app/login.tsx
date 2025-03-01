import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as SecureStore from "expo-secure-store";
import { getUserByEmail } from "../src/services/productsServices"; // Sử dụng API đăng nhập bằng email

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Đăng nhập Google từ Google Cloud Console
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "788836681295-3iueoamu04iup63ibjntsp10l9dmltj2.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      SecureStore.setItemAsync("google_token", access_token)
        .then(() => console.log("Lưu token Google thành công"))
        .catch((error) => console.log("Lỗi khi lưu token Google:", error));

      fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: { Authorization: `Bearer ${access_token}` },
      })
        .then((res) => res.json())
        .then((user) => {
          Alert.alert("Đăng nhập Google thành công!", `Chào ${user.name}`);
          navigation.navigate("HomeTabs");
        })
        .catch((error) => {
          console.log("Lỗi khi lấy thông tin user từ Google:", error);
          Alert.alert("Lỗi", error.message);
        });
    }
  }, [response]);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
      return;
    }
    try {
      await getUserByEmail(email, password, navigation);
    } catch (error: any) {
      console.log("Lỗi đăng nhập:", error.response?.data || error.message);
      Alert.alert("Lỗi", error.response?.data?.message || "Đăng nhập thất bại");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image source={require("../assets/images/imgShop.jpg")} style={styles.pictur1} />
      </View>
      <Text style={styles.title}>Đăng Nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#C7C7C7"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#C7C7C7"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueButtonText}>Đăng Nhập</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPasswordText}>
        Quên mật khẩu? <Text style={styles.linkText}>Khôi phục tại đây</Text>
      </Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => promptAsync()} disabled={!request}>
          <Image source={require("../assets/icons/google.png")} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../assets/icons/facebook.png")} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Bạn chưa có tài khoản? {" "}
          <Text style={styles.linkText} onPress={() => navigation.navigate("SignUp")}>
            Đăng ký ngay
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 16 },
  contentContainer: { flexGrow: 1, alignItems: "center", paddingBottom: 20 },
  header: { alignItems: "center", marginBottom: 20, width: "100%" },
  pictur1: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    height: 200,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#333", textAlign: "center", marginTop: 200 },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F8F8F8",
    marginVertical: 10,
  },
  continueButton: {
    backgroundColor: "#FF424E",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  continueButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  forgotPasswordText: { fontSize: 14, color: "#007AFF", textAlign: "center", marginVertical: 10 },
  socialContainer: { flexDirection: "row", justifyContent: "center", marginVertical: 20, width: "100%" },
  socialButton: {
    marginHorizontal: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: { width: "100%", height: "100%", resizeMode: "contain" },
  footer: { alignItems: "center", marginTop: 10 },
  footerText: { fontSize: 14, color: "#666", textAlign: "center" },
  linkText: { color: "#007AFF", textDecorationLine: "underline" },
});

export default LoginScreen;
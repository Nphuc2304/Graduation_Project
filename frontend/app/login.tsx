import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { getUser } from "@/src/services/productsServices";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Logic for logging in the user
    // console.log("Logging in with", { email, password });
    // navigation.navigate("HomeTabs");
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }
    await getUser(email, password, navigation);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/imgShop.jpg")}
          style={styles.pictur1}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Đăng Nhập</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#C7C7C7"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#C7C7C7"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueButtonText}>Đăng Nhập</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <Text style={styles.forgotPasswordText}>
        Quên mật khẩu? <Text style={styles.linkText}>Khôi phục tại đây</Text>
      </Text>

      {/* Social Media Login */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/icons/google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/icons/facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Bạn chưa có tài khoản?{" "}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.linkText}>Đăng ký ngay</Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },

  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },

  pictur1: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    height: 200,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginTop: 200,
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DDDDDD",
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

  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  forgotPasswordText: {
    fontSize: 14,
    color: "#007AFF",
    textAlign: "center",
    marginVertical: 10,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    width: "100%",
  },

  socialButton: {
    marginHorizontal: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    padding: 10,
    width: 50, // Ensure the buttons have consistent size
    height: 50, // Matching height and width for square shape
    justifyContent: "center",
    alignItems: "center",
  },

  socialIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  footerText: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginTop: 20,
  },

  linkText: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;

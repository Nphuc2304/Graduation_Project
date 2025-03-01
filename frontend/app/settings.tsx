import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Settings: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.appDfColor}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/icons/left.png")}
              style={styles.iconBack}
            />
          </TouchableOpacity>
          <Text style={styles.titleSettings}>Thiết Lập Tài Khoản</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.featureContainer}
            onPress={() => {
              navigation.navigate("UserInformation");
            }}
          >
            <Text style={styles.title}>Thông tin tài khoản</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/right.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureContainer}>
            <Text style={styles.title}>Kết nối mạng xã hội</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/right.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.featureContainer}
            onPress={() => {
              navigation.navigate("Address");
            }}
          >
            <Text style={styles.title}>Sổ địa chỉ</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/right.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureContainer}>
            <Text style={styles.title}>Thông tin thanh toán</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/right.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureContainer}>
            <Text style={styles.title}>Thiết lập bảo mật</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/right.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureContainer}>
            <Text style={styles.title}>Yêu cầu xoá tài khoản</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/right.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureContainer}>
            <Text style={styles.title}>Thiết lập thông báo</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/right.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.featureContainer}>
            <Text style={styles.title}>Phiên bản</Text>
            <Text style={styles.title}>4.160.1.1700647</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLogOut}>
        <Text style={styles.textLogOut}>Đăng Xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appDfColor: {
    backgroundColor: "#F8F8FF",
    height: "100%",
    justifyContent: "space-between",
  },
  header: {
    padding: 15,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: "#1E90FF",
    flexDirection: "row",
    alignItems: "center",
  },
  titleSettings: {
    width: "100%",
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  iconBack: {
    width: 20,
    height: 20,
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 8,
  },
  featureContainer: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#EEE9E9",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 11,
    color: "#333",
  },
  icon: {
    width: 20,
    height: 20,
  },
  buttonLogOut: {
    margin: 15,
    borderColor: "red",
    borderRadius: 5,
    padding: 12,
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textLogOut: {
    color: "red",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default Settings;

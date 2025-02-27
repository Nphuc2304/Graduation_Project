import { FlashList } from "@shopify/flash-list";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const UserInformation: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.appDfColor}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("@/assets/icons/left.png")}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <Text style={styles.titleSettings}>Thiết Lập Tài Khoản</Text>
      </View>
      <FlashList
        data={[1]}
        renderItem={() => {
          return (
            <View>
              <View style={styles.imgContainer}>
                <View style={styles.block}>
                  <TouchableOpacity style={styles.blockImg}>
                    <Image
                      style={styles.imgUser}
                      source={require("@/assets/icons/user_img_default.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Image
                    style={styles.icon}
                    source={require("@/assets/icons/user_2.png")}
                  />
                  <View style={styles.textBlock}>
                    <Text style={styles.title}>Họ & Tên</Text>
                    <Text style={styles.text}>Phuc Ngo</Text>
                  </View>
                </View>
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/next.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Image
                    style={styles.icon}
                    source={require("@/assets/icons/calendar.png")}
                  />
                  <View style={styles.textBlock}>
                    <Text style={styles.title}>Ngày sinh</Text>
                    <Text style={styles.text}>27/05/2005</Text>
                  </View>
                </View>
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/next.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Image
                    style={styles.icon}
                    source={require("@/assets/icons/gender.png")}
                  />
                  <View style={styles.textBlock}>
                    <Text style={styles.title}>Giới tính</Text>
                    <Text style={styles.text}>Nam</Text>
                  </View>
                </View>
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/next.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Image
                    style={styles.icon}
                    source={require("@/assets/icons/earth-globe.png")}
                  />
                  <View style={styles.textBlock}>
                    <Text style={styles.title}>Quốc tịch</Text>
                    <Text style={styles.text}>Việt Nam</Text>
                  </View>
                </View>
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/next.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Image
                    style={styles.icon}
                    source={require("@/assets/icons/telephone.png")}
                  />
                  <View style={styles.textBlock}>
                    <Text style={styles.title}>Số điện thoại</Text>
                    <Text style={styles.text}>0965189812</Text>
                  </View>
                </View>
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/next.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Image
                    style={styles.icon}
                    source={require("@/assets/icons/email.png")}
                  />
                  <View style={styles.textBlock}>
                    <Text style={styles.title}>Địa chỉ email</Text>
                    <Text style={styles.text}>hnthao2705@gmail.com</Text>
                  </View>
                </View>
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/next.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Image
                    style={styles.icon}
                    source={require("@/assets/icons/locked-computer.png")}
                  />
                  <View style={styles.textBlock}>
                    <Text style={styles.title}>Thiết lập mật khẩu</Text>
                  </View>
                </View>
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/next.png")}
                />
              </TouchableOpacity>
            <View style={styles.imgContainer}>
              <View style={styles.block}>
                <TouchableOpacity style={styles.blockImg}>
                  <Image
                    style={styles.imgUser}
                    source={require("@/assets/icons/user_img_default.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appDfColor: {
    backgroundColor: "#F8F8FF",
    flex: 1,
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
  imgContainer: {
    position: "relative",
    backgroundColor: "#1E90FF",
    width: "100%",
    height: 120,
    marginBottom: 70,
  },
  block: {
    width: "100%",
    height: "auto",
    position: "absolute",
    alignItems: "center",
    bottom: -60,
  },
  blockImg: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    borderColor: "#fff",
    borderWidth: 2,
  },
  imgUser: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  infoBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#D3D3D3",
  },
  textBlock: {
    marginLeft: 20,
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
  },
  text: {
    fontSize: 12,
  },
});

export default UserInformation;

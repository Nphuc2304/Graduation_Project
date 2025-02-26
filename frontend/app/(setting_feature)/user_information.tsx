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
});

export default UserInformation;

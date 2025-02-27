import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Address: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.appDfColor}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.iconClose}
        >
          <Image
            style={{ width: 12, height: 12 }}
            source={require("@/assets/icons/x.png")}
          />
        </TouchableOpacity>
        <Text style={styles.titlePage}>Sổ địa chỉ</Text>
      </View>
      <View style={styles.container1}>
        <Image
          style={styles.img1}
          source={require("@/assets/icons/location.png")}
        />
        <Text style={styles.text}>Bạn chưa có địa chỉ nào</Text>
        <TouchableOpacity
          style={styles.btnAddLocation}
          onPress={() => {
            navigation.navigate("Location");
          }}
        >
          <Text style={styles.textButton}>Thêm địa chỉ mới</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appDfColor: {
    backgroundColor: "#F8F8FF",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  iconClose: {
    position: "absolute",
    left: 20,
    top: 25,
  },
  titlePage: {
    fontSize: 14,
    fontWeight: "600",
  },
  container1: {
    padding: 20,
    alignItems: "center",
  },
  img1: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 12,
    marginVertical: 20,
  },
  btnAddLocation: {
    width: "100%",
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: "#1C86EE",
  },
  textButton: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Address;

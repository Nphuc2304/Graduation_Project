import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Address {
  name: string;
  phoneNumber: string;
  address: string;
  status: boolean;
}

const Address: React.FC = ({ navigation }: any) => {
  const [addressItem, setAddressItem] = useState<Address[]>([]);
  /////////////////////////
  useEffect(() => {
    const data = [
      {
        name: "Ngô Tấn Thiên Phúc",
        phoneNumber: "0965189812",
        address:
          "bcons suối tiên, 45 Tân Lập, Phường Đông Hoà, Thành phố Dĩ An, Bình Dương",
        status: true,
      },
    ];
    setAddressItem(data);
  }, []);
  /////////////////////////
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
      {addressItem == null ? (
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
      ) : (
        <View style={styles.appDfColor}>
          <FlashList
            data={addressItem}
            renderItem={({ item }) => {
              return (
                <View style={styles.addressItemContainer}>
                  <View style={styles.rowName}>
                    <Text style={styles.titlePage}>
                      {item.name} | {item.phoneNumber}
                    </Text>
                    <Image source={require("@/assets/icons/dots.png")} />
                  </View>
                  <Text style={styles.textAddress}>{item.address}</Text>
                  <Text style={styles.textDef}>
                    {item.status ? "Mặc định" : ""}
                  </Text>
                </View>
              );
            }}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnAddLocation}
              onPress={() => {
                navigation.navigate("Location");
              }}
            >
              <Text style={styles.textButton}>Thêm địa chỉ mới</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  addressItemContainer: {
    backgroundColor: "#fff",
    borderTopColor: "gray",
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  rowName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textAddress: {
    fontSize: 12,
    color: "gray",
    marginVertical: 10,
  },
  textDef: {
    color: "#00AA00",
    fontSize: 12,
  },
  btnContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Address;

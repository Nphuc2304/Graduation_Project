import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FlashList } from "@shopify/flash-list";
import StoreScreen from "../components/StoreScreen";
import StoreProfile from "@/components/StoreProfile";
import StoreProduct from "@/components/StoreProduct";

type menuItem = {
  id: number;
  name: String;
};

const MENU: menuItem[] = [
  {
    id: 1,
    name: "Cửa hàng",
  },
  {
    id: 2,
    name: "Sản phẩm",
  },
  {
    id: 3,
    name: "Bộ sưa tập",
  },
  {
    id: 4,
    name: "Giá sốc hôm nay",
  },
  {
    id: 5,
    name: "Hồ sơ cửa hàng",
  },
];

const SellerPage = () => {
  const [menu, setMenu] = useState<menuItem[]>(MENU);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const renderMenu = ({ item, index }: { item: menuItem; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setCurrentIndex(index)}
      >
        <Text style={styles.textM}>{item.name}</Text>
        <Text
          style={[
            styles.chooseMenu,
            index == currentIndex && { backgroundColor: "#D7F4FB" },
          ]}
        ></Text>
      </TouchableOpacity>
    );
  };

  const renderContentByMenu = () => {
    switch (currentIndex) {
      case 0:
        return <StoreScreen />;
      case 1:
        return <StoreProduct />;
      case 4:
        return <StoreProfile />;
      default:
        return <StoreScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={styles.navContainer}>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons/left.png")}
              style={{ width: 28, height: 28 }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../assets/icons/search.png")}
              style={[
                styles.iconNav,
                {
                  position: "absolute",
                  width: 18,
                  height: 18,
                  left: 20,
                  top: 10,
                },
              ]}
            />
            <TextInput
              placeholder="Tìm kiếm tại cửa hàng"
              placeholderTextColor={"#7EA1D7"}
              style={{
                borderColor: "#497BC2",
                borderWidth: 0.5,
                paddingVertical: 10,
                paddingLeft: 40,
                borderRadius: 5,
                marginHorizontal: 10,
              }}
            ></TextInput>
          </View>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons/cart.png")}
              style={[
                styles.iconNav,
                {
                  marginRight: 18,
                  marginLeft: 10,
                },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text
              style={{
                width: 5,
                height: 5,
                backgroundColor: "#F2FEFF",
                borderRadius: "50%",
                marginHorizontal: 2,
              }}
            ></Text>
            <Text
              style={{
                width: 5,
                height: 5,
                backgroundColor: "#F2FEFF",
                borderRadius: "50%",
                marginHorizontal: 2,
              }}
            ></Text>
            <Text
              style={{
                width: 5,
                height: 5,
                backgroundColor: "#F2FEFF",
                borderRadius: "50%",
                marginHorizontal: 2,
              }}
            ></Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            alignItems: "center",
            marginVertical: 15,
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/images/img_test.jpg")}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginRight: 10,
            }}
          />
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text
              style={{
                fontSize: 20,
                color: "#FFFFFF",
                fontWeight: "semibold",
                alignSelf: "flex-start",
              }}
            >
              Tiki Trading
              <Image
                source={require("../assets/icons/right.png")}
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "white",
                  borderRadius: 6,
                  marginHorizontal: 10,
                }}
              />
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 10,
                fontWeight: "bold",
                padding: 1,
                paddingHorizontal: 5,
                marginTop: 3,
                backgroundColor: "#1785FE",
                alignSelf: "flex-start",
              }}
            >
              OFFICIAL
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-start",
              }}
            >
              <Image
                source={require("../assets/icons/start.png")}
                style={[styles.iconS, { tintColor: "#FEBF13" }]}
              />
              <Text style={{ lineHeight: 13, fontSize: 10, color: "#ACC4E7" }}>
                {" "}
                4,7 |{" "}
              </Text>
              <Image
                source={require("../assets/icons/user.png")}
                style={[styles.iconS, { tintColor: "#ACC4E7" }]}
              />
              <Text style={{ lineHeight: 13, fontSize: 10, color: "#ACC4E7" }}>
                507.9 k+
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnFollow}>
            <Text style={{ color: "#FFFFFF" }}>Theo dõi</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 20, paddingRight: 20 }}>
          <FlashList
            data={menu}
            renderItem={renderMenu}
            extraData={currentIndex}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 45 }} />}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>{renderContentByMenu()}</View>
    </View>
  );
};

export default SellerPage;

const styles = StyleSheet.create({
  chooseMenu: {
    width: "40%",
    height: 3,
    borderRadius: 5,
  },
  textM: {
    fontSize: 16,
    color: "#D7F4FB",
    marginBottom: 5,
  },
  menuItem: {
    justifyContent: "center",
    alignSelf: "flex-start",
    alignItems: "center",
    textAlign: "center",
  },
  btnFollow: {
    backgroundColor: "#0073E4",
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: "center",
    borderRadius: 5,
  },
  iconS: {
    width: 13,
    height: 13,
    marginHorizontal: 5,
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  headerContainer: {
    minHeight: 150,
    backgroundColor: "#134993",
    paddingVertical: 10,
  },
  iconNav: {
    width: 20,
    height: 20,
    tintColor: "#F2FEFF",
  },
});

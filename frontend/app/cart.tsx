import CartItem from "@/components/cart_item";
import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Checkbox } from "react-native-paper";

const Cart: React.FC = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  //////////////////////
  const productData = [
    {
      id: "1",
      image:
        "https://i.pinimg.com/736x/81/cf/82/81cf8275972c05cf87b45156894c0d5b.jpg" as any,
      name: "Sản phẩm 1",
      price: 100000,
      sale: 10,
      shopName: "Cửa hàng A",
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/736x/81/cf/82/81cf8275972c05cf87b45156894c0d5b.jpg" as any,
      name: "Sản phẩm 2",
      price: 150000,
      sale: 5,
      shopName: "Cửa hàng B",
    },
  ];

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
        <Text style={styles.titlePage}>Giỏ hàng</Text>
      </View>
      <View style={styles.selectedAllContainer}>
        <View style={styles.checkBlock}>
          <Checkbox
            status={isChecked ? "checked" : "unchecked"}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text>Tất cả ( sản phẩm)</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("@/assets/icons/delete.png")} />
        </TouchableOpacity>
      </View>
      <FlashList
        data={[1]}
        renderItem={() => (
          <View>
            <FlashList
              data={productData}
              refreshing={false}
              renderItem={({ item }) => (
                <CartItem
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  sale={item.sale}
                  navigation={navigation}
                  shopName={item.shopName}
                />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      />
      <View style={styles.blockPayment}>
        <View style={styles.payContainer}>
          <View>
            <Text>Tổng tiền</Text>
            <Text style={styles.textTotalPrice}>Vui lòng chọn sản phẩm</Text>
          </View>
          <TouchableOpacity style={styles.btnPay}>
            <Text style={styles.textPay}>Mua hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appDfColor: {
    backgroundColor: "#F8F8FF",
    height: "100%",
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
  selectedAllContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 10,
    backgroundColor: "#fff",
    marginBottom: 2,
  },
  checkBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  blockPayment: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "#EEE9E9",
    backgroundColor: "#fff",
  },
  payContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  textTotalPrice: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  btnPay: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  textPay: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Cart;

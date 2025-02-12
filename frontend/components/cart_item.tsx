import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Checkbox } from "react-native-paper";

interface cartItem {
  id: string;
  image: ImageSourcePropType;
  name: string;
  price: number;
  sale: number;
  shopName: string;
  navigation: any;
}

const CartItem: React.FC<cartItem> = ({
  id,
  image,
  name,
  price,
  sale,
  shopName,
  navigation,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [count, setCount] = useState("1");

  const renderPrice = () => {
    if (sale > 0) {
      const discountedPrice = price * (1 - sale / 100);
      return (
        <View style={styles.priceContainer}>
          <Text style={styles.salePrice}>
            {discountedPrice.toLocaleString()} ₫
          </Text>
          <View style={styles.containerSale}>
            <Text style={styles.saleP}>-{sale}%</Text>
            <Text style={styles.originalPrice}>{price.toLocaleString()} ₫</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.priceContainer}>
          <Text style={styles.defaultPrice}>{price.toLocaleString()}₫</Text>
        </View>
      );
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", marginBottom: 15 }}>
      <View style={styles.containerShop}>
        <Image
          style={styles.icon}
          source={require("@/assets/icons/shop.png")}
        />
        <Text style={styles.textShop}>{shopName}</Text>
        <Image
          style={styles.icon}
          source={require("@/assets/icons/next.png")}
        />
      </View>
      <View style={styles.containerItem}>
        <Checkbox
          status={isChecked ? "checked" : "unchecked"}
          onPress={() => setIsChecked(!isChecked)}
        />
        <Image
          style={styles.imgItem}
          source={{ uri: image.toLocaleString() }}
        />
        <View>
          <Text numberOfLines={2} style={styles.nameItem}>
            {name}
          </Text>
          <View>{renderPrice()}</View>
          <View style={styles.containerCount}>
            <View style={styles.blockCount}>
              <TouchableOpacity style={styles.btnChangeCount}>
                <Text>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.inputCount}
                value={count}
                onChangeText={(newText) => setCount(newText)}
                placeholder="1"
              />
              <TouchableOpacity style={styles.btnChangeCount}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.del}>Xoá</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.voucherContainer}>
        <View style={styles.rowContainer}>
          <Image
            style={styles.icon}
            source={require("@/assets/icons/coupon.png")}
          />
          <Text style={styles.textVoucher}>Thêm mã khuyến mãi của Shop</Text>
        </View>
        <Image
          style={styles.icon}
          source={require("@/assets/icons/next.png")}
        />
      </View>
      <View style={styles.freeShippingContainer}>
        <Image source={require("@/assets/icons/free-delivery.png")} />
        <Text style={styles.textFreeShipping}>
          Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 10,
    color: "gray",
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  salePrice: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  defaultPrice: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 12.5,
  },
  containerSale: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  saleP: {
    marginRight: 5,
    padding: 3,
    backgroundColor: "#B9D3EE",
    fontSize: 10,
    borderRadius: 10,
  },
  containerShop: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  textShop: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    marginHorizontal: 10,
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  imgItem: {
    width: 90,
    height: 120,
    marginHorizontal: 15,
  },
  nameItem: {
    color: "#000",
    fontSize: 13,
  },
  containerCount: {
    width: 160,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blockCount: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EEE9E9",
  },
  btnChangeCount: {
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  inputCount: {
    outlineColor: "transparent",
    width: 40,
    textAlign: "center",
    fontSize: 14,
  },
  del: {
    color: "blue",
  },
  voucherContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#EEE9E9",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textVoucher: {
    fontSize: 14,
    marginLeft: 10,
    color: "#000",
  },
  textFreeShipping: {
    marginLeft: 10,
    fontSize: 12,
    color: "#000",
  },
  freeShippingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#EEE9E9",
  },
});

export default CartItem;

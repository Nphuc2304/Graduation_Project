import CartItem from "@/components/cart_item";
import { getCartId, getCartItem } from "@/src/services/productsServices";
import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
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

interface cartItem {
  _id: string;
  image: ImageSourcePropType;
  name: string;
  price: number;
  quantity: number;
  sale: number;
  shopName: string;
  navigation: any;
  status: boolean;
  productId: product;
};

interface product {
  id: string;
  image: ImageSourcePropType;
  name: string;
  sale: number;
}

const Cart: React.FC = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [userId, setUserId] = useState("678268b47d7fd692d23161c9");
  const [cartId, setCartId] = useState("");
  const [cartData, setCartData] = useState<cartItem[]>();
  const [total, setTotal] = useState();
  const [finalPrice, setFinalPrice] = useState();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCartId(userId);
        setCartId(data.cart);
      } catch (error) {
        console.error("Failed to fetch cartId", error);
      }
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const data = await getCartItem(cartId);
        if (!cartId) return;
        const cartItemData = data.cartItems.map((item: cartItem) => ({
          id: item._id,
          image: item.productId.image || "https://pixnio.com/free-images/2017/09/26/2017-09-26-07-22-55-1536x1021.jpg",
          name: item.productId.name || "Con meo",
          price: item.price || 10000,
          quantity: item.quantity || 1,
          sale: item.productId.sale || 1,
          shopName: item.shopName || "Cua hang ABCD",
          status: item.status ?? true,
        }));
        setCartData(cartItemData);
        setTotal(data.totalPrice);
        setFinalPrice(data.finalPrice);
      } catch (error) {
        console.error("Failed to fetch cart item", error);
      }
    };
    fetchCartItem();
  }, [cartId]);


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
              data={cartData}
              refreshing={false}
              renderItem={({ item }) => (
                <CartItem
                  _id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  sale={item.sale}
                  navigation={navigation}
                  shopName={item.shopName}
                  status={item.status}
                  quantity={item.quantity}/>
              )}
              keyExtractor={(item) => item._id?.toString() ?? Math.random().toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      />
      <View style={styles.blockPayment}>
        <View style={styles.payContainer}>
          <View>
            <Text>Tổng tiền {finalPrice}đ</Text>
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

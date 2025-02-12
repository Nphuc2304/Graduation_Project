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

const DetailProduct: React.FC = ({ navigation }: any) => {
  ////////////////////
  const sale = 20;
  const price = 27000000;
  ////////////////////
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
    <SafeAreaView style={styles.appDfColor}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={styles.icon}
            source={require("@/assets/icons/left-arrow.png")}
          />
        </TouchableOpacity>
        <View style={styles.blockIcon}>
          <TouchableOpacity style={styles.headerIcon}>
            <Image
              style={styles.icon}
              source={require("@/assets/icons/ai.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Image
              style={styles.icon}
              source={require("@/assets/icons/shopping-cart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Image
              style={styles.icon}
              source={require("@/assets/icons/option.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlashList
        data={[1]}
        refreshing={false}
        renderItem={() => (
          <View>
            <Image
              style={styles.imgProduct}
              source={{
                uri: "https://i.pinimg.com/736x/d1/78/6f/d1786f54d137c24b93c017c9ba533087.jpg",
              }}
            />
            <View style={styles.container}>
              <Text style={styles.name}>
                Hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
              </Text>
              <View>{renderPrice()}</View>
              <View style={styles.rowBlock}>
                <Image source={require("@/assets/icons/coupon.png")} />
                <Text style={styles.textCoupon}>
                  Giảm 25.500 đ từ mã khuyến mãi của nhà bán
                </Text>
              </View>
            </View>
            <View style={styles.addCartContainer}>
              <TouchableOpacity style={styles.btnAddToCart}>
                <Text style={styles.textAddToCart}>Thêm vào giỏ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnBuy}>
                <Text style={styles.textBuy}>Mua ngay</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>Thông tin vận chuyển</Text>
              <View
                style={[
                  styles.rowBlock,
                  { justifyContent: "space-between", marginTop: 10 },
                ]}
              >
                <View style={styles.rowBlock}>
                  <Image
                    style={styles.iconPlaceholder}
                    source={require("@/assets/icons/placeholder.png")}
                  />
                  <Text
                    style={{ color: "gray", fontSize: 12, marginHorizontal: 5 }}
                  >
                    Giao đến
                  </Text>
                  <Text numberOfLines={1} style={styles.address}>
                    45 Tân Lập, Đông Hoà, Dĩ An, Bình Dương
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.editAddress}>Đổi</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>Ưu đãi khác</Text>
              <View
                style={[styles.rowBlock, { justifyContent: "space-between" }]}
              >
                <Text style={styles.textNormal}>4 mã giảm giá</Text>
                <TouchableOpacity>
                  <Image source={require("@/assets/icons/next.png")} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>Yên tâm mua sắm</Text>
              <View style={styles.blockWarrant}>
                <Image
                  style={styles.iconWarrant}
                  source={require("@/assets/icons/box.png")}
                />
                <Text style={styles.textNormal}>
                  Được đồng kiểm khi nhận hàng
                </Text>
              </View>
              <View style={styles.blockWarrant}>
                <Image
                  style={styles.iconWarrant}
                  source={require("@/assets/icons/repayment.png")}
                />
                <Text style={styles.textNormal}>
                  Được hoàn tiền 200% nếu là hàng giả
                </Text>
              </View>
              <View style={styles.blockWarrant}>
                <Image
                  style={styles.iconWarrant}
                  source={require("@/assets/icons/reorder.png")}
                />
                <Text style={styles.textNormal}>
                  Đổi trả miễn phí trong 30 ngày
                </Text>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>Thông tin chi tiết</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
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
    marginHorizontal: 10,
    padding: 3,
    backgroundColor: "#B9D3EE",
    fontSize: 10,
    borderRadius: 10,
  },
  appDfColor: {
    backgroundColor: "#F8F8FF",
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    zIndex: 1,
  },
  blockIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    padding: 8,
    backgroundColor: "#333333",
    borderRadius: "50%",
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
  imgProduct: {
    width: "100%",
    height: 420,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
  },
  rowBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCoupon: {
    fontSize: 12,
    marginLeft: 10,
    color: "gray",
  },
  addCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  btnAddToCart: {
    width: "48%",
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textAddToCart: {
    color: "blue",
  },
  btnBuy: {
    width: "48%",
    backgroundColor: "red",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textBuy: {
    color: "#fff",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  iconPlaceholder: {
    width: 20,
    height: 20,
    tintColor: "gray",
  },
  address: {
    width: 200,
    fontSize: 12,
    fontWeight: "500",
  },
  editAddress: {
    fontSize: 12,
    fontWeight: "500",
    color: "blue",
  },
  textNormal: {
    fontSize: 14,
  },
  blockWarrant: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#EEE9E9",
  },
  iconWarrant: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "blue",
  },
});

export default DetailProduct;

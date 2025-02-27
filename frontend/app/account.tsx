import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  ActivityIndicator,
  View,
} from "react-native";
import ProductItem from "@/components/product_item";
import ProductItem1 from "@/components/product_item_1";
import { FlashList } from "@shopify/flash-list";
import React, { useState, useEffect } from "react";
import { getAllProducts } from "@/src/services/productsServices";

interface Product {
  _id: string;
  image: ImageSourcePropType;
  name: string;
  rate: number;
  price: number;
  sale: number;
  brandName: string;
}

const Account = ({ navigation, route }: any) => {
  const [loading, setLoading] = useState(false);
  const [suggestProducts, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        console.log("Fetched products: ", data);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={styles.appDfColor}>
      <View style={styles.header}>
        <Text style={styles.textBold}>Tài khoản</Text>
        <View style={styles.rowBlock}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image
              source={require("../assets/icons/setting.png")}
              style={styles.iconBar}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image
              source={require("../assets/icons/shopping-cart.png")}
              style={styles.iconBar}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlashList
        data={[1]}
        renderItem={() => (
          <View>
            <View style={styles.container}>
              <View style={styles.accountContainer}>
                <View style={styles.accountImage}>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={require("../assets/images/default_img.jpg")}
                  />
                </View>
                <View>
                  <Text style={styles.textBold}>
                    Chào mừng bạn đến với TypeScript!
                  </Text>
                  <TouchableOpacity
                    style={styles.logIn}
                    onPress={() => {
                      navigation.navigate("LogIn");
                    }}
                  >
                    <Text style={styles.textLinkBlue}>
                      Đăng nhập / tạo tài khoản
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.rowBlock, { marginTop: 10 }]}>
                <TouchableOpacity
                  style={[styles.accountBlock, { backgroundColor: "#FFBBFF" }]}
                >
                  <Text style={styles.textGray}>Astra</Text>
                  <Text style={styles.text}>Tìm thêm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.accountBlock, { backgroundColor: "#FFFFE0" }]}
                >
                  <Text style={styles.textGray}>Tiki xu</Text>
                  <Text style={styles.text}>Tìm thêm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.accountBlock, { backgroundColor: "#C6E2FF" }]}
                >
                  <Text style={styles.textGray}>Mã giảm giá</Text>
                  <Text style={styles.text}>Tìm thêm</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container2}>
              <View style={styles.rowBlock}>
                <Text style={styles.textBold}>Đơn hàng của tôi</Text>
                <Image
                  source={require("../assets/icons/next.png")}
                  style={styles.iconNext}
                />
              </View>
              <View style={[styles.rowBlock, { marginTop: 10 }]}>
                <View style={styles.featureBlock}>
                  <View style={styles.iconFeatureBlock}>
                    <Image
                      source={require("../assets/icons/wallet.png")}
                      style={styles.iconFeature}
                    />
                  </View>
                  <Text style={[styles.textGray, { textAlign: "center" }]}>
                    Chờ thanh toán
                  </Text>
                </View>
                <View style={styles.featureBlock}>
                  <View style={styles.iconFeatureBlock}>
                    <Image
                      source={require("../assets/icons/file.png")}
                      style={styles.iconFeature}
                    />
                  </View>
                  <Text style={[styles.textGray, { textAlign: "center" }]}>
                    Đang xử lý
                  </Text>
                </View>
                <View style={styles.featureBlock}>
                  <View style={styles.iconFeatureBlock}>
                    <Image
                      source={require("../assets/icons/delivery.png")}
                      style={styles.iconFeature}
                    />
                  </View>
                  <Text style={[styles.textGray, { textAlign: "center" }]}>
                    Đang vận chuyển
                  </Text>
                </View>
                <View style={styles.featureBlock}>
                  <View style={styles.iconFeatureBlock}>
                    <Image
                      source={require("../assets/icons/delivered.png")}
                      style={styles.iconFeature}
                    />
                  </View>
                  <Text style={[styles.textGray, { textAlign: "center" }]}>
                    Đã giao
                  </Text>
                </View>
                <View style={styles.featureBlock}>
                  <View style={styles.iconFeatureBlock}>
                    <Image
                      source={require("../assets/icons/reload.png")}
                      style={styles.iconFeature}
                    />
                  </View>
                  <Text style={[styles.textGray, { textAlign: "center" }]}>
                    Đổi trả
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.container2}>
              <View style={styles.rowBlock}>
                <Text style={styles.textBold}>Đánh giá sản phẩm</Text>
                <Image
                  source={require("../assets/icons/next.png")}
                  style={styles.iconNext}
                />
              </View>
            </View>
            <View style={styles.container2}>
              <View style={styles.rowBlock}>
                <Text style={styles.textBold}>Bạn có thể thích</Text>
              </View>
            </View>
            <FlatList
              data={suggestProducts}
              horizontal={true}
              refreshing={false}
              style={styles.listMaybeLove}
              renderItem={({ item }) => (
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  rate={item.rate}
                  price={item.price}
                  sale={item.sale}
                  brandName={item.brandName}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
            />
            <View style={styles.container2}>
              <View style={styles.rowBlock}>
                <Text style={styles.textBold}>Trạm dịch vụ tiện ích</Text>
                <Image
                  source={require("../assets/icons/next.png")}
                  style={styles.iconNext}
                />
              </View>
              <View style={styles.banner}>
                <Image
                  source={require("../assets/images/img_banner_account.png")}
                  style={styles.imgBanner}
                  resizeMode="cover"
                />
              </View>
            </View>
            <View style={styles.container2}>
              <View style={styles.rowBlock}>
                <Text style={styles.textBold}>Quan tâm</Text>
              </View>
              <View style={[styles.rowBlock2, { marginTop: 10 }]}>
                <View style={styles.featureBlock}>
                  <View style={styles.iconFeatureBlock}>
                    <Image
                      source={require("../assets/icons/view.png")}
                      style={styles.iconFeature}
                    />
                  </View>
                  <Text style={[styles.textGray, { textAlign: "center" }]}>
                    Đã xem
                  </Text>
                </View>
                <View style={styles.featureBlock}>
                  <View style={styles.iconFeatureBlock}>
                    <Image
                      source={require("../assets/icons/love.png")}
                      style={styles.iconFeature}
                    />
                  </View>
                  <Text style={[styles.textGray, { textAlign: "center" }]}>
                    Yêu thích
                  </Text>
                </View>
                <View style={styles.featureBlock}>
                  <View style={styles.iconFeatureBlock}>
                    <Image
                      source={require("../assets/icons/checkout.png")}
                      style={styles.iconFeature}
                    />
                  </View>
                  <Text style={[styles.textGray, { textAlign: "center" }]}>
                    Mua lại
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.container2}>
              <View style={styles.rowBlock}>
                <Text style={styles.textBold}>Gợi ý hôm nay</Text>
              </View>
            </View>
            <FlatList
              data={suggestProducts}
              horizontal={false}
              numColumns={2}
              refreshing={false}
              style={styles.listTopDeal}
              renderItem={({ item }) => (
                <ProductItem1
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  rate={item.rate}
                  price={item.price}
                  sale={item.sale}
                  brandName={item.brandName}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#FFBBFF" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  appDfColor: {
    backgroundColor: "#F8F8FF",
    flex: 1,
  },
  header: {
    position: "fixed",
    width: "100%",
    padding: 10,
    height: 50,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 1,
  },
  textBold: {
    fontSize: 14,
    fontWeight: "bold",
  },
  iconBar: {
    margin: 10,
    width: 24,
    height: 24,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountImage: {
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: 20,
  },
  logIn: {
    width: "70%",
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 1,
    padding: 4,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textLinkBlue: {
    color: "blue",
    fontSize: 12,
    lineHeight: 20,
  },
  rowBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountBlock: {
    padding: 6,
    width: "30%",
    borderRadius: 8,
    borderColor: "#F8F8FF",
    borderWidth: 1,
  },
  textGray: {
    fontSize: 10,
    color: "#333",
  },
  text: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
  },
  container2: {
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 8,
  },
  iconNext: {
    width: 20,
    height: 20,
  },
  featureBlock: {
    width: "20%",
    alignItems: "center",
  },
  iconFeatureBlock: {
    width: "60%",
    borderRadius: 10,
    padding: 8,
    marginBottom: 5,
    backgroundColor: "#C6E2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  iconFeature: {
    width: 23,
    height: 23,
  },
  listMaybeLove: {
    backgroundColor: "#fff",
    padding: 5,
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginTop: 10,
    overflow: "hidden",
  },
  imgBanner: {
    width: "100%",
    height: "100%",
  },
  featureContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowBlock2: {
    flexDirection: "row",
  },
  listTopDeal: {
    padding: 5,
  },
});

export default Account;

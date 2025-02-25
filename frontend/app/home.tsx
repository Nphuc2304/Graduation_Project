import ProductItem from "@/components/product_item";
import ProductItem1 from "@/components/product_item_1";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Dimensions,
  Animated,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getAllProducts } from "@/src/services/productsServices";
import { saleProducts } from "@/src/services/productsServices";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "react-native-safe-area-context";

interface Product {
  id: string;
  image: ImageSourcePropType;
  name: string;
  rate: number;
  price: number;
  sale: number;
  brandName: string;
}

const Home = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sugesstProducts, setProducts] = useState<Product[]>([]);
  const [salesProducts, setSaleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const fetchDiscountedProducts = async () => {
      try {
        const data = await saleProducts();
        setSaleProducts(data);
      } catch (error) {
        console.error("Error fetching discounted products:", error);
      }
    };

    fetchDiscountedProducts();
  }, []);

  const imgCarousel = [
    {
      id: 1,
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: 2,
      image: require("../assets/images/banner2.jpg"),
    },
    {
      id: 3,
      image: require("../assets/images/banner3.jpg"),
    },
    {
      id: 4,
      image: require("../assets/images/banner4.jpg"),
    },
    {
      id: 5,
      image: require("../assets/images/banner5.jpg"),
    },
  ];

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {imgCarousel.map((_, index) => (
          <Text
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : null,
            ]}
          >
            ●
          </Text>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.searchAndCartContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.searchContainer}
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Image
              source={require("../assets/icons/search.png")}
              style={styles.searchIcon}
            />
            <Text style={styles.searchInput}>Tìm kiếm...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Image
              source={require("../assets/icons/shopping-cart.png")}
              style={styles.cartIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlashList
        data={[1]}
        renderItem={() => (
          <View>
            <View style={styles.appDfColor}>
              <View style={styles.appColorBg}>
                <View style={styles.carouselWrapper}>
                  <Image
                    source={require("../assets/images/banner1.jpg")}
                    style={styles.carouselImage}
                  />
                </View>

                {renderDots()}

                <View style={styles.rowContainer}>
                  <View style={styles.container2}>
                    <Image
                      source={require("@/assets/images/img_test.jpg")}
                      style={styles.image}
                    />
                    <Text style={styles.text}>pppp</Text>
                  </View>
                  <View style={styles.container2}>
                    <Image
                      source={require("@/assets/images/img_test.jpg")}
                      style={styles.image}
                    />
                    <Text style={styles.text}>pppp</Text>
                  </View>
                  <View style={styles.container2}>
                    <Image
                      source={require("@/assets/images/img_test.jpg")}
                      style={styles.image}
                    />
                    <Text style={styles.text}>pppp</Text>
                  </View>
                  <View style={styles.container2}>
                    <Image
                      source={require("@/assets/images/img_test.jpg")}
                      style={styles.image}
                    />
                    <Text style={styles.text}>pppp</Text>
                  </View>
                  <View style={styles.container2}>
                    <Image
                      source={require("@/assets/images/img_test.jpg")}
                      style={styles.image}
                    />
                    <Text style={styles.text}>pppp</Text>
                  </View>
                </View>
              </View>
              <View style={styles.addressContainer}>
                <Image
                  source={require("../assets/icons/placeholder.png")}
                  style={styles.mapIcon}
                />
                <Text style={styles.textSize}>Giao đến: </Text>
              </View>
              <View style={{ backgroundColor: "#fff" }}>
                <View style={styles.headerTopDeal}>
                  <Image
                    source={require("../assets/images/top_deal.png")}
                    style={styles.topDealImg}
                  />
                  <Text style={styles.textLink}>Xem tất cả</Text>
                </View>
                <FlatList
                  data={salesProducts}
                  horizontal={true}
                  refreshing={false}
                  style={styles.listTopDeal}
                  renderItem={({ item }) => (
                    <ProductItem
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      rate={item.rate}
                      price={item.price}
                      sale={item.sale}
                      brandName={item.brandName}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={{ backgroundColor: "#fff" }}>
                <View style={styles.headerTopDeal}>
                  <Text style={styles.titleList}>Hàng ngoại giá hot</Text>
                  <Text style={styles.textLink}>Xem tất cả</Text>
                </View>
                <FlatList
                  data={sugesstProducts}
                  horizontal={true}
                  refreshing={false}
                  style={styles.listTopDeal}
                  renderItem={({ item }) => (
                    <ProductItem
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      rate={item.rate}
                      price={item.price}
                      sale={item.sale}
                      brandName={item.brandName}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={{ marginTop: 8 }}>
                <View style={styles.headerTopDeal}>
                  <Text style={styles.titleList}>Gợi ý hôm nay</Text>
                </View>
              </View>
              <FlatList
                data={sugesstProducts}
                horizontal={false}
                numColumns={2}
                refreshing={false}
                style={styles.listTopDeal}
                renderItem={({ item }) => (
                  <ProductItem1
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    rate={item.rate}
                    price={item.price}
                    sale={item.sale}
                    brandName={item.brandName}
                    navigation={navigation}
                  />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
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
  appDfColor: {
    backgroundColor: "#F8F8FF",
  },
  appColorBg: {
    backgroundColor: "#fff",
  },
  textSize: {
    fontSize: 12,
  },
  container: {
    position: "fixed",
    width: "100%",
    padding: 10,
    zIndex: 1,
    top: 0,
    backgroundColor: "#fff",
  },
  searchAndCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
  },
  cartIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  searchInput: {
    fontSize: 12,
    color: "#333",
    borderWidth: 0,
    outlineColor: "transparent",
  },
  clearIcon: {
    marginLeft: 10,
  },
  carouselWrapper: {
    overflow: "hidden",
  },
  carousel: {
    marginTop: 20,
  },
  carouselImage: {
    width: Dimensions.get("window").width - 20,
    height: 170,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    fontSize: 20,
    margin: 3,
    color: "#bbb",
  },
  activeDot: {
    color: "#007bff",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  container2: {
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 10,
    color: "#333",
  },
  addressContainer: {
    marginTop: 8,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  mapIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  headerTopDeal: {
    marginTop: 8,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  topDealImg: {
    width: "50%",
    height: 20,
  },
  textLink: {
    fontSize: 14,
    color: "blue",
  },
  listTopDeal: {
    padding: 5,
  },
  titleList: {
    fontSize: 16,
    fontWeight: "bold",
  },
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
});

export default Home;

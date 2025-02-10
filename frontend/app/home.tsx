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
  const scrollX = useRef(new Animated.Value(0)).current;

  const [sugesstProducts, setProducts] = useState<Product[]>([]);
  const [salesProducts, setSaleProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        console.log("Fetched products: ", data);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgCarousel.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(scrollX, {
      toValue: -(currentIndex * Dimensions.get("window").width),
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  const imgCarousel = [
    require("../assets/images/banner1.jpg"),
    require("../assets/images/banner2.jpg"),
    require("../assets/images/banner3.jpg"),
    require("../assets/images/banner4.jpg"),
    require("../assets/images/banner5.jpg"),
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
  // dữ liệu test
  const data = [
    {
      id: "1",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: "2",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: "3",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: "4",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: "5",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
  ];

  const products2 = [
    {
      id: "1",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 1",
      rate: 4.5,
      price: 100000,
      sale: 10,
      brandName: "Thương hiệu A",
    },
    {
      id: "2",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 2",
      rate: 4.0,
      price: 150000,
      sale: 5,
      brandName: "Thương hiệu B",
    },
    {
      id: "3",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 3",
      rate: 4.7,
      price: 200000,
      sale: 0,
      brandName: "Thương hiệu C",
    },
    {
      id: "4",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 4",
      rate: 3.5,
      price: 120000,
      sale: 0,
      brandName: "Thương hiệu D",
    },
    {
      id: "5",
      image:
        "https://i.pinimg.com/736x/b9/7c/31/b97c31a1b9f39a42cf06e60f024ab4df.jpg",
      name: "Sản phẩm 5",
      rate: 4.8,
      price: 250000,
      sale: 0,
      brandName: "Thương hiệu E",
    },
    {
      id: "6",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 6",
      rate: 3.9,
      price: 180000,
      sale: 0,
      brandName: "Thương hiệu F",
    },
    {
      id: "7",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 7",
      rate: 4.2,
      price: 220000,
      sale: 0,
      brandName: "Thương hiệu G",
    },
    {
      id: "8",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 8",
      rate: 4.3,
      price: 160000,
      sale: 0,
      brandName: "Thương hiệu H",
    },
    {
      id: "9",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 9",
      rate: 4.0,
      price: 130000,
      sale: 0,
      brandName: "Thương hiệu I",
    },
    {
      id: "10",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 10",
      rate: 4.6,
      price: 210000,
      sale: 15,
      brandName: "Thương hiệu J",
    },
  ];
  //////////////////////////

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
                  <Animated.View
                    style={{
                      flexDirection: "row",
                      transform: [{ translateX: scrollX }],
                    }}
                  >
                    {imgCarousel.map((item, index) => (
                      <Image
                        key={index}
                        source={item}
                        style={styles.carouselImage}
                      />
                    ))}
                  </Animated.View>
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
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                />
              </View>
              <View style={{ backgroundColor: "#fff" }}>
                <View style={styles.headerTopDeal}>
                  <Text style={styles.titleList}>Hàng ngoại giá hot</Text>
                  <Text style={styles.textLink}>Xem tất cả</Text>
                </View>
                <FlatList
                  data={products2}
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
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
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
});

export default Home;

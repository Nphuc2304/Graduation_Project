import ImageWithTextComponent from "@/components/feature_block";
import ProductItem from "@/components/product_item";
import ProductItem1 from "@/components/product_item_1";
import { FontAwesome } from "@expo/vector-icons";
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

interface Product {
  id: string;
  image: ImageSourcePropType;
  name: string;
  rate: number;
  price: number;
  sale: number;
  brandName: string;
}

const Home = () => {
  const [searchText, setSearchText] = useState("");
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

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

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

  const products = [
    {
      id: "1",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 1",
      rate: 4.5,
      price: 100000,
      sale: 10,
      brandName: "Thương hiệu A",
    },
    {
      id: "2",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 2",
      rate: 4.0,
      price: 150000,
      sale: 5,
      brandName: "Thương hiệu B",
    },
    {
      id: "3",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 3",
      rate: 4.7,
      price: 200000,
      sale: 15,
      brandName: "Thương hiệu C",
    },
    {
      id: "4",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 4",
      rate: 3.5,
      price: 120000,
      sale: 20,
      brandName: "Thương hiệu D",
    },
    {
      id: "5",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 5",
      rate: 4.8,
      price: 250000,
      sale: 25,
      brandName: "Thương hiệu E",
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
      image: require("../assets/images/img_def_2.jpg"),
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

  const renderItems = () => {
    const rows = [];
    const numberOfItemsPerRow = 5;

    for (let i = 0; i < data.length; i += numberOfItemsPerRow) {
      const rowItems = data.slice(i, i + numberOfItemsPerRow);
      rows.push(
        <View style={styles.featureContainer} key={i}>
          {rowItems.map((item) => (
            <ImageWithTextComponent
              key={item.id}
              image={item.image}
              text={item.title}
            />
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.searchAndCartContainer}>
          <View style={styles.searchContainer}>
            <Image
              source={require("../assets/icons/search.png")}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm..."
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
              clearButtonMode="always"
            />
            {searchText ? (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <FontAwesome
                  name="times"
                  size={20}
                  color="#888"
                  style={styles.clearIcon}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          <Image
            source={require("../assets/icons/shopping-cart.png")}
            style={styles.cartIcon}
          />
        </View>
      </View>
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
                <Image key={index} source={item} style={styles.carouselImage} />
              ))}
            </Animated.View>
          </View>

          {renderDots()}

          {renderItems()}
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

    </ScrollView>
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
    position: "absolute",
    width: "100%",
    padding: 10,
    zIndex: 1,
    top: 0,
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
    paddingVertical: 5,
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
    flex: 1,
    height: 28,
    fontSize: 12,
    color: "#333",
    borderWidth: 0,
    outlineColor: "transparent",
  },
  clearIcon: {
    marginLeft: 10,
  },
  carouselWrapper: {
    paddingTop: 100,
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
  featureContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
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

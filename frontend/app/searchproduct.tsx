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
import { getAllProducts, saleProducts } from "@/src/services/productsServices";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "react-native-safe-area-context";

interface Product {
  _id: string;
  image: ImageSourcePropType;
  name: string;
  rate: number;
  price: number;
  sale: number;
  brandName: string;
}

const Sea = ({ navigation , route}: any) => {
  const { searchResults } = route.params || { searchResults: [] };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sugesstProducts, setProducts] = useState<Product[]>([]);
  const [salesProducts, setSaleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Phổ biến");

  const filters = ["Phổ biến", "Bán chạy", "Hàng mới", "Giá"];
  const tags = ["NEW", "TOP DEAL", "FREESHIP XTRA"];

  const products = [
    { id: 5, image: require("../assets/images/img_def.jpg"), discount: "-15%" },
    { id: 6, image: require("../assets/images/Iphone.png"), discount: "-15%" },
    { id: 7, image: require("../assets/images/Iphone.png"), discount: "-27%" },
  ];

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.searchAndCartContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeTabs");
            }}
          >
            <Image
              source={require("../assets/icons/left-arrow.png")}
              style={styles.cartIcon1}
            />
          </TouchableOpacity>

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
            <TextInput style={styles.searchInput}
              placeholder="Tìm kiếm"
            />
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

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("");
            }}
          >
            <Image
              source={require("../assets/icons/option.png")}
              style={styles.cartIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Banner quảng cáo */}
      <View style={styles.banner}>
        <Image
          source={require("../assets/images/img_def.jpg")}
          style={styles.bannerImage}
        />
        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>Giảm đến 30%</Text>
          <Text style={styles.bannerSubtitle}>
            Tài trợ bởi Acnes Official Store ★ 4.7/5
          </Text>
        </View>
        <TouchableOpacity style={styles.iconnn}>
          <Image
            source={require("../assets/icons/rightt.png")}
            style={styles.cartIcon2}
          />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm */}
      <View style={styles.xemthem}>
        <FlatList
          horizontal
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.discountTag}>{item.discount}</Text>
            </View>
          )}
        />

        <View>
          <TouchableOpacity style={styles.buttonxt}>
            <Text style={styles.bannerTitle1}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Thanh lọc & sắp xếp */}
      <View style={styles.filterBar}>
        {filters.map((item) => (
          <TouchableOpacity key={item} onPress={() => setSelectedFilter(item)}>
            <Text
              style={[
                styles.filterText,
                selectedFilter === item && styles.selectedFilter,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Các tag khuyến mãi */}
      <View style={styles.filterBar1}>
        <TouchableOpacity style={styles.LOCC}>
          <View style={styles.Loc}>
            <Text style={styles.Loctxt}>LỌC</Text>
            <Image
              source={require("../assets/icons/Loc.png")}
              style={styles.imageLoc}
            />
          </View>
        </TouchableOpacity>
        {tags.map((tag) => (
          <TouchableOpacity
            style={styles.tag}
            key={tag}
            onPress={() => setSelectedFilter(tag)}
          >
            <Text
              style={[
                styles.filterText1,
                selectedFilter === tag && styles.selectedFilter1,
              ]}
            >
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlashList
        data={[1]}
        renderItem={() => (
          <View>
            <View style={styles.appDfColor}>
              <View style={styles.addressContainer}>
                <Image
                  source={require("../assets/icons/placeholder.png")}
                  style={styles.mapIcon}
                />
                <Text style={styles.textSize}>Giao đến: </Text>
              </View>

              {/* <View style={{ marginTop: 20 }}>
                <View style={styles.headerTopDeal}>
                  <Text style={styles.titleList}>Gợi ý hôm nay</Text>
                </View>
              </View> */}

              <FlatList
                data={searchResults}
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
  LOCC: {
    marginRight: 5,
  },

  tag: {
    fontSize: 10,
    alignSelf: "center",
  },

  Loc: {
    width: "100%",
    height: "auto",
    padding: 4,
    alignSelf: "center",
    flexDirection: "row",
    fontWeight: "bold",
  },
  Loctxt: {
    fontSize: 12,
    // fontWeight:"bold"
    alignSelf: "center",
  },

  imageLoc: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },

  banner: {
    marginTop: 2,
    flexDirection: "row",

    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  bannerImage: {
    width: 50,
    height: "auto",
    borderRadius: 10,
  },
  bannerImage1: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  bannerText: { marginLeft: 10, flex: 1, alignSelf: "center" },
  bannerTitle: { fontSize: 15, fontWeight: "bold" },
  buttonxt: {
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "rgb(61, 129, 255)",

    padding: 2,
    borderRadius: 5,
    height: 30,
    width: "auto",
  },
  bannerTitle1: {
    color: "#fff",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingBottom: 3,
    paddingTop: 3,
    fontSize: 12,
    paddingHorizontal: 2,
  },
  bannerSubtitle: { fontSize: 12, color: "#666" },
  bannerButton: {
    marginTop: 5,
    backgroundColor: "#007AFF",
    padding: 5,
    borderRadius: 5,
  },
  bannerButtonText: { color: "#fff", textAlign: "center" },
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
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
  },
  searchAndCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,

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
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
  },
  cartIcon1: {
    marginRight: 10,
    width: 25,
    height: 25,
  },
  cartIcon2: {
    flex: 1,
    width: 20,
    height: 20,
  },
  iconnn: {
    alignSelf: "center",
    width: 20,
    height: 20,
  },
  cartIcon: {
    marginLeft: 10,
    width: 25,
    height: 25,
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

  // Thanh lọc & sắp xếp
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "rgb(255, 255, 255)",
    width: "100%",
    height: "auto",
    marginTop: 5,
  },
  filterBar1: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5.5,
    backgroundColor: "rgb(255, 255, 255)",
    width: "100%",
    height: "auto",
    marginTop: 5,
  },

  filterText: { fontSize: 12, color: "#666", flexDirection: "row" },
  filterText1: {
    backgroundColor: "#f1f1f1",
    marginLeft: 3,
    marginRight: 3,
    fontSize: 14,
    alignSelf: "center",
    color: "#007AFF",
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: "bold",
  },
  selectedFilter: { color: "#007AFF", fontWeight: "bold" },
  selectedFilter1: {
    fontSize: 14,
    color: "rgba(255, 37, 37, 0.69)",
    fontWeight: "bold",
    backgroundColor: "rgba(196, 196, 196, 0.88)",
    alignSelf: "center",
    flexDirection: "row",
  },

  // Danh sách sản phẩm
  xemthem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 8,
  },
  productCard: {
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgb(197, 197, 197)",
  },
  productImage: { width: 50, height: 50, borderRadius: 10 },
  discountTag: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "red",
    color: "#fff",
    fontSize: 8,
    padding: 3,
    borderRadius: 5,
  },
});

export default Sea;

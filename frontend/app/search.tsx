import PopularSearch from "@/components/popular_search";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { getPopularSearches, getSearch } from "@/src/services/productsServices";
import { FlashList } from "@shopify/flash-list";

interface popularSearch {
  id: string;
  image: ImageSourcePropType;
  name: string;
}

const Search: React.FC = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState("");
  const [popularSearches, setPopularSearches] = useState<popularSearch[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPopularSearches = async () => {
      try {
        setLoading(true);
        const data = await getPopularSearches();
        setPopularSearches(data);
      } catch (error) {
        console.error("Error fetching popular searches:", error);
      }
      setLoading(false);
    };
    fetchPopularSearches();
  }, []);

  const handleSearch = async () => {
    if (!searchText.trim()) return;
    try {
      setLoading(true);
      const result = await getSearch(searchText);

      if (result && result.status && result.products.length > 0) {
        navigation.navigate("Sea", { searchResults: result.products });
      } else {
        alert("Không tìm thấy sản phẩm!");
      }
    } catch (error) {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
    } finally {
      setLoading(false);
    }
    // console.log("Searching for:", searchText);
  };

  return (
    <SafeAreaView style={styles.appDfColor}>
      <View style={styles.header}>
        <View style={styles.rowContainer2}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../assets/icons/back.png")}
              style={styles.iconBack}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Sản phẩm, thương hiệu và..."
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
          ) : (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <FontAwesome
                name="times"
                size={20}
                color="#888"
                style={[styles.clearIcon, { color: "transparent" }]}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleSearch}>
            <Image
              source={require("../assets/icons/send.png")}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlashList
        data={[1]}
        renderItem={() => (
          <View>
            <View style={[styles.container, { marginTop: 8 }]}>
              <View style={styles.rowContainer}>
                <View style={styles.iconIncrease}>
                  <Image
                    source={require("../assets/icons/increase.png")}
                    style={styles.icon}
                  />
                </View>
                <Text style={styles.title}>Tìm kiếm phổ biến</Text>
              </View>
            </View>
            <FlatList
              data={popularSearches}
              horizontal={false}
              numColumns={2}
              refreshing={false}
              style={styles.listPopular}
              renderItem={({ item }) => (
                <PopularSearch
                  id={item.id}
                  image={item.image}
                  name={item.name}
                />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
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
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  iconBack: {
    width: 25,
    marginRight: 15,
  },
  searchInput: {
    width: "65%",
    fontSize: 12,
    color: "#333",
    borderWidth: 0,
    outlineColor: "transparent",
  },
  clearIcon: {
    marginLeft: 10,
  },
  iconSend: {
    width: 25,
    marginLeft: 10,
  },
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  iconIncrease: {
    width: 22,
    height: 22,
    padding: 5,
    borderRadius: "50%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  icon: {
    width: 16,
    height: 16,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowContainer2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  listPopular: {
    backgroundColor: "#fff",
    paddingBottom: 5,
    paddingHorizontal: 5,
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

export default Search;

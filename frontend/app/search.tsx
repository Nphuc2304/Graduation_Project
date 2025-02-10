import PopularSearch from "@/components/popular_search";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { getPopularSearches } from "@/src/services/productsServices";
import { FlashList } from "@shopify/flash-list";

interface popularSearch {
  id: string;
  image: ImageSourcePropType;
  name: string;
}

const Search: React.FC = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState("");
  const [popularSearches, setPopularSearches] = useState<popularSearch[]>([]);

  useEffect(() => {
    const fetchPopularSearches = async () => {
      try {
        const data = await getPopularSearches();
        setPopularSearches(data);
      } catch (error) {
        console.error("Error fetching popular searches:", error);
      }
    };
    fetchPopularSearches();
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

  // dữ liệu test
  const data = [
    {
      id: "1",
      image: require("../assets/images/img_test.jpg"),
      title: "Cân điện tử",
    },
    {
      id: "2",
      image: require("../assets/images/img_test.jpg"),
      title: "Cân dây nịt",
    },
    {
      id: "3",
      image: require("../assets/images/img_test.jpg"),
      title: "Đầm dự tiệc cao cấp",
    },
    {
      id: "4",
      image: require("../assets/images/img_test.jpg"),
      title: "Điện thoại",
    },
    {
      id: "5",
      image: require("../assets/images/img_test.jpg"),
      title: "Gạo st25",
    },
    {
      id: "6",
      image: require("../assets/images/img_test.jpg"),
      title: "giày lười nữ",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            placeholder="Sản phẩm, thương hiệu và mọi thứ bạn cần..."
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
          <Image
            source={require("../assets/icons/send.png")}
            style={styles.iconSend}
          />
        </View>
      </View>
      <FlashList
        data={[1]}
        renderItem={() => (
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>Săn deal hời Tết</Text>
            </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appDfColor: {
    backgroundColor: "#F8F8FF",
  },
  header: {
    width: "100%",
    top: 0,
    position: "absolute",
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
    fontSize: 12,
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
});

export default Search;

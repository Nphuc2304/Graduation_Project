import PopularSearch from "@/components/popular_search";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Search: React.FC = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState("");

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
    <ScrollView
      style={styles.appDfColor}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
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
      <View style={[styles.container, { marginTop: 55 }]}>
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
        data={data}
        horizontal={false}
        numColumns={2}
        refreshing={false}
        style={styles.listPopular}
        renderItem={({ item }) => (
          <PopularSearch id={item.id} image={item.image} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
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
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
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
    width: "100%",
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
  listPopular: {
    backgroundColor: "#fff",
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
});

export default Search;

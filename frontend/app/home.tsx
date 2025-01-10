import ImageWithTextComponent from "@/components/feature_block";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export function Home() {
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgCarousel.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(scrollX, {
      toValue: -(currentIndex * (Dimensions.get("window").width - 40)),
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
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: "100%",
    maxWidth: 400,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
    borderWidth: 0,
    outlineWidth: 0,
  },
  clearIcon: {
    marginLeft: 10,
  },
  carouselWrapper: {
    marginTop: 20,
    overflow: "hidden",
  },
  carousel: {
    marginTop: 20,
  },
  carouselImage: {
    width: Dimensions.get("window").width - 40,
    height: 170,
    borderRadius: 10,
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
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

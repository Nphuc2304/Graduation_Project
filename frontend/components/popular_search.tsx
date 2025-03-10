import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface popularSearch {
  id: String;
  image: ImageSourcePropType;
  name: String;
}

const PopularSearch: React.FC<popularSearch> = ({ id, image, name }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image.toLocaleString() }}
        style={styles.img}
        resizeMode="contain"
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "47%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#F8F8FF",
    overflow: "hidden",
    margin: 5,
  },
  img: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 10,
    marginLeft: 10,
  },
});

export default PopularSearch;

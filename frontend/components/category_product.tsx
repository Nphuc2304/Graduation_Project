import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";

interface Category {
  id: string;
  imageCategory: string;
  nameCategory: string;
}

const CategoryProduct: React.FC<Category> = ({
  id,
  imageCategory,
  nameCategory,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgBlock}>
        <Image
          style={styles.img}
          source={{ uri: imageCategory.toLocaleString() }}
        />
      </View>
      <Text numberOfLines={1} style={styles.name}>
        {nameCategory}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  imgBlock: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    color: "#000",
    fontSize: 14,
  },
});

export default CategoryProduct;

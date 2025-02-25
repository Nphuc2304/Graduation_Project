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
      <Image
        style={styles.img}
        source={{ uri: imageCategory.toLocaleString() }}
      />
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
  img: {
    width: 70,
    height: 70,
  },
  name: {
    color: "#000",
    fontSize: 14,
  },
});

export default CategoryProduct;

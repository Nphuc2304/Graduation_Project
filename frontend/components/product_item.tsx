import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

interface productItem {
  id: string;
  image: ImageSourcePropType;
  name: string;
  rate: number;
  price: number;
  sale: number;
  brandName: string;
  navigation: any;
}

const productItem: React.FC<productItem> = ({
  id,
  image,
  name,
  rate,
  price,
  sale,
  brandName,
  navigation,
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesome
          key={`full-${i}`}
          name="star"
          size={16}
          color="gold"
          style={styles.space}
        />
      );
    }
    if (halfStars) {
      stars.push(
        <FontAwesome
          key="half"
          name="star-half"
          size={16}
          color="gold"
          style={styles.space}
        />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesome
          key={`empty-${i}`}
          name="star-o"
          size={16}
          color="gold"
          style={styles.space}
        />
      );
    }

    return stars;
  };

  const renderPrice = () => {
    if (sale > 0) {
      const discountedPrice = price * (1 - sale / 100);
      return (
        <View style={styles.priceContainer}>
          <Text style={styles.salePrice}>
            {discountedPrice.toLocaleString()} ₫
          </Text>
          <View style={styles.containerSale}>
            <Text style={styles.saleP}>-{sale}%</Text>
            <Text style={styles.originalPrice}>{price.toLocaleString()} ₫</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.priceContainer}>
          <Text style={styles.defaultPrice}>{price.toLocaleString()} ₫</Text>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("DetailProduct");
      }}
    >
      <Image
        source={{ uri: image.toLocaleString() }}
        style={styles.imageProduct}
      />
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Text numberOfLines={1} style={styles.nameProduct}>
          {name}
        </Text>
        <View style={styles.star}>{renderStars(rate)}</View>
        <View>{renderPrice()}</View>
        <Text style={styles.textSize}>{brandName}</Text>
        <View style={styles.hr}></View>
        <Text style={styles.textSize}>Giao hàng siêu tốc</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    flex: 1,
    borderRadius: 5,
    borderColor: "#EEE9E9",
    borderWidth: 1,
    margin: 5,
    overflow: "hidden",
  },
  imageProduct: {
    height: 170,
    width: "100%",
  },
  nameProduct: {
    fontSize: 12,
    color: "#000",
    marginBottom: 10,
    marginTop: 10,
  },
  textSize: {
    fontSize: 10,
    marginBottom: 2,
    marginTop: 2,
  },
  hr: {
    height: 1,
    borderColor: "#EEE9E9",
    borderTopWidth: 1,
  },
  star: {
    flexDirection: "row",
    alignItems: "center",
  },
  space: {
    marginRight: 3,
    fontSize: 12,
  },
  priceContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 10,
    color: "gray",
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  salePrice: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  defaultPrice: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 12.5,
  },
  containerSale: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  saleP: {
    marginRight: 5,
    padding: 3,
    backgroundColor: "#B9D3EE",
    fontSize: 10,
    borderRadius: 10,
  },
});

export default productItem;

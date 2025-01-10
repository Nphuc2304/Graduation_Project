import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface featureBlock {
  image: ImageSourcePropType;
  text: string;
}

const ImageWithTextComponent: React.FC<featureBlock> = ({ image, text }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    color: "#333",
  },
});

export default ImageWithTextComponent;

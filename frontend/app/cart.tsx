import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Cart: React.FC = () => {
  return (
    <ScrollView
      style={styles.appDfColor}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
    >
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appDfColor: {
    backgroundColor: "#F8F8FF",
  },
});

export default Cart;

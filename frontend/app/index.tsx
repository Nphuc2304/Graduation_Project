import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import _layout from "./_layout";



export default function Index() {
  return (
    <NavigationContainer>
      <_layout />
    </NavigationContainer>
  );
}

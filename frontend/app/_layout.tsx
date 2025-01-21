import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "./settings";
import Account from "./account";
import Home from "./home";
import Category from "./category";
import AI from "./ai";
import Notify from "./notiffy";
import Search from "./search";
import { useEffect } from "react";
import OTP from "./otp";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Index() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 55,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
          marginTop: 2,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/icons/home.png")}
              style={[
                styles.icon,
                { tintColor: color, width: size, height: size },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: "danh mục",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/icons/category.png")}
              style={[
                styles.icon,
                { tintColor: color, width: size, height: size },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AI"
        component={AI}
        options={{
          tabBarLabel: "trợ lý",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/icons/ai.png")}
              style={[
                styles.icon,
                { tintColor: color, width: size, height: size },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notify}
        options={{
          tabBarLabel: "tin nhắn",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/icons/notification.png")}
              style={[
                styles.icon,
                { tintColor: color, width: size, height: size },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={SettingsStack}
        options={({ route }) => ({
          tabBarLabel: "tài khoản",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/icons/user.png")}
              style={[
                styles.icon,
                { tintColor: color, width: size, height: size },
              ]}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    resizeMode: "contain",
  },
});

export default Index;

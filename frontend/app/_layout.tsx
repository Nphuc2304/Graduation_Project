import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "./settings";
import Account from "./account";
import Home from "./home";
import Category from "./category";
import AI from "./ai";
import Notify from "./notiffy";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator>
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

function Index() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
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
        options={{
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
        }}
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

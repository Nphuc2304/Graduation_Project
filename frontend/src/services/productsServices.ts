import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://graduation-project-r010.onrender.com";

// Đăng nhập bằng username
export const getUser = async (username: string, password: string, navigation: any) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, { username, password });

    if (response.data.status) {
      await AsyncStorage.setItem("token", response.data.token);
      navigation.navigate("HomeTabs");
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Đăng nhập bằng email
export const getUserByEmail = async (email: string, password: string, navigation: any) => {
  try {
    const response = await axios.post(`${API_URL}/users/get-token`, { email, password });

    if (response.data.status) {
      await AsyncStorage.setItem("token", response.data.token);
      navigation.navigate("HomeTabs");
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Error logging in with email:", error);
    throw error;
  }
};

// Lấy tất cả sản phẩm
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product/all_products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Lấy sản phẩm đang giảm giá
export const saleProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product/sale_products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching sale products:", error);
    throw error;
  }
};

// Lấy từ khóa tìm kiếm phổ biến
export const getPopularSearches = async () => {
  try {
    const response = await axios.get(`${API_URL}/product/popular_searches`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular searches:", error);
    throw error;
  }
};

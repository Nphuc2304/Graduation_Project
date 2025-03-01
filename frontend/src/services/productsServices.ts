import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://graduation-project-r010.onrender.com";
// const myAPI = "http://localhost:3000";

export const getUser = async (username: string, password: string, navigation: any) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      username, password
    });
    if (response.data.status) {
      await AsyncStorage.setItem("token", response.data.token);
      navigation.navigate("HomeTabs");
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product/all_products`);
    console.log("Fetched products:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getDetailProduct = async (productId: string) => {
  console.log("Calling API with productId:", productId);
  if (!productId) {
    console.error("Invalid product ID:", productId);
    return null;
  }
  try {
    const response = await axios.get(`${API_URL}/product/getDetailProduct/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export const saleProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product/sale_products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getPopularSearches = async () => {
  try {
    const response = await axios.get(`${API_URL}/product/popular_searches`);

    return response.data;
  } catch (error) {
    console.error("Error fetching popular searches:", error);
    throw error;
  }
};

//----------------------------------------------------CATEGORY-------------------------------------------
export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories/get`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    throw error;
  }
};

export const getSubCate = async (categoryId: string) => {
  if (!categoryId) {
    console.log("Invalid category ID: ", { categoryId });
    return [];
  }
  try {
    const response = await axios.get(`${API_URL}/subCates/get/`, {params : {categoryId}});
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};
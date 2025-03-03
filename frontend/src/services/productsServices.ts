import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://graduation-project-r010.onrender.com";
// const myAPI = "http://localhost:3000";

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

    console.error("Error fetching users:", error);
    throw error;
  }
};
export interface RegisterData {
  email: string;
  username: string;
  password: string;
}
// đăng ký
export const register = async (userData: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
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
// ------------------ Product --------------------- //
// Lấy tất cả sản phẩm
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


// Lấy sản phẩm đang giảm giá

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

export const getProductSubCate = async (subCateId: string) => {
  if(!subCateId){
    console.log("ID subcate k hợp lệ");
    return [];
  }
  try {
    const response = await axios.get(`${API_URL}/product/subCate_product/${subCateId}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy dữ liệu", error)
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
//----------------------------------------------------CART-------------------------------------------
export const getCartId = async (userId:string) => {
  if (!userId) {
    console.log("Invalid user ID: ", { userId });
    return [];
  }
  try {
    const response = await axios.get(`${API_URL}/carts/getCart/`, {params : {userId}});
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export const getCartItem = async (cartId:string) => {
  if (!cartId) {
    console.log("Invalid cart ID: ", { cartId });
    return [];
  }
  try {
    const response = await axios.get(`${API_URL}/cartItems/getItem/`, {params : {cartId}});
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}



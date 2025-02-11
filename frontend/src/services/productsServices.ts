import axios from "axios";

const API_URL = "https://graduation-project-r010.onrender.com";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product/all_products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
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

import axios from 'axios';

const API_URL = 'http://localhost:3000/product';

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/all_products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const saleProducts = async() => {
    try{
        const response = await axios.get(`${API_URL}/sale_products`);
        return response.data
    }catch(error){
        console.error('Error fetching products:', error);
        throw error;
    }
};

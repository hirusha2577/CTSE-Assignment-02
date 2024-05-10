import axios from 'axios';

// Config
import { base2URL } from '../config';

export const addProduct = async (details) => {
    try {
    const { data } = await axios.post(base2URL + '/product', details);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const getAllProduct = async () => {
    try {
    const { data } = await axios.get(base2URL + '/product');
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const getSelectedProducts = async (categoryId,subCategoryId) => {
    try {
    const { data } = await axios.get(base2URL + '/product//'+categoryId+'/'+subCategoryId);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}





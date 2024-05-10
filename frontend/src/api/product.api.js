import axios from 'axios';

// Config
import { productURL } from '../config';

export const addProduct = async (details) => {
  try {
    const { data } = await axios.post(productURL + '/product', details);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

export const getAllProduct = async () => {
  try {
    const { data } = await axios.get(productURL + '/product');
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

export const getSelectedProducts = async (categoryId, subCategoryId) => {
  try {
    const { data } = await axios.get(productURL + '/product//' + categoryId + '/' + subCategoryId);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

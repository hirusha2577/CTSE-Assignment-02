import axios from 'axios';

// Config
import { categoryURL } from '../config';

export const addCategory = async (details) => {
  try {
    const { data } = await axios.post(categoryURL + '/category', details);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(categoryURL + '/category');
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

export const deleteCategoryData = async (id) => {
  try {
    const { data } = await axios.delete(categoryURL + '/category/' + id);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

export const editCategoryData = async (id, details) => {
  try {
    const { data } = await axios.put(categoryURL + '/category/' + id, details);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

export const getSelectedCatagory = async (id) => {
  try {
    const { data } = await axios.get(categoryURL + '/category/' + id);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

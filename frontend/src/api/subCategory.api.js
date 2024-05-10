import axios from 'axios';

// Config
import { baseURL } from '../config';

export const addSubCategory = async (details) => {
    try {
    const { data } = await axios.post(baseURL + '/subCategory', details);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const getAllSubCategories = async () => {
    try {
    const { data } = await axios.get(baseURL + '/subCategory');
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const deleteSubCategoryData = async (id) => {
    try {
    const { data } = await axios.delete(baseURL + '/subCategory/'+id);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const editSubCategoryData = async (id,details) => {
    try {
    const { data } = await axios.put(baseURL + '/subCategory/'+id, details);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const getSelectedSubCatagory = async (id) => {
    try {
    const { data } = await axios.get(baseURL + '/subCategory//'+id);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const getSubCategoryByCategoryId = async (id) => {
    try {
    const { data } = await axios.get(baseURL + '/subCategory/'+id);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}


import axios from 'axios';

// Config
import { subCategoryURL } from '../config';

export const addSubCategory = async (details) => {
    try {
    const { data } = await axios.post(subCategoryURL + '/subCategory', details);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const getAllSubCategories = async () => {
    try {
    const { data } = await axios.get(subCategoryURL + '/subCategory');
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const deleteSubCategoryData = async (id) => {
    try {
    const { data } = await axios.delete(subCategoryURL + '/subCategory/'+id);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const editSubCategoryData = async (id,details) => {
    try {
    const { data } = await axios.put(subCategoryURL + '/subCategory/'+id, details);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const getSelectedSubCatagory = async (id) => {
    try {
    const { data } = await axios.get(subCategoryURL + '/subCategory//'+id);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export const getSubCategoryByCategoryId = async (id) => {
    try {
    const { data } = await axios.get(subCategoryURL + '/subCategory/'+id);
    return data;
    } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}


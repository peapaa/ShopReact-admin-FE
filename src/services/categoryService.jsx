import axios from "axios";
import { API_CATEGORY } from "./constant";

export default class CategoryService {
  insertCategory = async (category) => {
    return await axios.post(API_CATEGORY, category);
  };
  getCategory = async () => {
    return await axios.get(API_CATEGORY); // sau này lấy api của API_CATEGORY thay thế cái LIST_CATEGORY
  };
  deleteCategory = async (id) => {
    return await axios.delete(API_CATEGORY + "/" + id);
  };
  getOneCategory = async (id) => {
    return await axios.get(API_CATEGORY + "/" + id + "/get");
  };
  updateCategory = async (id, category) => {
    return await axios.patch(API_CATEGORY + "/" + id, category);
  };
}

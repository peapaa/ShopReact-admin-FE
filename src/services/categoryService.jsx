import axios from "axios";
import { API_CATEGORY, LIST_CATEGORY } from "./constant";

export default class CategoryService {
  insertCategory = async (category) => {
    return await axios.post(API_CATEGORY, category);
  };
  getCategory = async (category) => {
    return await axios.get(LIST_CATEGORY, category); // sau này lấy api của API_CATEGORY thay thế cái LIST_CATEGORY
  };
}

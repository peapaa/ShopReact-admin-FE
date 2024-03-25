import CategoryService from "../../services/categoryService";
import { CATEGORY_SET } from "./actionTypes";

export const insertCategory = (category, navigate) => async (dispatch) => {
  const service = new CategoryService();
  //   console.log(service);
  try {
    console.log("insertCategory");
    const response = await service.insertCategory(category);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: CATEGORY_SET,
        payload: response.data,
      });
    }
  } catch (err) {
    console.error("Error: " + err);
  }
  navigate("/categories/list");
};

export const insertCategory = (category, navigate) => async (dispatch) => {
  //   const service = new CategoryService();
  try {
    console.log("insertCategory");
  } catch (err) {
    console.error("Error: " + err);
  }
  navigate("/category/list");
};

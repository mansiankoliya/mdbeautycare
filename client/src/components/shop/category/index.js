import React, { Fragment,createContext,useReducer } from "react"
import ProductCategory from "./ProductCategory";
import { categoryState, categoryReducer } from "./CategoryContext";
import Layout from "../layout";

export const CategoryContext = createContext();
const CategoryComponent = () => {
  return (
    <Fragment>
      <section className="mt-5 pt-2">
      {/* <section className="m-4 md:mx-8 md:my-6 mt-5 pt-2"> */}
        <ProductCategory />
      </section>
    </Fragment>
  );
};

const Category = (props) => {
  const [data, dispatch] = useReducer(categoryReducer, categoryState);
  return (
    <Fragment>
      <CategoryContext.Provider value={{ data, dispatch }}>
        <Layout children={<CategoryComponent />} />
      </CategoryContext.Provider>
    </Fragment>
  );
};

export default Category;

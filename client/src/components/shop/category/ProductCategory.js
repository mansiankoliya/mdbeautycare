import React, { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { CategoryContext } from "./index";
import './style.css'
const ProductCategory = (props) => {
  const { data, dispatch } = useContext(CategoryContext);

  return (
    <>
    <section className='main_header'>
        <div className='header_page'>
          <h1 className="img-heading">Category</h1>
        </div>
      </section>
    <Fragment>
      
      <div className="flex justify-between font-medium mt-16">
        <div
          onClick={(e) =>
            dispatch({
              type: "categoryListDropdown",
              payload: !data.categoryListDropdown,
            })
          }
          className={`flex items-center space-x-1 cursor-pointer ${data.categoryListDropdown ? "colorclass" : ""
            }`}
        >
          <span className="text-md md:text-lg category-class catcss">

            {/* Categories */}
          </span>
        </div>
      </div>
      {<ProductCategoryDropdown />}
    </Fragment>
    </>
  );
};

export default ProductCategory;
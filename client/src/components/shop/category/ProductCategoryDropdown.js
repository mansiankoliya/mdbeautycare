import React, { Fragment, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "./index";
import { getAllCategory } from "../../admin/categories/FetchApi";
import { getAllProduct, productByPrice } from "../../admin/products/FetchApi";
import "./style.css";

const apiURL = process.env.REACT_APP_API_URL;

const CategoryList = () => {
  const history = useHistory();
  const { data } = useContext(CategoryContext);
  const [categories, setCategories] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandle = (e) => {
    var search = e.target.value;
    const myFilter = searchData.filter((es) => {
      return es.cName.toLowerCase().includes(search.toLowerCase());
    });
    setCategories(myFilter);
  }

  const fetchData = async () => {
    try {
      let responseData = await getAllCategory();
      if (responseData && responseData.Categories) {
        setCategories(responseData.Categories);
        setSearchData(responseData.Categories)
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(categories)

  return (
    <div >
      <input
        
        onChange={(e) => searchHandle(e)}
        className="px-4 text-xl py-4 focus:outline-none"
        type="text"
        placeholder="Search products..."
        style={{color:"#b21368",fontWeight:600}}
      />
      <hr />
      <div className="py-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories && categories.length > 0 ? (
          categories.map((item, index) => {
            return (
              <Fragment key={index}>
                <div
                  onClick={(e) =>
                    history.push(`/products/category/${item._id}`)
                  }
                  className="col-span-1 m-2 flex flex-col items-center justify-center space-y-2 cursor-pointer"
                >
                  <img
                    className="filterimg"
                    src={`${apiURL}/uploads/categories/${item.cImage}`}
                    alt="pic"
                  />
                  <div className="font-medium">{item.cName}</div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <div className="text-xl text-center my-4 colorclass">No Category</div>
        )}
      </div>
    </div>
  );
};

const ProductCategoryDropdown = (props) => {
  return (
    <Fragment>
      {/* <FilterList /> */}
      <CategoryList />
    </Fragment>
  );
};

export default ProductCategoryDropdown;

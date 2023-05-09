import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../layout";
import { subTotal, quantity, totalCost } from "../partials/Mixins";
import './ordercss.css'
import { cartListProduct } from "../partials/FetchApi";
import { getBrainTreeToken, getPaymentProcess } from "./FetchApi";
import { fetchData, fetchbrainTree, pay } from "./Action";

import DropIn from "braintree-web-drop-in-react";

const apiURL = process.env.REACT_APP_API_URL;

export const CheckoutComponent = (props) => {
  const history = useHistory();
  const { data, dispatch } = useContext(LayoutContext);
  const [email, setEmail] = useState('');
  // const [sendMailRes, setSendMailRes] = useState('')

  const [state, setState] = useState({
    address: "",
    phone: "",
    error: false,
    success: false,
    clientToken: null,
    instance: {},
  });


  async function payment() {
    let item = { email }
    console.log("item", item)
    // let result = await fetch(`${REACT_APP_API_ENDPOINT1}/forgetPassword`, {
    let result = await fetch("http://localhost:8000/payment/PaymentMessage", {
      method: "POST",
      // body: {email},
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    console.log("email", email);
    console.log("=====result====", result);
    result = await result.json()
    console.log("====*result*====", result);
    // if (result?.status === 404) {
    //   setSendMailRes(result)
    // }
    // if (result?.status === 200) {
    //   setSendMailRes(result)
    // }
  }


  useEffect(() => {
    fetchData(cartListProduct, dispatch);
    fetchbrainTree(getBrainTreeToken, setState);
  }, []);

  return (
    <Fragment>
      <div className="bgclass">
        <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24 ">
          <div className="text-2xl mx-2 ordercss">Order</div>
          {/* Product List */}
          <div className="flex flex-col md:flex md:space-x-2 md:flex-row">
            <div className="md:w-1/2">
              <CheckoutProducts products={data.cartProduct} />
            </div>
            <div className="w-full order-first md:order-last md:w-1/2">
              {state.clientToken !== null ? (
                <Fragment>
                  <div
                    onBlur={(e) => setState({ ...state, error: false })}
                    className="p-4 md:p-8"
                  >
                    {state.error ? (
                      <div className="bg-red-200 py-2 px-4 rounded">
                        {state.error}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="flex flex-col py-2">
                      <label htmlFor="address" className="pb-2" style={{color:"#b21368",fontWeight:600}}>
                        Delivery Address
                      </label>
                      <input
                        autoComplete="off"
                        value={state.address}
                        onChange={(e) =>
                          setState({
                            ...state,
                            address: e.target.value,
                            error: false,
                          })
                        }
                        type="text"
                        id="address"
                        className="border px-4 py-2"
                        placeholder="Address..."
                      />
                    </div>
                    <div className="flex flex-col py-2 mb-2">
                      <label htmlFor="phone" className="pb-2" style={{color:"#b21368",fontWeight:600}}>
                        Phone
                      </label>
                      <input
                        value={state.phone}
                        maxLength={10}
                        onChange={(e) =>
                          setState({
                            ...state,
                            phone: e.target.value,
                            error: false,
                          })
                        }
                        type="tel"
                        id="phone"
                        className="border px-4 py-2"
                        placeholder="+91"
                      />
                    </div>
                    <div className="flex flex-col py-2 mb-2">
                      <label htmlFor="email" className="pb-2" style={{color:"#b21368",fontWeight:600}}>
                        Email
                      </label>

                      <input
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        type="email"
                        value={email}  
                        id="email"
                        className="border px-4 py-2"
                        placeholder="Enter Email"
                      />
                      {/* {
                        sendMailRes?.message &&
                        <span className={sendMailRes?.status === 404 ? "text-danger" : "text-success"}>
                          <i
                            className={sendMailRes?.status === 404 ? "fa fa-exclamation-triangle" : "fa fa-check-circle"}
                            aria-hidden="true"
                          ></i> &nbsp;
                          {sendMailRes?.message}
                        </span>
                      }<br /> */}
                    </div>
                    <DropIn
                      options={{
                        authorization: state.clientToken,
                        paypal: {
                          flow: "vault",
                        },
                      }}
                      onInstance={(instance) => (state.instance = instance)}
                    />
                    <div
                      onClick={(e) => {
                        pay(
                          data,
                          dispatch,
                          state,
                          setState,
                          getPaymentProcess,
                          totalCost,
                          history,
                        );
                        payment() 
                      }
                      }
                      className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
                      style={{ background: "#b21368" }}
                    >
                      Pay now
                    </div>

                  </div>
                </Fragment>
              ) : (
                <div className="flex items-center justify-center py-12">
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

const CheckoutProducts = ({ products }) => {
  const history = useHistory();

  return (
    <Fragment>
      <div className="bgclass">
        <div className="grid grid-cols-2 md:grid-cols-1">
          {products !== null && products.length > 0 ? (
            products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="col-span-1 m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 md:flex md:items-center md:justify-between"
                >
                  <div className="md:flex md:items-center md:space-x-4 ">
                    <img
                      onClick={(e) => history.push(`/products/${product._id}`)}
                      className="cursor-pointer md:h-20 md:w-20 object-cover object-center"
                      src={`${apiURL}/uploads/products/${product.pImages[0]}`}
                      alt="wishListproduct"
                    />
                    <div className="text-lg md:ml-6 truncate darkckout">
                      {product.pName}
                    </div>
                    <div className="md:ml-6 font-semibold text-gray-600 text-sm">
                    <span className="colorckeck"> Price :</span>
                      <span className="darkckout">
                        ₹{product.pPrice}.00{" "}
                      </span>
                    </div>
                    <div className="md:ml-6 font-semibold text-gray-600 text-sm">
                    <span className="colorckeck">  Quantitiy :</span>
                      <span className="darkckout">
                        {quantity(product._id)}
                      </span>
                    </div>
                    <div className="font-semibold text-gray-600 text-sm">
                    <span className="colorckeck"> Subtotal :</span> 
                      <span className="darkckout">
                        ₹{subTotal(product._id, product.pPrice)}.00
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="checkout">No product found for checkout</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutProducts;

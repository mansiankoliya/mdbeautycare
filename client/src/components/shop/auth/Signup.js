import React, { Fragment, useState } from "react";
import './logincss.css'
import { signupReq } from "./fetchApi";
import { useHistory } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'


const Signup = (props) => {
  const history = useHistory();
  const { className } = props;
  const [email, setEmail] = useState({})
  const [sendOtpRes, setSendOtpRes] = useState('')
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    error: false,
    loading: false,
    success: false,
  });
  const [verify_code, setVerify_code] = useState({})
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );
  const alert = (msg, type) => (
    <div className={`text-sm text-${type}-500`}>{msg}</div>
  );

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    if (data.cPassword !== data.password) {
      return setData({
        ...data,
        error: {
          cPassword: "Password doesn't match",
          password: "Password doesn't match",
        },
      });
    }
    try {
      let responseData = await signupReq({
        name: data.name,
        email: data.email,
        password: data.password,
        cPassword: data.cPassword,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
          cPassword: "",
        });
      } else if (responseData.success) {
        setData({
          success: responseData.success,
          name: "",
          email: "",
          password: "",
          cPassword: "",
          loading: false,
          error: false,
        });
        // if (responseData?.status === 404) {
        //   setSendOtpRes(responseData)
        // }
        // if (responseData?.status === 406) {
        //   setSendOtpRes(responseData)
        // }
        // if (responseData?.status === 200) {
        //   setSendOtpRes(responseData)
        // }
      }
    } catch (error) {
      console.log(error);
    }
   
  };

  const VerifyOtp = async () =>{
    console.log({ verify_code }, JSON.stringify({ verify_code }))
      let result = await fetch(`http://localhost:8000/api/verifyCode/${email}`, {
        // let result = await fetch("http://localhost:8000/api/verifyCode/chabhadiyadrashti@gmail.com", {
      method: "POST",
      body: JSON.stringify({ verify_code }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    console.log("=====result====", result);
    result = await result.json()
    console.log("====*result*====", result);
    // if (result?.status === 404) {
    //   setSendOtpRes(result)
    // }
    if (result?.status === 406) {
      setSendOtpRes(result)
    }
    if (result?.status === 201) {
      setSendOtpRes(result)
    }
  }
 

  return (
    <Fragment>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="text-center text-2xl mb-6 heading">Register</div>
      <form className="space-y-4">
        {data.success ? alert(data.success, "green") : ""}
        <div className="flex flex-col">
          <label htmlFor="name" style={{ color: "#b21368", fontWeight: 600 }}>
            Name<span className="text-sm text-gray-600 ml-1" style={{ color: "#b21368", fontWeight: 600 }}>*</span>
          </label>
          <input
            autoComplete="off"
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                name: e.target.value,
              })
            }
            value={data.name}
            type="text"
            id="name"
            className={`${data.error.name ? "border-red-500" : ""
              } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.name, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" style={{ color: "#b21368", fontWeight: 600 }}>
            Email address<span className="text-sm text-gray-600 ml-1" style={{ color: "#b21368", fontWeight: 600 }}>*</span>
          </label>
          <input
            autoComplete="off"
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                email: e.target.value,
              })
            }
            value={data.email}
            type="email"
            id="email"
            className={`${data.error.email ? "border-red-500" : ""
              } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.email, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" style={{ color: "#b21368", fontWeight: 600 }}>
            Password<span className="text-sm text-gray-600 ml-1" style={{ color: "#b21368", fontWeight: 600 }}>*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                password: e.target.value,
              })
            }
            value={data.password}
            type="password"
            id="password"
            className={`${data.error.password ? "border-red-500" : ""
              } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.password, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cPassword" style={{ color: "#b21368", fontWeight: 600 }}>
            Confirm password
            <span className="text-sm text-gray-600 ml-1" style={{ color: "#b21368", fontWeight: 600 }}>*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                cPassword: e.target.value,
              })
            }
            value={data.cPassword}
            type="password"
            id="cPassword"
            className={`${data.error.cPassword ? "border-red-500" : ""
              } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.cPassword, "red")}
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">

        </div>
        <div
          onClick={(e) => {
            return (
              formSubmit(),
              toggle()
            )
          }}
          style={{ background: "#b21368" }}
          className="px-4 py-2 text-white text-center cursor-pointer font-medium"
        >
          Get Otp
          {/* Create an account */}
        </div>
        <section>
          <Modal isOpen={modal} toggle={toggle} className={className} >
            <ModalHeader toggle={toggle} close={closeBtn}>
              Register otp
            </ModalHeader>
            <ModalBody lg={12}>
            {
                sendOtpRes?.message &&
                <span className={sendOtpRes?.status === 406 ? "text-danger" : "text-success"}>
                {/* <span className={sendOtpRes?.status === 406 ? "text-danger" : "text-success"}></span> */}
                  <i
                  className={sendOtpRes?.status === 406 ? "fa fa-exclamation-triangle" : "fa fa-check-circle"}
                    aria-hidden="true"
                  ></i>&nbsp;
                  {sendOtpRes?.message}
                </span>
              }<br />
              <label htmlFor="otp" style={{ color: "#b21368", fontWeight: 600 }}>
                Otp
              </label>
              <input type="text" name="otp" className="form-control input-types" placeholder="Enter Otp"
                onChange={(e) => setVerify_code(e?.target?.value)} required />
            </ModalBody>
            <ModalFooter>
              <Button style={{ backgroundColor: "#b21368" }} className="form-control"
              // onClick={(e)=>history.push("/login")}
              // onClick={VerifyOtp}
              onClick={(e) => {
                return (
                  VerifyOtp(),
                  history.push("/login")
                )
              }}
                >
                  Submit
              </Button>
            </ModalFooter>
          </Modal>
         
        </section>

      </form>
    </Fragment>
  );
};

export default Signup;

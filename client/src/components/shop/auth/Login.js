import React, { Fragment, useState, useContext } from "react";
import './logincss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'
import { loginReq } from "./fetchApi";
import { LayoutContext } from "../index";
import { useHistory } from "react-router-dom";
// const { REACT_APP_API_ENDPOINT1 } = process.env

const Login = (props) => {
  const { className } = props;
  const [email, setEmail] = useState({})
  const [otp_code, setotp_code] = useState({})
  const [newPassword, setnewPassword] = useState({})
  const [confirmPassword, setconfirmPassword] = useState({})
  const { data: layoutData, dispatch: layoutDispatch } = useContext(LayoutContext);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [sendMailRes, setSendMailRes] = useState('')
  const [sendOtplRes, setSendOtplRes] = useState('')
  const [sendpassRes, setSendpassRes] = useState('')
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: true,
  });
  const toggle = () => setModal(!modal);
  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);

  // console.log("=-=--------------------", toggle1);

  const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;

  async function Sendmail() {
    // let result = await fetch(`${REACT_APP_API_ENDPOINT1}/forgetPassword`, {
      let result = await fetch("http://localhost:8000/User/forgetPassword", {
      method: "PUT",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    console.log("=====result====", result);
    result = await result.json()
    console.log("====*result*====", result);
    if (result?.status === 404) {
      setSendMailRes(result)
    }
    if (result?.status === 200) {
      toggle1()
      setSendMailRes(result)
    }
    
    // console.log("====*result*====", result?.message);
  }
  async function SendOtp() {
    console.log({ otp_code }, JSON.stringify({ otp_code }))
    // let result = await fetch(`${REACT_APP_API_ENDPOINT1}/verifyOtp/${email}`, {
      let result = await fetch(`http://localhost:8000/User/verifyOtp/${email}`, {
      method: "PUT",
      body: JSON.stringify({ otp_code }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    console.log("=====result====", result);
    result = await result.json()
    console.log("====*result*====", result);
    if (result?.status === 404) {
      setSendOtplRes(result)
    }
    if (result?.status === 406) {
      setSendOtplRes(result)
    }
    if (result?.status === 200) {
      toggle2()
      setSendOtplRes(result)
    }
  }
  
  async function SendPass() {
    let item = { newPassword, confirmPassword }
    console.log({ item })
    let result = await fetch(`http://localhost:8000/User/newPassword/${email}`, {
    // let result = await fetch(`${REACT_APP_API_ENDPOINT1}/newPassword/${email}`, {
      method: "PUT",
      body: JSON.stringify({ newPassword,confirmPassword}),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    console.log("=====result====", result);
    result = await result.json()
    console.log("====*result*====", result);

    if (result?.status === 200) {
      setSendpassRes(result)
    }
    if (result?.status === 401) {
      setSendpassRes(result)
    }
  }


  const formSubmit = async () => {
    setData({ ...data, loading: true });
    try {
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.token) {
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );
  const closeBtn1 = (
    <button className="close" onClick={toggle1} type="button">
      &times;
    </button>
  );
  const closeBtn2 = (
    <button className="close" onClick={toggle2} type="button">
      &times;
    </button>
  );

  return (
    <Fragment>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="text-center text-2xl mb-6 heading">Login</div>
      {layoutData.loginSignupError ? (
        <div className="bg-red-200 py-2 px-4 rounded">
          You need to login for checkout. Haven't accont? Create new one.
        </div>
      ) : (
        ""
      )}
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" style={{color:"#b21368",fontWeight:600}}>
            Username or email address
            <span className="text-sm text-gray-600 ml-1" style={{color:"#b21368",fontWeight:600}}>*</span>
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.email}
            type="text"
            id="name"
            autoComplete="off"
            className={`${!data.error ? "" : "border-red-500"
              } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error)}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" style={{color:"#b21368",fontWeight:600}}>
            Password<span className="text-sm text-gray-600 ml-1" style={{color:"#b21368",fontWeight:600}}>*</span>
          </label>
          <input
            autoComplete="off"
            onChange={(e) => {
              setData({ ...data, password: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.password}
            type="password"
            id="password"
            className={`${!data.error ? "" : "border-red-500"
              } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error)}
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
        
          <section>
            <Modal isOpen={modal} toggle={toggle} className={className} >
              <ModalHeader toggle={toggle} close={closeBtn}>
                Forget Password
              </ModalHeader>
              <ModalBody lg={12}>
                {/* {
                  sendMailRes?.message && <span>{sendMailRes?.message}</span>
                } */}
                {
                sendMailRes?.message &&
                <span className={sendMailRes?.status === 404 ? "text-danger" : "text-success"}>
                  <i
                  className={sendMailRes?.status === 404 ? "fa fa-exclamation-triangle" : "fa fa-check-circle"}
                    aria-hidden="true"
                  ></i> &nbsp;
                  {sendMailRes?.message}
                </span>
              }<br />
                <label htmlFor="email" style={{color:"#b21368",fontWeight:600}}>
                  Email
                </label>
                <input type="email" name="email" className="form-control input-types" placeholder="Enter Email"
                  onChange={(e) => setEmail(e?.target?.value)} />
              </ModalBody>
              <ModalFooter>
                <Button style={{ backgroundColor: "#b21368" }} className="form-control"
                  onClick={() => {
                    Sendmail();
                  }} > Send Email
                </Button>
              </ModalFooter>
            </Modal>
            <div onClick={toggle} className="cursor-pointer" >
              Forget Password?
            </div>
          </section>

          <Modal isOpen={modal1} toggle={toggle1} className={className} >
            <ModalHeader toggle={toggle1} close={closeBtn1}>
              Otp
            </ModalHeader>
            <ModalBody lg={12}>
              {/* {
                sendOtplRes?.message && <span>{sendOtplRes?.message}</span>
              } */}
              {
                sendOtplRes?.message &&
                <span className={sendOtplRes?.status === 406 ? "text-danger" : "text-success"}>
                  <i
                  className={sendOtplRes?.status === 406 ? "fa fa-exclamation-triangle" : "fa fa-check-circle"}
                    aria-hidden="true"
                  ></i>&nbsp;
                  {sendOtplRes?.message}
                </span>
              }<br />
                  
              <label htmlFor="otp" style={{color:"#b21368",fontWeight:600}}>
                Otp
              </label>
              <input type="text" name="otp" className="form-control input-types" placeholder="Enter Otp"
                onChange={(e) => setotp_code(e?.target?.value)} />
            </ModalBody>
            <ModalFooter>
              <Button style={{ backgroundColor: "#b21368" }} className="form-control"
                onClick={() => { SendOtp() }} > Send Otp
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={modal2} toggle={toggle2} className={className} >
            <ModalHeader toggle={toggle2} close={closeBtn2}>
              Change Password
            </ModalHeader>
            <ModalBody lg={12}>
            {
                sendpassRes?.message &&
                <span className={sendpassRes?.status === 401 ? "text-danger" : "text-success"}>
                  <i
                  className={sendpassRes?.status === 401 ? "fa fa-exclamation-triangle" : "fa fa-check-circle"}
                    aria-hidden="true"
                  ></i>&nbsp;
                  {sendpassRes?.message}
                </span>
              }<br />
              
                  
              <label htmlFor="password" style={{color:"#b21368",fontWeight:600}}>
                Password
              </label>
              <input type="password" name="password" className="form-control input-types" placeholder="Enter Password"
                onChange={(e) => setnewPassword(e?.target?.value)} /><br/>
              <label htmlFor="confirmpassword" style={{color:"#b21368",fontWeight:600}}>
                Confirm Password
              </label>
              <input type="password" name="confirmpassword" className="form-control input-types" placeholder="Enter Confirm Password"
                onChange={(e) => setconfirmPassword(e?.target?.value)} />
            </ModalBody>
            <ModalFooter>
              <Button style={{ backgroundColor: "#b21368" }} className="form-control"
                onClick={() => { SendPass() ; history.push("/login")}} > Submit
              </Button>
    
            </ModalFooter>
          </Modal>

        </div>
        <div
          onClick={(e) => formSubmit()}
          style={{ background: "#b21368" }}
          className="font-medium px-4 py-2 text-white text-center cursor-pointer"
        >
          Login
        </div>
      </form>
    </Fragment>
  );
};

export default Login;




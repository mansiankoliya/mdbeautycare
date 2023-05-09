import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AdminFooter from '../partials/AdminFooter';
import AdminNavber from '../partials/AdminNavber';
// import AdminSidebar from '../partials/AdminSidebar';
import Table from 'react-bootstrap/Table';
import { BsTrash3Fill, BsPencilSquare } from "react-icons/bs";
import './adminCss.css';

const AdminLogin = (props) => {
  // modal ================
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  const history = useHistory();
  // form =================
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const history = useHistory()
  // async function Adminsingin() {
  //     // console.log(email,password)
  //     let item = { email, password }
  //     console.log(item)
  //     let result = await fetch("http://localhost:8000/admin/login", {
  //         method: "POST",
  //         body: JSON.stringify(item),
  //         headers: {
  //             "Content-Type": "application/json",
  //             "Accept": "application/json"
  //         }
  //     })
  //     result = await result.json()
  //     console.log("result", result)
  //     history.push("/admin/dashboard")
  // }
  return (
    <>
      <div>
        <AdminNavber />
        {/* <AdminSidebar /> */}
        {/* <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' /><br /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enetr Password' /><br /><br />
                <button onClick={Adminsingin}>submit</button>
            </div> */}
        <div className='flx'>
          <div
            style={{ boxShadow: "1px 1px 8px 0.2px #aaaaaa" }}
            id="sidebar"
            className="hidden md:block sticky top-0 left-0 h-screen md:w-3/12 lg:w-2/12 sidebarShadow bg-white text-gray-600 sidebar">
            <div
              onClick={(e) => history.push("/admin/dashboard")}
              className={`${location.pathname === "/admin/dashboard"
                ? "border-r-4 border-gray-800 bg-gray-100"
                : ""
                } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center `}
            >
              <span>
                <svg
                  className="w-8 h-8 text-gray-600 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="hover:text-gray-800">Dashboard</span>
            </div>
            <hr className="border-b border-gray-200" />
            <div
              onClick={(e) => history.push("/admin/dashboard/categories")}
              className={`${location.pathname === "/admin/dashboard/categories"
                ? "border-r-4 border-gray-800 bg-gray-100"
                : ""
                } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center `}
            >
              <span>
                <svg
                  className="w-8 h-8 text-gray-600 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="hover:text-gray-800">Categories</span>
            </div>
            <hr className="border-b border-gray-200" />
            <div
              onClick={(e) => history.push("/admin/dashboard/products")}
              className={`${location.pathname === "/admin/dashboard/products"
                ? "border-r-4 border-gray-800 bg-gray-100"
                : ""
                } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center `}
            >
              <span>
                <svg
                  className="w-8 h-8 text-gray-600 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </span>
              <span className="hover:text-gray-800">Product</span>
            </div>
            <hr className="border-b border-gray-200" />
            <div
              onClick={(e) => history.push("/admin/dashboard/orders")}
              className={`${location.pathname === "/admin/dashboard/orders"
                ? "border-r-4 border-gray-800 bg-gray-100"
                : ""
                } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center `}
            >
              <span>
                <svg
                  className="w-8 h-8 text-gray-600 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <span className="hover:text-gray-800">Order</span>
            </div>
            <hr className="border-b border-gray-200" />

            <div
              onClick={(e) => history.push("/admin/dashboard/adminlogin")}
              className={`${location.pathname === "/admin/dashboard/adminlogin"
                ? "border-r-4 border-gray-800 bg-gray-100"
                : ""
                } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center `}
            >
              <span>
                <svg
                  className="w-8 h-8 text-gray-600 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <span className="hover:text-gray-800">AdminLogin</span>
            </div>



            <div className='main'>
              <div className='add-admin px-5 py-3'>
                <div>
                  <button className='add-btn-admin px-5 py-2' onClick={handleShow} >
                    Add Admin
                  </button>
                  <Modal show={show} onHide={handleClose} backdrop="static" size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                      <Modal.Title className='admin-title'>Add New Admin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className='label mb-2'>Admin Email</Form.Label>
                          <Form.Control type="email" className='input-type' placeholder="Enter admin email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className='label mb-2'>Password</Form.Label>
                          <Form.Control type="password" className='input-type' placeholder="Password" />
                        </Form.Group>
                        <button className='submit-btn-admin px-5 py-2 mt-3' type="submit">
                          Submit
                        </button>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant='danger' className='close-btn px-5 py-2' onClick={handleClose}>
                        Close
                      </Button>
                      {/* <button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </button> */}
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
            {/*  ========= table =========== */}
            {/* <Table striped hover className='w-75 tblcss'> */}
              <Table striped hover className='w-75 mx-5 my-3 tblcss'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Admin Name</th>
                  <th>Admin Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td className='action'>
                    <span><BsPencilSquare className='icons text-success' onClick={handleShow} /></span>
                    <span><BsTrash3Fill className='icons text-danger' /></span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td className='action'>
                    <span><BsPencilSquare className='icons text-success' onClick={handleShow} /></span>
                    <span><BsTrash3Fill className='icons text-danger' /></span>
                  </td>
                </tr>
              </tbody>
            </Table>

          </div>

        </div>

      </div>
      <AdminFooter />
    </>
  )
}
export default AdminLogin;








import React, { Fragment } from 'react'
import AdminLayout from '../layout';
import AdminLogin from '../adminLogin'

export const AdminLoginComponent = () => {
  return (
    <>
     <div><AdminLogin/></div>
    </>
    
  )
}

const Admin = (props) => {
    return(
        <Fragment>
            <AdminLayout children={<AdminLoginComponent/>} />
        </Fragment>
    )
}
export default Admin;
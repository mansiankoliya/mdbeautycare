import React from 'react'
import { Navber } from '.'
import AdminFooter from '../../admin/partials/AdminFooter'
import SingleProduct from './SingleProduct'

import './style.css'
function Shop() {
    return (
        <>
            <Navber />
            <section className='main_header'>
                <div className='header_page'>
                    <h1 className="img-heading">Shop</h1>
                </div>
            </section>
            <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <SingleProduct />
            </section>

            <AdminFooter />
        </>
    )
}

export default Shop
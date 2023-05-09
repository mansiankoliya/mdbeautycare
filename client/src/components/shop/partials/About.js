import React from "react";
import Navber from "./Navber";
import './Aboutcss.css';
import AdminFooter from "../../admin/partials/AdminFooter";

export default function About() {
    return (
        <div>
            <Navber />
            <section className='main_header'>
                <div className='header_page'>
                    <h1 className="img-heading">About</h1>
                </div>
            </section>
            <section className="about_one_section">
                <div className="con_tainer">

                    <div className="heading_text">
                        <p className="subtitle">Connecting Brand</p>
                        <b>  <h1 className="hh1">Best Selling Brands</h1></b>
                    </div>

                    <div className="about_card_section">

                        <div className="single_card">

                            <div className="img_text">
                                <img src="./img/about/contentimage1.jpg" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorpere.</p>
                            </div>

                            <div className="heading_text">
                                <h1 className="hh1"><span>01.</span>Nail Polish</h1>
                            </div>

                        </div>

                        <div className="single_card">

                            <div className="img_text">
                                <img src="./img/about/contentimage2.jpg" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorpere.</p>
                            </div>

                            <div className="heading_text">
                                <h1 className="hh1"><span>02.</span>Assorted</h1>
                            </div>

                        </div>

                        <div className="single_card">

                            <div className="img_text">
                                <img src="./img/about/contentimage3.jpg" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorpere.</p>
                            </div>

                            <div className="heading_text">
                                <h1 className="hh1"><span>03.</span>Lip Sticks</h1>
                            </div>

                        </div>

                    </div>

                </div>
            </section><br /><br />
            <section className="align">
                <div className='row text-center'>
                    <div className='col-md-6 text-center'>
                        <br /><br />
                        <h6 style={{ color: "#b21368", opacity: "0.5" }} className="method_name">Traditional Methods</h6>
                        <h2 style={{ color: "rgb(178, 19, 104)" ,fontSize:"38px"}} className="herbal">Herbal Body Lotion</h2><br />
                        <div className="cosmetics">
                            <p>All are Herbal Cosmetics and it is formulated, using various permissible herbal
                                cosmetic ingredients which are 100% safe & pure Herbal products.</p>
                        </div>
                        <br /><br />
                        
                    </div>
                    <div className='col-md-6'>
                        <img src='/img/about/content-banner-image1.jpeg' className='aboutimg' />
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-md-6'>
                        <br /><br />
                        <img src='/img/about/content-banner-image2.jpeg' className='aboutimg' />
                    </div>
                    <div className='col-md-6 txtcen text-center'>
                        <br /><br /><br /><br />
                        <h6 style={{ color: "#b21368", opacity: "0.5" }} className="method_name">Cosmetic Revolution</h6>
                        <h2 style={{ color: "rgb(178, 19, 104)" ,fontSize:"38px" }} className="herbal">Organic Serium</h2><br />
                        <div className="cosmetics">
                            <p>All are Herbal Cosmetics and it is formulated, using various permissible herbal
                                cosmetic ingredients which are 100% safe & pure Herbal products.</p>
                        </div>
                        <br /><br />
                      
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-md-6 txtcen text-center'>
                        <br /><br /><br /><br />
                        <h6 style={{ color: "#b21368", opacity: "0.5" }} className="method_name">Physicians Formula</h6>
                        <h2 style={{ color: "rgb(178, 19, 104)" ,fontSize:"38px" }} className="herbal">Herbal Face Cream</h2><br />
                        <div className="cosmetics">
                            <p>All are Herbal Cosmetics and it is formulated, using various permissible herbal
                                cosmetic ingredients which are 100% safe & pure Herbal products.</p>
                        </div>
                        <br /><br />
                   
                    </div>
                    <div className='col-md-6'>
                        <br /><br />
                        <img src='/img/about/content-banner-image3.jpeg' className='aboutimg' />
                    </div>
                </div>

            </section><br /><br />
            <AdminFooter />
        </div>
    )
}

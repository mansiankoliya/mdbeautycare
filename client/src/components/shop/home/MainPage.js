import React, { Fragment, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import Lip from '../../../assets/ProductImage/LiquidLip1.jpg'
import EyeShadow from '../../../assets/ProductImage/eye-shadow.jpg'
import Brush from '../../../assets/ProductImage/brush.jpg'
import GlowBlush from '../../../assets/ProductImage/glow.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css'

const MainPage = () => {
    const history = useHistory();
    return (
        <Fragment>
            <div className="con_tainer">
                <section className="product_section">
                    <div className="heading">
                        <div className='heading-one'>
                            <span className='sub-title'>Fresh</span>
                        </div>
                        <div className='heading-two'>
                            <span>Arrivals</span>
                        </div>
                    </div>

                    {/* <div className="card_section">
                        <div className="single_card">
                            <div className="card_img">
                                <img src="./img/ProductImages01.png" />
                                <div className="card_round1"></div>
                            </div>
                            <div className="card_info">
                                <b> <h2 className="hh2">Fairness Cream</h2></b>
                                <h5 className='hh5'>Start ₹190</h5>
                            </div>
                        </div>
                        <div className="single_card">
                            <div className="card_img">
                                <img src="./img/ProductImages02.png" />
                                <div className="cardround2"></div>
                            </div>
                            <div className="card_info">
                                <b>   <h2 className="hh2">Beauty Cream</h2></b>
                                <h5 className='hh5'>Start ₹170</h5>
                            </div>
                        </div>
                        <div className="single_card">
                            <div className="card_img">
                                <img src="./img/ProductImages03.png" />
                                <div className="card_round3"></div>
                            </div>
                            <div className="card_info">
                                <b> <h2 className="hh2">Dry Skin</h2></b>
                                <h5 className='hh5'>Start ₹187</h5>
                            </div>
                        </div>
                    </div> */}

                    <div className='card-product px-4'>
                        <div className='card-section'>
                            <Card className='main-card'>
                                <Card.Img className='card-img' variant="top" src={EyeShadow}
                                    onClick={() => {
                                        return (
                                            history.push("/shop")
                                        )
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title className='card-title'>EyeShadow Palette</Card.Title>
                                    <Card.Text className='card-text'>
                                        <span className='price'>Price : ₹ 499</span><br />
                                        <small>The ultimate everyday palette! Own your power with this luxurious line-up of buttery-smooth golds.</small>
                                        <button className='submit-btn1 mt-2' onClick={(e) => history.push("/shop")}>Shop Now</button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='main-card'>
                                <Card.Img className='card-img' variant="top" src={Lip}
                                   onClick={() => {
                                    return (
                                        history.push("/shop")
                                    )
                                }}
                                 />
                                <Card.Body>
                                    <Card.Title className='card-title'>Liquid Matte Lipstick</Card.Title>
                                    <Card.Text className='card-text'>
                                        <span className='price'>Price : ₹ 399</span><br />
                                        <small>Now with an extended shade range suitable for ALL skin tones.</small><br/><br/>
                                        <button className='submit-btn1 mt-2' onClick={(e) => history.push("/shop")}>Shop Now</button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='main-card'>
                                <Card.Img className='card-img' variant="top" src={Brush} 
                                   onClick={() => {
                                    return (
                                        history.push("/shop")
                                    )
                                }}
                                />
                                <Card.Body>
                                    <Card.Title className='card-title'> Face Skin Perfector Brush</Card.Title>
                                    <Card.Text className='card-text'>
                                        <span className='price'>Price : ₹ 250</span><br />
                                        <small>Works with all cream formulas (including highlighter, foundation & blush)</small><br/><br/>
                                        <button className='submit-btn1 mt-2' onClick={(e) => history.push("/shop")}>Shop Now</button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='main-card'>
                                <Card.Img className='card-img' variant="top" src={GlowBlush} 
                                   onClick={() => {
                                    return (
                                        history.push("/shop")
                                    )
                                }}
                                />
                                <Card.Body>
                                    <Card.Title className='card-title'>Glow Blush </Card.Title>
                                    <Card.Text className='card-text'>
                                        <span className='price'> Price : ₹ 500</span><br />
                                        <small>Universal shade (suitable for all skin tones)</small><br/><br/>
                                        <button className='submit-btn1 mt-2' onClick={(e) => history.push("/shop")}>Shop Now</button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </section>
                
                <section className="compny_logo mt-5">

                    <div className="heading_text mb-5">

                        <p className='heading-one1'>Connecting Brand</p>
                        <b>  <h1 className="hh1">Best Selling Brands</h1></b>
                    </div>

                    <div className="logo_flex">

                        <div className="single_logo">
                            <img src="./img/logo/angelcosmetic.jpg" />
                        </div>

                        <div className="single_logo">
                            <img src="./img/logo/Beautyonlinestore.jpg" />
                        </div>

                        <div className="single_logo">
                            <img src="./img/logo/bemacosmetic.jpg" />
                        </div>

                        <div className="single_logo">
                            <img src="./img/logo/makebelievebeauty.jpg" />
                        </div>

                        <div className="single_logo">
                            <img src="./img/logo/makeup.jpg" />
                        </div>

                        <div className="single_logo">
                            <img src="./img/logo/nature.jpg" />
                        </div>

                        <div className="single_logo">
                            <img src="./img/logo/primrose.jpg" />
                        </div>

                        <div className="single_logo">
                            <img src="./img/logo/skincare.jpg" />
                        </div>

                    </div>

                </section>
            </div>
            <section className='herbal mt-5'>
                <div className='row text-center herbal_body'>
                    <div className='col-md-6'>
                     
                        <h6 style={{ color: "#b21368", opacity: "0.5" }} className='mb-3 mt-5 pt-5'>Traditional Methods</h6>
                        <h2 style={{ color: "#b21368", fontSize: "35px" }} className='mb-3 herbal-title'>Herbal Body Lotion</h2>
                        <div className="herbal-details">
                            <p>All are Herbal Cosmetics and it is formulated, using various permissible herbal
                                cosmetic ingredients which are 100% safe & pure Herbal products.</p>
                        </div>
                       
                    </div>
                    <div className='col-md-6 fullwidth'>
                        <img src='/image/About/contentbannerimage1.jpg' className=' img-fluid' />
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-md-6 fullwidth mb-5'>
                     
                        <img src='/image/About/contentbannerimage2.jpg' className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                     
                        <h6 style={{ color: "#b21368", opacity: "0.5" }} className='mb-3 mt-5 pt-5'>Cosmetic Revolution</h6>
                        <h2 style={{ color: "#b21368", fontSize: "38px" }} className='mb-3 herbal-title'>Organic Serium</h2>
                        <div className="herbal-details">
                            <p>All are Herbal Cosmetics and it is formulated, using various permissible herbal
                                cosmetic ingredients which are 100% safe & pure Herbal products.</p>
                        </div>
                        <br /><br />
                 
                    </div>
                </div>
           

            </section>

            <section className='delivery'>
                <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" className='iconcss'></link>
                <div className='row text-center delivery_section'>
                    <div className='col-md-6 delivery-card'>
                        <span className="lnr lnr-earth delivery-icons mb-3"></span>
                        <h4 style={{ color: "#b21368" }} className='mt-4 delivery-section'>DELIVERY WORLDWIDE</h4>
                        <p>We guarantee that the items you are going to buy will
                            be delivered to you in less than 48 hours</p>
                    </div>
                  
                    <div className='col-md-6 delivery-card '>
                        <span className="lnr lnr-phone-handset delivery-icons"></span>
                        <h4 style={{ color: "#b21368" }} className='mt-4 delivery-section'>EXCELLENT SUPPORT</h4>
                        <p>We love our customers and they can reach us any time
                            of day we will be at your service 24/7</p>
                    </div>
                </div>
            </section><br />
        </Fragment>
    )
}

export default MainPage
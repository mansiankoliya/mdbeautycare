import React, { useState } from 'react'
import { Footer, Navber } from '.';
// import videosimg from './videosimg/MrBounce-Video.mp4';
import './dailyInspiration.css'
import videosimg from '../../../assets/videosimg/MrBounce-Video.mp4';
import videosimg1 from '../../../assets/videosimg/videos1.mp4';
import videosimg2 from '../../../assets/videosimg/videos2.mp4';
import videosimg3 from '../../../assets/videosimg/videos3.mp4';
import videosimg4 from '../../../assets/videosimg/videos4.mp4';
import videosimg5 from '../../../assets/videosimg/videos5.mp4';
import videosimg6 from '../../../assets/videosimg/videos6.mp4';
import videosimg7 from '../../../assets/videosimg/videos7.mp4';
import videosimg8 from '../../../assets/videosimg/videos8.mp4';

function DailyInspriration() {
    const [email, setEmail] = useState({})
    const [name, setName] = useState({})
    const [sendMailRes, setSendMailRes] = useState('')


    async function Subscriber() {
        let item = { name, email }
        let result = await fetch("http://localhost:8000/subscriber/InsertSubscriber", {
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        console.log("=====result====", result);
        result = await result.json()
        console.log("====*result*====", result);
        if (result?.status === 500) {
            setSendMailRes(result)
        }
        if (result?.status === 200) {
            setSendMailRes(result)
        }
        // console.log("====*result*====", result?.message);
    }
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <section>
                <Navber />
            </section>
            <section className='main_header'>
                <div className='header_page'>
                    <h1 className="img-heading">Demo</h1>
                </div>
            </section>
            <section>
                <div className="heading_text">
                    <p className="subtitle mt-4">How to Apply</p>
                    <h1 className="hh1">Demo</h1>
                </div>
            </section>
            <section>
                <div style={{ marginTop: "10px", textAlign: "center" }} className="d-flex justify-content-around">
                    <video width="30%" height="50%" controls>
                        <source src={videosimg} type="video/mp4" />
                    </video>

                    <video width="30%" height="50%" controls>
                        <source src={videosimg1} type="video/mp4" />
                    </video>

                    <video width="30%" height="50%" controls>
                        <source src={videosimg2} type="video/mp4" />
                    </video>
                </div>
                <div style={{ marginTop: "10px", textAlign: "center" }} className="d-flex justify-content-around">
                    <video width="30%" height="50%" controls>
                        <source src={videosimg3} type="video/mp4" />
                    </video>

                    <video width="30%" height="50%" controls>
                        <source src={videosimg4} type="video/mp4" />
                    </video>

                    <video width="30%" height="50%" controls>
                        <source src={videosimg5} type="video/mp4" />
                    </video>
                </div>
                <div style={{ marginTop: "10px", textAlign: "center" }} className="d-flex justify-content-around">
                    <video width="30%" height="50%" controls>
                        <source src={videosimg6} type="video/mp4" />
                    </video>

                    <video width="30%" height="50%" controls>
                        <source src={videosimg7} type="video/mp4" />
                    </video>

                    <video width="30%" height="50%" controls>
                        <source src={videosimg8} type="video/mp4" />
                    </video>
                </div>
            </section>
            <section>
                <div className='container video-forms'>
                    {
                        sendMailRes?.message &&
                        <span className={sendMailRes?.status === 500 ? "text-danger" : "text-success"}>
                            <i
                                className={sendMailRes?.status === 500 ? "fa fa-exclamation-triangle" : "fa fa-check-circle"}
                                aria-hidden="true"
                            ></i> &nbsp;
                            {sendMailRes?.message}
                        </span>
                    }<br/>
                    <label htmlFor='name' className='mb-2 input-label'>Name : </label>
                    <input type="text" placeholder='Name' name='name' id='name' className='form-control mb-4 input-types'
                        autoComplete='off'
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: "8px" }}
                        required
                    />
                    <label htmlFor='email' className='mb-2 input-label'>Email : </label>
                    <input type="email" placeholder="Email" name='email' id='email' className='form-control mb-4 input-types'
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='off'
                        style={{ padding: "8px" }}
                        required
                    />
                    <button className="submit-btn mb-4" onClick={Subscriber}>Subscribe</button>
                </div>
            </section>

                <Footer />
        </div>

    )
}

export default DailyInspriration


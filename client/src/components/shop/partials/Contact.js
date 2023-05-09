import React from 'react'
import { useState } from 'react';
import Footer from './Footer'
import Navber from './Navber'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './contactcss.css';

const { REACT_APP_API_ENDPOINT } = process.env
// const apiURL = process.env.REACT_APP_API_URL;

function Contact() {
    const [FirstName, setFirstName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [sendconRes, setSendconRes] = useState('')
    // const history = useHistory();
    async function ContactSend() {
        let item = { FirstName, PhoneNumber, Email, Message }
        console.log(item)
        let result = await fetch(`${REACT_APP_API_ENDPOINT}/contact/insert`, {
            // let result = await fetch("http://localhost:8000/api/contact/insert", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        console.log("=================result", result)
        result = await result.json()
        console.log("=======after==========result", result)
        // history.push("/");

        if (result?.status === 200) {
            setSendconRes(result)
        }
        if (result?.status === 500) {
            setSendconRes(result)
        }
    }

    const handleChange = (e) => {
        setFirstName(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    } 
    return (
        <div>
            <Navber />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <section className='main_header'>
                <div className='header_page'>
                    <h1 className="img-heading">Contact</h1>
                </div>
            </section>
            <section className='text-center'><br /><br />
                <h1 className='keep'>Keep in </h1><br />
                <h1 className='heading'>Touch with Us</h1>
                <p>Enim, suscipit in aliquet orci bibendum. Pellentesque neque, eu eu libero, amet, </p>
                <p>  duis facilisis pulvinar netus. Neque eget nullam tellus</p>

            </section>
            <section className='contact_us contact'>
                <div className="contact-box">
                    <div className="contact-links"></div>
                    <div className="contact-form-wrapper">
                        <div>
                            {
                                sendconRes?.message &&
                                <span className={sendconRes?.status === 500 ? "text-danger" : "text-success"}>
                                    <i
                                        className={sendconRes?.status === 500 ? "fa fa-exclamation-triangle" : "fa fa-check-circle"}
                                        aria-hidden="true"
                                    ></i>&nbsp;
                                    {sendconRes?.message}
                                </span>
                            }<br />

                        </div>
                        <br />
            
                        <Form action=''>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='input-label mb-2'>Name: </Form.Label>
                                <Form.Control type="text" placeholder="Name" className='px-2 input-types' value={FirstName} onChange={(e) => { handleChange(e) }} autoComplete="off" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='input-label mb-2'>Email: </Form.Label>
                                <Form.Control type="email" placeholder="Email" className='px-2 input-types' value={Email} onChange={(e) => { handleEmailChange(e) }} autoComplete="off" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='input-label mb-2'>Phone: </Form.Label>
                                <Form.Control type="tel" placeholder="Phone" className='px-2 input-types' value={PhoneNumber} onChange={(e) => { handlePhoneChange(e) }} autoComplete="off" required maxLength={10} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='input-label mb-2 input-label'>Send Your Messege</Form.Label>
                                <Form.Control as="textarea" rows={2} placeholder='Send Your Messege' className='px-2 input-textarea' value={Message} onChange={(e) => { handleMessageChange(e) }} autoComplete="off" required />
                            </Form.Group>
                            <button className='px-5 submit-btn' type='submit' onClick={ContactSend}>Send</button>
                            {/* <Button className='px-5 submit-btn' type='submit' onClick={ContactSend}>Send</Button>{' '} */}
                            {/* <Button variant="primary" className='px-5 submit-btn' type='submit' onClick={ContactSend}>Send</Button>{' '} */}
                        </Form>
                    </div>
                </div>
            </section>
            <br /><br />
            <section className='mapp'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5270202911233!2d72.85421497513433!3d21.210940180484357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f51afc29975%3A0xc70d6eb0d9789582!2sBeauty%20House%20Varachha!5e0!3m2!1sen!2sin!4v1682092284541!5m2!1sen!2sin"
                    width="100%" height="450" loading="lazy"></iframe>
            </section><br /><br />
            <section>
                <div className='row text-center'>
                    <div className='col-md-4'>
                        <h3 className='add_res'>Address</h3>
                        <h6><p>M & D Beaty Care </p> <p>Mota Varachha, Surat</p>
                            <p>Near S.V.Patel College</p></h6>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='con_tact'>Contact</h3>
                        <h6><p>
                            Mobile: +91 99771 22342</p>
                            <p> Hotline: 1800 33886</p>
                            <p> E-mail: mndbeautycare@gmail.com
                            </p></h6>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='op_hour'>Opening Hour</h3>
                        <h6><p>Monday To  Friday: 08:30 To 08:30</p>
                            <p> Saturday & Sunday: 09:30 To 9:30</p></h6>
                    </div>
                </div>
            </section>
            <Footer />
           
           
        </div>
    )
}

export default Contact






import React,{useRef, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Styles/Contact.css';
import contactImg from '../Assets/Images/Contact.png'
import emailjs from '@emailjs/browser';
import Tilt from 'react-parallax-tilt';



const Contact = () => {
    const form = useRef();

    const formIntailDetails={
        firstName:'',
        lastName:'',
        email: '',
        phone:'',
        message:''
    }

    const [formDetails,setFormDetails]=useState(formIntailDetails);
    const [buttonText,setButtonText]=useState("Send");

    const onFormUpdate =(category,value) =>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setButtonText('Sending..');
        document.getElementById('contactButton').style.animation = "bounceOutRight 2s linear 1";


        await emailjs.sendForm('service_tr7yu0g', 'template_two0n08', form.current, 'lbhU7EYsnco8pU3cE')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
         setButtonText("Send");
         setFormDetails(formIntailDetails);
         document.getElementById('contactButton').style.animation = null;

    }

    return (
        <>
        <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <Tilt><img src={contactImg}  className='ContactImg' alt='Contact Us'/></Tilt>
                </Col>
                <Col md={6}>
                    <h2> Contact :</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type='text' value={formDetails.firstName} placeholder='First Name'  name='user_name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type='email' value={formDetails.email} placeholder='Email Address' name='user_email' onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type='tel' value={formDetails.phone} placeholder='Phone No.' name='user_phone' onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col sm={12}>
                                <textarea rows='6' value={formDetails.message} placeholder='Message' name='message' onChange={(e)=>onFormUpdate('message',e.target.value)}/>
                                <button id='contactButton' type='submit'><span>{buttonText}</span></button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
        </section>
        </>
    )
}

export default Contact;
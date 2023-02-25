import React,{useEffect,useState} from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import headerImg from '../Assets/Images/HeaderImg.gif';
import '../Styles/Banner.css';

const Banner = () => {
    const [loopNum,setLoopNum] =useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate =['Web Developer'];
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(300 -Math.random()*100);
    const period=2000;


    useEffect(() => {
        let ticker=setInterval(() => {
            tick();
        },delta);

        return () => {clearInterval(ticker)};
        // eslint-disable-next-line
    },[text])

    const tick = () =>{
        let i=loopNum  % toRotate.length;
        let fullText= toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
        <>
        <section  className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome To My Portfolio</span>
                        <h2>{'Hi I am '} <br /> <span className='Name'>Rohit.B</span> <br /> <span className='wrap'>{text} &nbsp;</span></h2>
                        <p>I am self taught Web developer who is able to acknowledge projects from the ground up. I am well versed in Frontend & Backend Technologies and I am able to design, code and deploy in an organised and efficient manner.</p>
                        <a href="https://drive.google.com/file/d/1nwKLd7F9Xbc9N1ztCr9p2d3IcYXgPo1q/view?usp=drivesdk " target="__blank"><button>Resume<ArrowDownCircle size={25}/></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} className='image' alt="HeaderImg" />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Banner
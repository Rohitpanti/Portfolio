import React,{ useEffect, useState }  from 'react';
import { Navbar,Container ,Nav} from 'react-bootstrap';
import LogoImg from '../Assets/Images/Logo.png';
import LinkedinImg from '../Assets/Images/Linkedin.svg';
import GithubImg from '../Assets/Images/GitHub.svg';
import '../Styles/NavBar.css';

const NavBar = () => {
    const[activeLink,SetActiveLink] = useState('home');
    const [scrolled,SetScrolled] = useState('false');

    useEffect(()=>{
        const onScroll= ()=>{
            if(window.scrollY >50){
                SetScrolled(true);
            }else{
                SetScrolled(false);
            }
        }

    window.addEventListener('scroll',onScroll);

    return ()=> window.removeEventListener('scroll',onScroll);

    },[]);

    const onUpdateActiveLink = (value) => {
        SetActiveLink(value);
    }

  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}> 
      <Container>
        <Navbar.Brand href="#home">
            <img src={LogoImg} alt="Logo" width='50rem' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'  } onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'  } onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'  } onClick={()=> onUpdateActiveLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className="navbarText">
                <div className="socialIcon">
                    <a href="https://www.linkedin.com/in/rohit-b-854268219/" target="__blank"><img src={LinkedinImg} alt="linkedin" /></a>
                    <a href="https://github.com/Rohitpanti" target="__blank"><img src={GithubImg} alt="Github"  /></a>
                </div>
            <a href="#connect"><button className='vvd'><span>Let's Connect</span></button></a>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
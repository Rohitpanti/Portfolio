import React from 'react';
import '../Styles/Projects.css';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

//ASSETS
import notebookImg from '../Assets/ProjectsImages/MyNoteBook.jpg'
import textImg from '../Assets/ProjectsImages/Textophile.jpg'
import newsImg from '../Assets/ProjectsImages/KhabarDaar.jpg'
import translatorImg from '../Assets/ProjectsImages/Translator.jpg'
import gofImg from '../Assets/ProjectsImages/Gof.jpg'
import weatherImg from '../Assets/ProjectsImages/weather.jpg'
import chatImg from '../Assets/ProjectsImages/ChatApp.jpg'
import pdfImg from '../Assets/ProjectsImages/Pdf.jpg'
import danceImg from '../Assets/ProjectsImages/Dance.jpg'
import dictionaryImg from '../Assets/ProjectsImages/Dictionary.jpg'
import fbImg from '../Assets/ProjectsImages/fbLogin.jpg'
import msImg from '../Assets/ProjectsImages/MicrosoftClone.jpg'
import musicImg from '../Assets/ProjectsImages/Amuzic.jpg'
import learnImg from '../Assets/ProjectsImages/Learn.jpg'
import tictactoeImg from '../Assets/ProjectsImages/TicTacToe.jpg'
import snakeImg from '../Assets/ProjectsImages/Snake.jpg'
import analogImg from '../Assets/ProjectsImages/Analogclock.jpg'
import rtubeImg from '../Assets/ProjectsImages/RohTube.jpg'

const Projects = () => {

    const projects = [
        {
            title: "My-NoteBook",
            desc: "MERN stack project that allows users to create, edit, and organize their notes.",
            imgUrl: notebookImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/MyNoteBook',
        },
        {
            title: "KhabarDaar",
            desc: "This is React Js App that is Built using Bootstrap and Fetches news from News api.",
            imgUrl: newsImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/KhabarDaar-News-app',
        },
        {
            title: "Rohtube",
            desc: "YouTube Clone Made Using MERN Stack",
            imgUrl: rtubeImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/Rohtube',
        },
        {
            title: "TextOphile",
            desc: "A React Project  which Allows The User to perform Different Operations on a entered Text.",
            imgUrl: textImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/TextOphile-React/',
            gitLink:'https://github.com/Rohitpanti/TextOphile-React',
        },
        {
            title: "Game of Flags",
            desc: "A Quiz game Made with React Js.",
            imgUrl: gofImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/Game-of-Flags/',
            gitLink:'https://github.com/Rohitpanti/Game-of-Flags',
        },
        {
            title: "Translator",
            desc: " A React app that fetches data from Libre Translate",
            imgUrl: translatorImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/TransLator/',
            gitLink:'https://github.com/Rohitpanti/TransLator',
        },
        
    ]

    const projects2 = [
        {
            title: "Chatte App",
            desc: "A App  built Using Socket io that allows you To Chat in group ",
            imgUrl: chatImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/Chat-App',
        },
        {
            title: "PDf Merger",
            desc: "Merges Two Different Pdfs Into a single Pdf",
            imgUrl: pdfImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/MpDf-PDF-Merger',
        },
        {
            title: "Dance Academy",
            desc: "A Multipage Web app that Collects Info & Stores in mongoDB",
            imgUrl: danceImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/Dance-Academy',
        },
        {
            title: "ADictionary",
            desc: " E-Dictionry that fetches meaning from free dictionary api",
            imgUrl: dictionaryImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/A-DicTionary--eDictionary',
        },
        {
            title: "fb-loginPage Clone",
            desc: "Made with Tailwind CSS Framework",
            imgUrl: fbImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/FB-login-Page-Clone',
        },
        {
            title: "Microsoft Page Clone",
            desc: "Made with Tailwind CSS Framework",
            imgUrl: msImg,
            Demo:false,
            gitLink:'https://github.com/Rohitpanti/FB-login-Page-Clone',
        },
    ]
    const projects3 = [
        {
            title: "Amuzic",
            desc: "Music player That plays Your fav Songs",
            imgUrl: musicImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/AmuZic-Player/',
            gitLink:'https://github.com/Rohitpanti/AmuZic-Player',
        },
        {
            title: "Mausam ",
            desc: "Weather App that fetches data from weather by api ninja",
            imgUrl: weatherImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/Mausam-Weather-App/',
            gitLink:'https://github.com/Rohitpanti/Mausam-Weather-App',
        },
        {
            title: "Learn with Passion",
            desc: "A Html&Css Demo Page",
            imgUrl: learnImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/LearnwithPassion/',
            gitLink:'https://github.com/Rohitpanti/LearnwithPassion',
        },
        {
            title: "TicTacToe",
            desc: "The Timepass game We all played During Class.",
            imgUrl: tictactoeImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/TicTacToe/',
            gitLink:'https://github.com/Rohitpanti/TicTacToe',
        },
        {
            title: "SaanpEra-Snake Game",
            desc: "The Unforgetable game that made Our childhood Awsome.",
            imgUrl: snakeImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/SaanpEra-SnakeGame/',
            gitLink:'https://github.com/Rohitpanti/SaanpEra-SnakeGame',
        },
        {
            title: "Analog Ghadi",
            desc: "Apna Time Ayega Jab tu Time Dekhega",
            imgUrl: analogImg,
            Demo:true,
            demoLink:'https://rohitpanti.github.io/Analog-Ghadi/',
            gitLink:'https://github.com/Rohitpanti/Analog-Ghadi',
        },
    ]



    return (
        <>
            <section className="project" id='projects'>
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>With Every Project I learn SomeThing New that helps me Improve in Future Projects.</p>
                            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" defaultActiveKey="/home" className="nav-pills d-flex flex-wrap mb-5 justify-content-center align-items-center" id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">NodeJs & TailwindCss</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">HTML,CSS & JS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane  eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane  eventKey="second">
                                <Row>
                                    {
                                        projects2.map((project,index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                        })
                                    }
                                </Row>
                                </Tab.Pane>
                                <Tab.Pane  eventKey="third">
                                <Row>
                                    {
                                        projects3.map((project,index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                        })
                                    }
                                </Row>
                                </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Projects;
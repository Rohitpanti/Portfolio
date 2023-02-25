import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import skillImg from '../Assets/Images/SkillImg2.gif';
import '../Styles/Skills.css';
import Tilt from 'react-parallax-tilt';


const Skills = () => {
  return (
    <>
    <section className='Skills' id='skills'>
    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={5}>
                <Tilt><img src={skillImg} className='SkillImg'alt="Skill" /></Tilt>
            </Col>
            <Col xs={12} md={6} xl={7}>
                            <div className="stackContainer">
                            <h2 className='mainheading'>Tech Stack :</h2>
                                <div className="languages">
                                    <h5 className='skillHeadings'>Languages :</h5>
                                    <div className="languageContainer imgCss">
                                        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="" />
                                        <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" alt="" />
                                    </div>
                                </div>
                                <div className="framework">
                                    <h5 className='skillHeadings'>JS Framework/Library :</h5>
                                    <div className="frameworkContainer imgCss">
                                        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                                    </div>
                                </div>
                                <div className="cssFramework">
                                    <h5 className='skillHeadings'>CSS Framework/Library/Pre-processors :</h5>
                                    <div className="cssFrameworkContainer imgCss">
                                        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
                                        <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" />
                                    </div>
                                </div>
                                <div className="database">
                                    <h5 className='skillHeadings'>Database :</h5>
                                    <div className="databaseContainer imgCss">
                                        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
                                    </div>
                                </div>
                                <div className="backend">
                                    <h5 className='skillHeadings'>Backend :</h5>
                                    <div className="backendContainer imgCss">
                                        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                                        <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" />
                                    </div>
                                </div>
                                <div className="versionControl">
                                    <h5 className='skillHeadings'>Version Control :</h5>
                                    <div className="versionControlContainer imgCss">
                                        <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="" />
                                        <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" />
                                    </div>
                                </div>
                            </div>
            
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )
  
}

export default Skills
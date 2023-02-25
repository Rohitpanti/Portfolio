import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title,desc,imgUrl,Demo,gitLink,demoLink}) => {
  return (
    <>
    <Col sm={6} md={4}>
        <div className="projImgBox">
                <img  className='ImgSkills' src={imgUrl} alt='projectImg'  />
            <div className="projTxt" >
                <h4>{title}</h4>
                <span>{desc}</span><br />
                <div className="BtnContainer">
                    <a href={gitLink} target="__blank"><button className='btn'>Git Repo</button></a>
                { Demo ?  <a href={demoLink} target="__blank"><button className='btn'>Try it</button></a> : ""}
                </div>
            </div> 
        </div>
    </Col>
    </>
  )
}

export default ProjectCard;
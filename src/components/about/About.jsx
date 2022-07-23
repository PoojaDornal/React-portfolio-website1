import React  from "react";
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const App = () =>{
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                      <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small></small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>10+</small>
                        </article>
                     </div>
                     <p>
                     To learn and implement new things and to work in a growth oriented industry where I can integrate my skills and to make a significant contribution to the success of the company.
                     </p>

                <a href="#contact" className="btn btn-primary" >Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default App;
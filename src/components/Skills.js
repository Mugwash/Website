import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import {Col, Container, Row} from "react-bootstrap";
import Python from "../assets/img/Python.svg.png"
import JS from "../assets/img/JavaScript.svg.png"
import Csharp from "../assets/img/c#.png"
import powershell from "../assets/img/powershell.png"
import Cplusplus from "../assets/img/c++.svg"
import SQL from "../assets/img/SQL (2).svg";
import colorSharp from "../assets/img/colorsharpbleft.png"
import * as React from 'react';
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className="skill" id ="skills" >
            <Container>
                <Row>
                    <Col>
                        <div id="skills-id"/>
                        <div className="skill-bx">
                            <h2>
                                Programming Languages
                            </h2>
                            <p>
                                These are the languages with which I am most familiar, along with my self-assessed proficiency level in each
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={Python} alt={"Image"}/>
                                    <span className="logo-text">Advanced</span>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={Csharp} alt={"Image"}/>
                                    <span className="logo-text">Advanced</span>
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={powershell} alt={"Image"}/>
                                    <span className="logo-text">Associate</span>
                                    <h5>Powershell</h5>
                                </div>
                                <div className= "item">
                                    <img src={JS} alt={"Image"}/>
                                    <span className="logo-text">Associate</span>
                                    <h5>Javascript</h5>
                                </div>
                                <div className= "item">
                                    <img src={SQL} alt={"Image"}/>
                                    <span className="logo-text">Associate</span>
                                    <h5>SQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className = "background-image-left" src={colorSharp} />
        </section>
    )
}
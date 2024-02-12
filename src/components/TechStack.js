import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import {Col, Container, Row} from "react-bootstrap";
import databricks from "../assets/img/databricks.svg";
import cognitive_services from "../assets/img/cognitive_services.png";
import git from "../assets/img/git.svg";
import react from "../assets/img/react.svg";
import colorSharp from "../assets/img/colorsharpbleft.png"
import * as React from 'react';
export const Stacks = () => {
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
        <section className="stack" id ="stacks" >
            <Container>
                <Row>
                    <Col>
                        <div id="skills-id"/>
                        <div className="skill-bx">
                            <h2>
                                Tech Stack
                            </h2>
                            <p>
                                These are the technologies that I am familiar with a self assessed proficiency
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={cognitive_services} alt={"Image"} style={{ width: '150px', height: '150px' }}/>
                                    <span className="tech-text">Associate</span>
                                    <h5>Cognitive Services</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt={"Image"}/>
                                    <span className="tech-text">Advanced</span>
                                    <h5>Git & Bash</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt={"Image"} style={{ width: '150px', height: '150px' }}/>
                                    <span className="tech-text">Associate</span>
                                    <h5>React</h5>
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
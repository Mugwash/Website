import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import * as React from 'react';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects =[
        {
            title:"Ai 5aside",
            description:"AI trained using ML models learn to play 5aside football",
            imgUrl:projImg1,
        },
        {
            title:"Car Kart Game",
            description:"car racing game with self written Physics",
            imgUrl:projImg2,
        },
        {
            title:"Website",
            description:"The Website you are viewing right now! coded from scratch using HTML5,CSS,JS and React",
            imgUrl:projImg3,
        }


    ]
    return(
        <section className="project" id = "project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>list of all my projects</p>
                        <Tab.Container id ="projects-tabs" defaultActiveKey = "first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <p>{project.title}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "second">second</Tab.Pane>
                                <Tab.Pane eventKey = "third">third</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
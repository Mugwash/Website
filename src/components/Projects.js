import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import * as React from 'react';
import { ProjectCard } from "../components/ProjectCards";
import projImg1 from "../assets/img/5aside.gif";
import projImg2 from "../assets/img/car3.gif";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon2 from '../assets/img/github-mark-white.svg';
import youtubeIcon from '../assets/img/youtubew.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects =[
        {
            title:"Ai 5aside",
            description:"AI trained using ML models learn to play 5aside football",
            imgUrl:projImg1,
            buttonUrl:"https://youtu.be/RnZHZhu8Bz4",
            buttonImg:youtubeIcon,
        },
        {
            title:"Car Kart Game",
            description:"car racing game with self written Physics, Still in progress.",
            imgUrl:projImg2,
            buttonUrl:"https://github.com/Mugwash/",
            buttonImg:navIcon2,
        },
        {
            title:"Website",
            description:"The Website you are viewing right now! coded from scratch using HTML5,CSS,JS and React",
            imgUrl:projImg3,
            buttonUrl:"https://github.com/Mugwash/",
            buttonImg:navIcon2,
        }


    ]
    return(
        <section className="project" id = "project">
            <Container>
                <div id="projects-id"/>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>list of all my projects</p>
                        <Tab.Container id ="projects-tabs" defaultActiveKey = "first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                                                    <ProjectCard key = {index}
                                                                 {...project}
                                                    />
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
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}
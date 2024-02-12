import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import * as React from 'react';
import { ProjectCard } from "./ProjectCards";
import projImg1 from "../assets/img/5aside.gif";
import projImg2 from "../assets/img/car3.gif";
import projImg3 from "../assets/img/web.gif";
import certImg1 from "../assets/img/azFundamentals.png"
import certImg2 from "../assets/img/DP-900.png"
import AI_102 from "../assets/img/AI-102.png";
import colorSharp2 from "../assets/img/colorsharpb.png";
import navIcon2 from '../assets/img/github-mark-white.svg';
import youtubeIcon from '../assets/img/youtubew.svg';
import credly from '../assets/img/Credly.png';
import 'animate.css';

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
            title:"Unity Vehicle controller to DOTS",
            description:"converted regular game object vehicle controller to a data oriented technology stack",
            imgUrl:projImg2,
            buttonUrl:"https://github.com/Mugwash/Vehicle-Controller-DOTS-ECS",
            buttonImg:navIcon2,
        },
        {
            title:"Website",
            description:"The Website you are viewing right now! coded from scratch using HTML5,CSS,JS and React",
            imgUrl:projImg3,
            buttonUrl:"https://github.com/Mugwash/Website",
            buttonImg:navIcon2,
        }
    ]
    const certs = [
        {
            title: "Azure Fundamentals",
            description: "AI-102",
            imgUrl: AI_102,
            buttonUrl: "https://learn.microsoft.com/api/credentials/share/en-gb/GrimeJack-8580/4B45E5B1DF6000BD?sharingId=31FDFF319B8C9642",
            buttonImg: credly,
        },
        {
            title:"Azure Fundamentals",
            description:"AZ-900",
            imgUrl:certImg1,
            buttonUrl:"https://www.credly.com/badges/8e97d468-d929-42b2-afde-b58ef6f7995a/linked_in",
            buttonImg:credly,
        },
        {
            title:"Azure Data Fundamentals",
            description:"DP-900",
            imgUrl:certImg2,
            buttonUrl:"https://www.credly.com/badges/49d18a31-4ab1-4a18-9b64-a9a8fa90e8b8/linked_in",
            buttonImg:credly,
        }

    ]
    return(
        <section className="project" id = "project">
            <Container>
                <div id="projects-id"/>
                <Row>
                    <Col>
                        <h2>Projects & Certifications</h2>
                        <Tab.Container id ="projects-tabs" defaultActiveKey = "first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Certifications</Nav.Link>
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
                                <Tab.Pane eventKey = "second">
                                    <Row>
                                        {
                                            certs.map((project, index) => {
                                                return(
                                                    <ProjectCard key = {index}
                                                                {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}
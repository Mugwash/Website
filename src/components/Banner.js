import {Col, Container, Row} from "react-bootstrap";
import {Columns} from "react-bootstrap-icons";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {

    return(
        <section className="banner" id = "home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Welcome to my portfolio</span>
                        <h1>
                            {'Hi im Jack'}<span className={"wrap"}></span>
                            <p>I am a specialized IT consultant, with a focus on data engineering and software development. My proficiency in industry standard tools such as Azure and Databricks, as well as my use of source control with Git, have been invaluable in my roles as a Platform Developer, Data Engineer, and Machine Learning Proof of Concept lead. In addition to my expertise in Python, I am also strong in C# due to my game development experience at university and outside of work. Overall, my adaptability, quick learning abilities, and dedication to my work make me a valuable addition to any team.</p>
                            <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size = {25}/></button>
                        </h1>
                    </Col>
                    <col xs={12} md={6} xl={5}>
                        <img src ={headerImg} alt="Header Img"/>
                    </col>
                </Row>
            </Container>

        </section>
    )
}
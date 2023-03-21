import * as React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/selfpic.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [, setIndex] = useState(1);
    const toRotate = [ "Front end Dev", "Software Dev","Game dev" ];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return(

        <section className="banner" id = "home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine"></span>
                        <div id="home-id">
                        <h1>{'Jack Grime'}</h1>
                        </div>
                        <h2>
                            <span className={"wrap"}>{text}</span>
                            <p>I am a specialized IT consultant, with a focus on data engineering and software development. My proficiency in industry standard tools such as Azure and Databricks, as well as my use of source control with Git, have been invaluable in my roles as a Platform Developer, Data Engineer, and Machine Learning Proof of Concept lead. In addition to my expertise in Python, I am also strong in C# due to my game development experience at university and outside of work. Overall, my adaptability, quick learning abilities, and dedication to my work make me a valuable addition to any team.</p>
                            <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size = {25}/></button>
                        </h2>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src ={headerImg} alt="HeaderImg" className="my-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
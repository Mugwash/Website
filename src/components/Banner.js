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
    const toRotate = [ "Sr Data Analyst", "Cloud AI Engineer","Game dev" ];
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
                            <p>I am a Sr Analyst specialising in Data and Software with 3+ years of experience in the IT industry. I am proficient in a variety of programming languages in which Python & C# are my strongest. I am also a certified Azure AI Associate (AI-102). Other certifications I've obtained include C# Foundations by Microsoft as well as Azure Fundamentals (AZ900) and Azure Data Fundamentals (DP900). I have also used a variety of tech stacks due to the variety of projects I've been involved in. The Technology I'm most familiar with is GIT, Bash, Azure Cognitive services, PowerShell and Nagios.</p>
                            <a href="https://www.linkedin.com/in/jackgrime/">
                                <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button>
                            </a>
                            
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
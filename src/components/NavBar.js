import * as React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/mugstudios.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Link } from "react-scroll";

export const NavBar = () =>{
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY>50)
            {
                seScrolled(true);
            }else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" style={{ width: '200px', height: '200px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><Link to="home-id" smooth={true} duration={500} spy={true} exact="true" offset={-70}>Home</Link></Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><Link to="skills-id" smooth={true} duration={500} spy={true} exact="true" offset={-300}>Skills</Link></Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><Link to="projects-id" smooth={true} duration={500} spy={true} exact="true" offset={-300}>Projects</Link></Nav.Link>
                        </Nav>
                        <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/jack-grime-102189147/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Mugwash"><img src={navIcon2} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Download CV</span></button>
              </HashLink>
            </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}
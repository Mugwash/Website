import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {GHcontributions} from "./components/GH";
import {Stacks} from "./components/TechStack";

function App() {
  return (
    <div className="App" >
        <div id="home-id"/>
        <NavBar/>
        <Banner/>
        <Skills/>
        <Stacks/>
        <Projects/>
        <GHcontributions/>
    </div>
  );
}

export default App;

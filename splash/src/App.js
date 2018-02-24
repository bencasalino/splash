import React, { Component } from 'react';
import logo from './social-cloud.png';
import cloud from "./github.png";
import team from "./circle.png";

import knex from "./knex.svg";
import js from "./javascript.svg";
import node from "./node.svg";
import nodemon from "./nodemon.svg";
import pg from "./postgresql.svg";
import post from "./postman.svg";
import react from "./react.svg";
import twitter from "./twitter.svg";





import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <div className="Flex--Wrapper">
          <header>
            <div className="header__bg" />
            <div className="header__content">
              <div className="header__wrapper">
                <img className="logo" src={logo} alt="crap" />
                <h1>World Cloud Trends </h1>
              </div>
              <img className="github" src={cloud} alt="poop" />
            </div>
            <div className="about">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <a href="" title="Button push orange" class="button btnPush btnOrange">
              Check it out!
            </a>
          </header>
          <section className="team__wrapper">
            <h3> Project Team </h3> <img className="mini" src={logo} alt="poop" />
          </section>
          <section className="about__wrapper">
            <h4 className="used"> Technology Used: </h4>
            <img className="tech" src={node} alt="blah" />
            <img className="tech" src={react} alt="blah" />
            <img className="tech" src={nodemon} alt="blah" />
            <img className="tech" src={post} alt="blah" />
            <img className="tech" src={js} alt="blah" />
            <img className="tech" src={pg} alt="blah" />
            <img className="tech" src={knex} alt="blah" />
            <img className="tech" src={twitter} alt="blah" />
          </section>
          <section className="about__wrapper">
            <h6 className="name"> Sarah </h6>
            <img className="team" src={team} alt="fart" />
            <h6 className="name"> Dan </h6>
            <img className="team" src={team} alt="fart" />
            <h6 className="name"> Bryan </h6>
            <img className="team" src={team} alt="fart" />
            <h6 className="name"> Ben </h6>
            <img className="team" src={team} alt="fart" />
          </section>
        </div>
        <footer> Copyright 2018 | ©</footer>
      </div>;
  }
}

export default App;

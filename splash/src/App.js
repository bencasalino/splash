import React, { Component } from 'react';
import ProjectLogo from './social-cloud.png';
import GithubFlag from "./github.png";
import TeamPlaceholderImage from "./circle.png";

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
        <div className="App--Wrapper">
          <header>
            <div className="Header--Gradient" />
            <div className="Header--Content">
              <div className="Header--Inline__Wrapper">
                <img className="ProjectLogo" src={ProjectLogo} alt="crap" />
                <h1>World Cloud Trends </h1>
              </div>
              <img className="GithubFlag" src={GithubFlag} alt="poop" />
            </div>
            <div className="About--Section__Wrapper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <a href="" title="Button" class="button btnPush btn">
              Check it out!
            </a>
          </header>
          <section className="Team--Section__Wrapper">
            <h3> Project Team </h3> <img className="ProjectLogo--Small" src={ProjectLogo} alt="poop" />
          </section>
          <section className="Tech--Inline__Wrapper">
            <h4 className="used"> Technology Used: </h4>
            <img className="TechLogo" src={node} alt="blah" />
            <img className="TechLogo" src={react} alt="blah" />
            <img className="TechLogo" src={nodemon} alt="blah" />
            <img className="TechLogo" src={post} alt="blah" />
            <img className="TechLogo" src={js} alt="blah" />
            <img className="TechLogo" src={pg} alt="blah" />
            <img className="TechLogo" src={knex} alt="blah" />
            <img className="TechLogo" src={twitter} alt="blah" />
          </section>
          <section className="Team--Inline__Wrapper">
            <h6 className="TeamMemeber--Text"> Sarah </h6>
            <img className="TeamPlaceholderImage" src={TeamPlaceholderImage} alt="fart" />
            <h6 className="TeamMemeber--Text"> Dan </h6>
            <img className="TeamPlaceholderImage" src={TeamPlaceholderImage} alt="fart" />
            <h6 className="TeamMemeber--Text"> Bryan </h6>
            <img className="TeamPlaceholderImage" src={TeamPlaceholderImage} alt="fart" />
            <h6 className="TeamMemeber--Text"> Ben </h6>
            <img className="TeamPlaceholderImage" src={TeamPlaceholderImage} alt="fart" />
          </section>
          {/* App--Wrapper */}
        </div>
        <footer> Copyright 2018 | ©</footer>
        {/* App */}
      </div>;

  }
}

export default App;

import React, { Component } from 'react';

import ProjectLogo from './social-cloud.png';
import GithubFlag from "./github.png";
// import TeamPlaceholderImage from "./circle.png";

import knex from "./knex.svg";
import js from "./javascript.svg";
import node from "./node.svg";
import nodemon from "./nodemon.svg";
import pg from "./postgresql.svg";
import post from "./postman.svg";
import react from "./react.svg";
import twitter from "./twitter.svg";


// team
import Sarah from "./sarah.jpeg";
import Dan from "./dan.png";
import Bryan from "./bryan.jpeg";
import Ben from "./ben.jpeg";



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
                <h1>Social Issues Word Cloud </h1>
              </div>
              <a href="https://github.com/SocialIssuesWordCloud">
                <img className="GithubFlag" src={GithubFlag} alt="poop" />
              </a>
            </div>

            <div className="About--Section__Wrapper">
              <p>
                People throughout the world want to know the most pressing social issues and trends happening in real time.
                <br />
                <br />
                This project utilizes the Twitter API and retrieves trending tweets based on location and the volume of traffic to said issue. The visual components will be similar to the word cloud image below.
              </p>
            </div>
            <a href="https://social-cloud.herokuapp.com/" title="Button" class="button btnPush btn">
              Check it out!
            </a>
          </header>
          <section className="Team--Section__Wrapper">
            <h3> Project Team</h3> <img className="ProjectLogo--Small" src={ProjectLogo} alt="poop" />
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
            {/* Sarah */}
            <h6 className="TeamMemeber--Text">
              <a href="https://github.com/sarahevelynn">SarahEveylnn </a>
            </h6>
            <a href="https://github.com/sarahevelynn">
              <div className="hover01">
                <figure>
                  {" "}
                  <img className="TeamPlaceholderImage" src={Sarah} alt="fart" />
                </figure>
              </div>
            </a>

            {/* Bryan */}
            <h6 className="TeamMemeber--Text">
              <a href="https://github.com/BryanLong14">Bryan </a>
            </h6>
            <a href="https://github.com/BryanLong14">
              <div className="hover01">
                <figure>
                  <img className="TeamPlaceholderImage" src={Bryan} alt="fart" />
                </figure>
              </div>
            </a>

            {/* Dan */}
            <h6 className="TeamMemeber--Text">
              <a href="https://github.com/lebeerman"> Dan </a>
            </h6>
            <a href="https://github.com/lebeerman">
              <div className="hover01">
                <figure>
                  <img className="TeamPlaceholderImage" src={Dan} alt="fart" />
                </figure>
              </div>
            </a>

            {/* Ben */}
            <h6 className="TeamMemeber--Text">
              <a href="https://github.com/bencasalino">Ben </a>
            </h6>
            <a href="https://github.com/bencasalino">
              <div className="hover01">
                <figure>
                  {" "}
                  <img className="TeamPlaceholderImage" src={Ben} alt="fart" />
                </figure>
              </div>
            </a>
          </section>
          {/* App--Wrapper */}
        </div>
        <footer> Copyright 2018 | ©</footer>
        {/* App */}
      </div>;

  }
}

export default App;

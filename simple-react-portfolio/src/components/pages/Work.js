import React from "react";
//import '../App.css';
import ghlogo from "../img/Giticon.png";
import HODimg from "../img/HOD_running.png";
import parkout from "../img/PArkOut.png";

import readmegenimg from "../img/ReadmeGen.png";
import techblogimg from "../img/techblogimg.png";
import weatherimg from "../img/weather.png";
import fitnessimg from "../img/fitness1.png";
import empCrmimg from "../img/EmpCrm.png";

export default function Contact() {
  return (
    <main>
      <article id="my-work">
        <h2>- Projects -</h2>
        <section className="proj-container">
          <figure className="card" id="proj1">
            <a href="https://house-of-dogs-proj.herokuapp.com/" target="_blank">
              <img className="proj-ss" src={HODimg} alt="Watch Hub" />
            </a>
            <h3>House of Dogs</h3>
            <h2> A Full Stack Apllol/GraphQL React App</h2>
            <a href="https://saibhreas.github.io/parkout/" target="_blank">
              <img
                className="projh"
                src={ghlogo}
                alt="github icon"
                width="30"
                height="30"
              />
            </a>
          </figure>

          <figure className="card" id="proj2">
            <a href="https://saibhreas.github.io/parkout//" target="_blank">
              <img className="proj-ss" src={parkout} alt="Pak Out" />
            </a>
            <h3>Parks Out</h3>
            <h2> An mobile friendly app that helps you pick a park in NJ, though use of API calls</h2>
            <a href="https://github.com/saibhreas/parkout" target="_blank">
              <img
                className="examps"
                src={ghlogo}
                alt="github icon"
                width="30"
                height="30"
              />
            </a>
          </figure>
        </section>

        <h2>Programing Examples</h2>
        <section className="proj-container">
          <figure className="card" id="examp1">
            <a
              href="https://github.com/saibhreas/aReadMeGenerator/"
              target="_blank"
            >
              <img className="proj-ss" src={readmegenimg} alt="Watch Hub" />
            </a>
            <h3>A Readme Generator</h3>
            <a
              href="https://github.com/saibhreas/aReadMeGenerator"
              target="_blank"
            >
              <img
                className="examps"
                src={ghlogo}
                alt="github icon"
                width="30"
                height="30"
              />
            </a>
          </figure>
          <figure className="card" id="examp2">
            <a href="https://techblogu14.herokuapp.com/" target="_blank">
              <img className="proj-ss" src={techblogimg} alt="Tech Blog" />
            </a>
            <h3>Tech Blog</h3>
            <a
              href="https://github.com/saibhreas/mvc-model-view-controller"
              target="_blank"
            >
              <img
                className="proj-gh"
                src={ghlogo}
                alt="github icon"
                width="30"
                height="30"
              />
            </a>
          </figure>

          <figure className="card" id="exampj3">
            <a href="https://saibhreas.github.io/weatherNow/" target="_blank">
              <img className="proj-ss" src={weatherimg} alt="Watch Hub" />
            </a>
            <h3>Weather Dashboard</h3>
            <a href="https://github.com/saibhreas/weatherNow" target="_blank">
              <img
                className="proj-gh"
                src={ghlogo}
                alt="github icon"
                width="30"
                height="30"
              />
            </a>
          </figure>

          <figure className="card" id="examp5">
            <a
              className="proj-ss"
              href="https://noslq-fitness.herokuapp.com/?id=60f70ad79ff31e001594a8f2"
              target="_blank"
            >
              <img className="proj-ss" src={fitnessimg} alt="Trivia Game" />
            </a>
            <h3>Fitness Tracker</h3>
            <a
              href="https://github.com/saibhreas/fitness-tracker"
              target="_blank"
            >
              <img
                className="proj-gh"
                src={ghlogo}
                alt="github icon"
                width="30"
                height="30"
              />
            </a>
          </figure>
          <figure className="card" id="examp6">
            <a
              className="proj-ss"
              href="https://youtu.be/zLPnEJ-B7hY"
              target="_blank"
            >
              <img className="proj-ss" src={empCrmimg} alt="A simple CRM" />
            </a>
            <h3>Employee Tracker</h3>
            <a
              href="https://github.com/saibhreas/employee--crm-12"
              target="_blank"
            >
              <img
                className="proj-gh"
                src={ghlogo}
                alt="github icon"
                width="30"
                height="30"
              />
            </a>
          </figure>
        </section>
      </article>
    </main>
  );
}

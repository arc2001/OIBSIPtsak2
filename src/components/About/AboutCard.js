import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Archana Kumari </span>
             from <span className="purple"> Patna, India.</span>
            <br /> I am a final year student pursuing an B.Tech in Computer Science
            at NIT Patna.
            <br />
            I am skilled at full stack web development and programming particularly in C++.
            {/* <br>I also have conceptual knowledge of CS fundamentals like Operating System, OOPs, </br> */}
            <br />
            <br />
            Apart from coding, some other skills that I have are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Operating system ,OOPs.
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Team work
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Archana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

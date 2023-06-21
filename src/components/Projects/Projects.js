import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Shop.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/temp.png";
import chatify from "../../Assets/Projects/Bihar tourism.png";
import suicide from "../../Assets/Projects/signup.png";
import bitsOfCode from "../../Assets/Projects/bus Reserve.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bihar tourism"
              description="A frontend design of the tourismm app for Bihar. Also shows weather related information through api fetched using javascript. "
              ghLink="https://github.com/arc2001/Bihar-Tourism"
              demoLink="https://arc2001.github.io/Bihar-Tourism/Tourist%20app/Bihar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bus Reservation System"
              description="A simple Bus Reservation System in C language which enables user to login,book,cancel, show status of buses and reservation. "
              ghLink="https://github.com/arc2001/busReservation"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Temperature Converter"
              description="A HTML, CSS, javascript based webvsite used to convert temperature from celsius to fahrenheit and vice-versa"
              ghLink="https://github.com/arc2001/OIBSIP"
              demoLink="https://arc2001.github.io/OIBSIP/tempConvert/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shopping App frontend"
              description="The landing page of a Shopping Website which consists of various features like login, cart, trending and latest products ,discounts and offers in abeautifually designed UI using HTML and CSS "
              ghLink="https://github.com/arc2001/OIBSIP"
              demoLink="https://arc2001.github.io/OIBSIP/Shop_Here/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Newsletter Signup Page"
              description=" Newsletter Sign Up page for mailchimp account through email using HTML,CSS,Bootstrap and Javascript, nodejs and expressjs and deploying it on heroku"
              ghLink="https://github.com/arc2001/Newsletter"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

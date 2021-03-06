import React from "react";
import { Title, Text } from "../../../../components";
import { StyledAbout, StyledCon, StyledImg, StyledTxtCon } from "./About.css";
import img from "assets/mostoski.png";

const About = () => {
  return (
    <StyledAbout>
      <Title>Who am I?</Title>
      <StyledCon>
        <StyledImg src={img} />
        <StyledTxtCon>
          <Text>
            I'm Adrian, I'm 20 and I'm passionate of web development and desing.
            Doing this since '18, however I had tried earlier some other things
            like C++.
          </Text>
          <Text>
            As web developer I'm trying to keep my code clean and readable for
            every developer. For most of my projects I'm using React (It's my
            favourite tool).
          </Text>
          <Text>
            Actually I'm studying Applied Computer Science at Warsaw University
            of Technology. In most of my free time I'm creating new pages and
            developing new skill in web development.
          </Text>
        </StyledTxtCon>
      </StyledCon>
    </StyledAbout>
  );
};

export default About;

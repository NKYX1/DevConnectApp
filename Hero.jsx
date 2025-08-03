import React from "react";
import styled from "styled-components";

const Section = styled.section\`
  background-color: #e9ecef;
  padding: 40px;
  text-align: center;
  margin-bottom: 40px;
\`;

const Button = styled.button\`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
\`;

const Hero = () => (
  <Section>
    <h2>Welcome to DevConnect</h2>
    <p>The place where developers share, learn, and grow together.</p>
    <Button>Join Now</Button>
  </Section>
);

export default Hero;

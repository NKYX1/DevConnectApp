import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header\`
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
\`;

const Logo = styled.div\`
  font-size: 24px;
  font-weight: bold;
\`;

const Nav = styled.nav\`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color: #007bff;
  }
\`;

const Header = () => (
  <HeaderContainer>
    <Logo>DevConnect</Logo>
    <Nav>
      <a href="/">Home</a>
      <a href="/features">Features</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
    </Nav>
  </HeaderContainer>
);

export default Header;

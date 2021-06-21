import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppBar } from "@material-ui/core";

import style from "./Style.module.css";

const Section = styled.section`
  display: flex;
  flex-flow: row;
  background-color: #f26314;
  padding: 5px 0px;
`;
const Logo = styled.section`
  flex-basis: 25%;
  margin-left: 8%;
`;
const Htitle = styled.p`
  font-size: 35px;
  color: white;
  text-transform: capitalize;
  line-height: 65px;
  font-weight: 600;
  margin: 0px auto;
`;
const Menu = styled.section`
  flex-basis: 50%;
  padding: 20px 0px;
  align-content: right;
`;
const Icon = styled.section`
  flex-basis: 25%;
  padding: 25px 0px;
  display: flex;
  flex-direction: row;
  margin-right: 80px;
`;
// const Button = styled.button`
//     background: #f07544;
//   border-radius: 4px;
//   border: 1px solid white;
//   color: white;
//   margin: 0em 1em;
//   //padding: ;
// `

export default function HomeHeader() {
  const history = useHistory();
  const home = () => {
    history.replace("/");
  };

  return (
    <AppBar position="sticky">
      <Section>
        <Logo onClick={home} style={{ cursor: "pointer" }}>
          <Htitle>HARVEST</Htitle>
        </Logo>
        <Menu className={style.menu}>
          <Link to="/why-harvest">Why Harvest?</Link>
          <Link to="/features">Features</Link>
          <Link to="/integrations">Integrations</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/pricing">Pricing</Link>
        </Menu>
        <Icon className={style.icon}>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/Signup">Try Harvest Free</Link>
        </Icon>
      </Section>
    </AppBar>
  );
}

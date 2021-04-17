import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect, useHistory,NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoutSuccess } from '../../../Redux/Auth/authAction';
import style from './Style.module.css'
// import {
//     AppBar, Toolbar
// } from "@material-ui/core"

const Section = styled.section`
    display: flex;
    flex-flow: row;
    background-color: #F26314;
    padding: 5px 0px;
`
const Logo = styled.section`
    flex-basis: 25%;
    margin-left: 8%;
`
const Htitle = styled.p`
    font-size: 35px;
    color: white;
    text-transform: capitalize; 
    line-height: 65px;
    font-weight: 600;
    margin: 0px auto;

`
const Menu = styled.section`
    flex-basis: 50%;
    padding: 20px 0px;
    align-content: right;
    
`
const Icon = styled.section`
    flex-basis: 25%;
    padding: 25px 0px;
    display: flex;
    flex-direction: row;
    margin-right: 80px;
`
const Button = styled.button`
    background: #f07544;
  border-radius: 4px;
  border: 1px solid white;
  color: white;
  margin: 0em 1em;
  //padding: ;
`

export default function HomeHeader() {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        
        const action = logoutSuccess();
        dispatch (action)
        history.replace("/sign-in");

    }

    return (
        // <AppBar position="sticky">
        <Section>
            <Logo>
                <Htitle></Htitle>
            </Logo>
            <Menu className={style.menu}>
                <NavLink activeStyle={{color:"black"}} to="/time">Time</NavLink>
                <NavLink activeStyle={{color:"black"}} to="/expense">Expenses</NavLink>
                <NavLink activeStyle={{color:"black"}} to="/projects">Projects</NavLink>
                <NavLink activeStyle={{color:"black"}} to="/reports">Reports</NavLink>
                <NavLink activeStyle={{color:"black"}} to="/invoice">Invoices</NavLink>

            </Menu>
            <Icon className={style.icon}>
                {/* <Link to="/sign-in">Sign In</Link> */}
                <Button onClick = {handleLogout}>Logout</Button>
                
            </Icon>
            
        </Section>
        
        // </AppBar>
    )
}

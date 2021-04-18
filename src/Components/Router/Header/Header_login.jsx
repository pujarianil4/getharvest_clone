import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect, useHistory,NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoutSuccess } from '../../../Redux/Auth/authAction';
import style from './Style.module.css'
import HomeIcon from '@material-ui/icons/Home';
import { loadData } from '../../Auth/localStorage';
// import {
//     AppBar, Toolbar
// } from "@material-ui/core"

const Section = styled.section`
    display: flex;
    flex-flow: row;
    background-color: #F37714;
    padding: 10px;
`
const Menu = styled.section`
    flex-basis: 50%;
    align-content: right;
    
`
const Icon = styled.section`
    flex-basis: 18%;
    margin-left: 4%;
`
const Button = styled.button`
    background: #f07544;
  border-radius: 4px;
  border: 1px solid white;
  color: white;
  margin: 0em 1em;
`
const Accounts = styled.section`
    justify-content: flex-end;
    margin-left: 0%;

`

export default function HomeHeader() {

    const history = useHistory();
    const dispatch = useDispatch();

    const userName = loadData("user_name") || "user"

    const handleLogout = () => {  
        const action = logoutSuccess();
        dispatch (action)
        history.replace("/sign-in");
    }

    return (
        <Section>
            <Icon>
                <HomeIcon style={{ color: "white", marginLeft: "80%"}} />

                
            </Icon>
            <Menu className={style.menu}>

                <NavLink activeStyle={{color:"black"}} to="/time">Time</NavLink>
                <NavLink activeStyle={{color:"black"}} to="/expense">Expenses</NavLink>
                <NavLink activeStyle={{color:"black"}} to="/projects">Projects</NavLink>
                <NavLink activeStyle={{color:"black"}} to="/reports">Reports</NavLink>
                <NavLink activeStyle={{color:"black"}} to="/invoice">Invoices</NavLink>


           
            </Menu>
            <Accounts>
                <Link>Help</Link>
                <Link>Settings</Link>
                <Link>{userName}</Link>
                <Button onClick = {handleLogout}>Logout</Button>
            </Accounts>       
        </Section>
        
    )
}

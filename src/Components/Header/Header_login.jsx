import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoutSuccess } from '../../Redux/Auth/authAction';
import style from './Style.module.css'
import HomeIcon from '@material-ui/icons/Home';
import { loadData } from '../../Pages/Auth/localStorage';


const Section = styled.section`
    display: flex;
    flex-flow: row;
    background-color: #F37714;
    padding: 10px;
`
const Menu = styled.section`
    display: flex;
    flex-basis: 50%;
    align-items: center;
    align-content: right;
    padding: 3px 0px 0px 0px;
    
`
const Icon = styled.section`
    display: flex;
    align-items: center;
    flex-basis: 18%;
    margin-left: 4%;
`
const Button = styled.button`
    background: #f07544;
    border-radius: 4px;
    border: 1px solid white;
    color: white;
    margin: 0em 1em;
    letter-spacing: 0.1ch;
    padding: 10px 20px;
    &:hover {
        background-color: #ffffff;
        color: red;
        letter-spacing: 0.1ch;
        border-color: #f07544;
    }
`
const Accounts = styled.section`
    justify-content: flex-end;
    margin-left: 0%;
    padding: 3px 0px 0px 0px;
`

export default function HomeHeader() {

    const history = useHistory();
    const dispatch = useDispatch();

    const userName = loadData("user_name") || "user"

    const handleLogout = () => {
        const action = logoutSuccess();
        dispatch(action)
        history.replace("/");
    }
    const home = () => {
        history.replace("/welcome")
    }

    return (
        <Section>
            <Icon onClick={home}>
                <HomeIcon style={{ color: "white", marginLeft: "80%" }} />
            </Icon>

            <Menu className={style.menu}>
                <NavLink activeStyle={{ color: "black" }} to="/time">Time</NavLink>
                <NavLink activeStyle={{ color: "black" }} to="/expense">Expenses</NavLink>
                <NavLink activeStyle={{ color: "black" }} to="/projects">Projects</NavLink>
                <NavLink activeStyle={{ color: "black" }} to="/reports">Reports</NavLink>
                <NavLink activeStyle={{ color: "black" }} to="/invoice">Invoices</NavLink>
            </Menu>

            <Accounts>
                <a target="_blank" className={style.rightMenu} href="https://support.getharvest.com/hc/en-us">Help</a>
                <Link className={style.rightMenu}>Settings</Link>
                <Link className={style.rightMenu}>{userName}</Link>
                <Button onClick={handleLogout}>Logout</Button>
            </Accounts>
        </Section>

    )
}

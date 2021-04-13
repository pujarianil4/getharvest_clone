import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './TimeNavBar.module.css'


const NavWrapper =styled.div`
width:100%;
height:40px;
background-color:#eeeeee;
box-shadow: 1px 1px 1px #a59797;
`
const NavContainer =styled.div`
padding-top:8px;
width:50%;
margin-left:18%;
display:flex;

gap:20px;
align-items:center;

`

export const TimeNavBar = () => {
    return (
        <div>
           <NavWrapper>
               <NavContainer>
            <Link className={styles.Links} to="/time">
                    Timesheet
                </Link>
                <Link className={styles.Links} to="/approve">
                    Pending Aprroval
                </Link>
                <Link className={styles.Links} to="/missing_time">
                    Unsubmiited
                </Link>
                <Link className={styles.Links} to="/entry/archives">
                    Archive
                </Link>
                </NavContainer>
            </NavWrapper> 
        </div>
    )
}

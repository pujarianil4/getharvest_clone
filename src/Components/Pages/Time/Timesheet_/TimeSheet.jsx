import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from './TimeSheet.module.css'

const TimeSheetWrapper = styled.div`
margin-left:18%;
width:60%;
background:red;
height:500px;
`

const TimeSheetContainer = styled.div`
position:relative;
top:40px;
width:100%;
background:#1a7535;
height:460px;
display:flex;
`
const AddButton =styled.div`
width:10%;
background:#1a7535;`



const TaskWrapper =styled.div`
width : 90%;
background:white;`



export const Timesheet = () => {
    return(
        <div>
            <TimeSheetWrapper>
            <TimeSheetContainer>
                <AddButton></AddButton>
                <TaskWrapper>
                  <ArrowForwardIosIcon className={styles.btn}/>
                  <ArrowBackIosIcon className={styles.btn}/>
                </TaskWrapper>
            </TimeSheetContainer>
        </TimeSheetWrapper>
        </div>
    )
}

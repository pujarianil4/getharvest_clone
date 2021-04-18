import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from './TimeSheet.module.css';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch,useSelector} from 'react-redux';
import { createTaskTimer, getTaskTimer,getProjectData } from '../../../../Redux/Timer/timeAction';
// import { createTaskTimer, getTaskTimer } from '../../../../Redux/Timer/timeAction';
import { DayTabs} from './TimeDayTab';
import {TimeNavBar} from '../TimeNavBar_/TimeNavBar';
import axios from 'axios';




const TimeSheetWrapper = styled.div`
margin-left:12%;
width:60%;

height:500px;
`

const TimeSheetContainer = styled.div`
position:relative;
top:40px;
width:100%;

height:460px;
display:flex;
`
const AddButton =styled.div`

position:relative;
top:65px;
width:60px;
height:60px;
background:linear-gradient(#14a000,#1a8d08);
color:white;
display:flex;
justify-content:space-around;

align-items:center;

border-radius:5px;
cursor: pointer;
div{
    font-size:80px;
    margin-bottom:15px;
}
`


const LeftBox =styled.div`
width:10%;
`



const TaskWrapper =styled.div`
width : 90%;
background:none;
input{
    background:none;
}
`

// const AddTask =styled.div`
//     width:33%;
//     height:300px;
//     /* background-color:#f37510; */
//     background-color:white;
//     position:absolute;
//     left:33%;
//     top:100px;
//     z-index:1;
//     border-radius:12px;
//     box-shadow:2px 2px 2px 2px grey;
//     form{
//         width:90%;
//         margin:auto;
//     }
//     `




export const Timesheet = () => {


    
// _____________________________________________________________________USERID________________________________________//

    const userID = useSelector(state => state.auth.uid)
   


    var d = new Date();

    const [changeDate,setChangeDate]=useState(0)
    d.setDate(d.getDate()+changeDate)
    var date = d.toDateString()
   
    //const [dt,setdt]=useState("")

   
    const initTaskObj ={
        userID:userID,
        projectName:"",
        taskName:"",
        notes:"",
        timer:"",
        date: date
        

    }



    const [formData,setFormData] =React.useState(initTaskObj)
    const {projectName,taskName,notes,timer} = formData
 
   


    


    const [openCreateTAsk,setopenCreateTAsk]=React.useState(false)

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
       
    }
    
    const state = useSelector(state => state.time)
    const data =useSelector(state=>state.time)
  
    //_____________________________ This the UseSelector for getting tha New Time Entries_________________________________//
    const TaskEntries = useSelector(state=>state.time.TaskEntries)
    !data.isLoading && console.log(TaskEntries)

     
    const clientObj =state.projectData
    const dispatch = useDispatch()
  console.log(clientObj);


    const [billable,setBillable]=React.useState([])
    const [nonbillable,setnonBillable]=React.useState([])
    const [clientName,setClientName]=React.useState(0)


    useEffect(()=>{
       project_fun()
  
    },[formData])
    const [project,setProject]=useState(0)
    const project_fun=()=>{
        console.log(formData.projectName);
        let project=clientObj.filter(item=> item.pname===formData.projectName)

        setProject(project)
    }
    useEffect(()=>{
        if(project!=0){
            let bill =Object.keys(project[0].tasks)
            console.log(bill);
           setBillable(bill)
          

          }
    },[project])

     
    const task_arr=["businessDevelopment","design","marketing","programming","projectManagement"]
    React.useEffect(()=>{

        dispatch(getProjectData(userID))
        dispatch(getTaskTimer(userID))

      
       
        if(!data.isLoading){
       
            
        console.log();
            

            //setnonBillable(nonbill) 


        } 
        
     
    },[openCreateTAsk])


    React.useEffect(()=>{
        dispatch(getTaskTimer(userID))
    },[])

  
    const handleSubmit =(e)=>{
        e.preventDefault()
        // console.log(formData)
        dispatch(createTaskTimer(formData,userID))
        setopenCreateTAsk(false)
        
       setFormData(initTaskObj)
        
    }
   

    return (
       
            <div>

                <TimeNavBar/>

                          <TimeSheetWrapper>
                            <TimeSheetContainer>
                                <LeftBox>
                                    <AddButton onClick={()=>setopenCreateTAsk(true)}> <div>+</div></AddButton></LeftBox>
                                <TaskWrapper>
                                        <DayTabs setChangeDate={setChangeDate}/>
                                </TaskWrapper>
                            </TimeSheetContainer>

           
                        </TimeSheetWrapper>

            {
                openCreateTAsk && <div className={styles.form_div}>
                <div className={styles.timer_form}>
                        <div className={styles.createTaskHeader}>
                            <h3>New Time Entry</h3>
                            <p>{date}</p>

                         

                        </div>
                        <form>
                            <div><label htmlFor="">Project/Task</label></div>
                            <div className={styles.projectName}>
                            <select name="projectName" id="" onChange={handleChange} value={projectName}>  
                                
                                <optgroup label={clientObj? clientObj.client:"Task Name-2"} >
                                  <option value="None">--None</option>  
                                  {clientObj?.map((item)=>
                                <option value={item.pname}>{item.pname}</option>)}
                                </optgroup>
                            </select>
                            </div>
                            <div className={styles.TaskName}>
                            <select name="taskName" id="" onChange={handleChange} value={taskName}>
                            <optgroup label="BILLABLE">
                            
                                {
                                   
                                 !data.isLoading && billable.map((item)=><option value={item}>{item}</option>)

                                }
                            </optgroup>
                            <optgroup label="NON BILLABLE">
                                {
                                    !data.isLoading && nonbillable.map((item)=><option value={item}>{item}</option>)
                                }
                                
                                
                            </optgroup>
                                
                            </select>
                            </div>
                            <div className={styles.InputBoxes}> 
                            <input type="text" placeholder="Notes (Optional)" name="notes"  onChange={handleChange} value={notes}/>
                            <input type="text" placeholder="0:00" name="timer" onChange={handleChange} value={timer}/>
                            </div>
                            <div className={styles.Buttons}>
                          
                            <button  className={styles.submit_btn} onClick={handleSubmit}>{timer==="00:00" ?"Start Timer":"Save Entry"}</button>
                            <button className={styles.cancel_btn} onClick={()=>setopenCreateTAsk(false)}>Cancel</button>
                            
                            </div>

                        </form>
                        </div>
                        </div>  
            }
  
        </div>
    )
}

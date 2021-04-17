import React, { useState,useEffect } from "react"
import style from "./ShowTime.module.css"
import { Ring } from "react-awesome-spinners"
import { TimeRing } from "./Ring"
import { Edit } from "../Edit/Edit"
import { useDispatch, useSelector } from "react-redux"
export function ShowTime({ id, notes,date, projectName, taskName, timer,setDisable,disable }) {
const [start,setStart]= useState(false)
 const handlestart=(val)=>{
     setStart(val)
     setDisable(val)
 }
 const [openedit,setOpenedit] = useState(false)

const handleEdit=(val)=>{
 setOpenedit(val)
}
const TaskEntries = useSelector((state)=>state.time.TaskEntries)

useEffect(()=>{
  setOpenedit(false)
},[TaskEntries]) 
    return (
        <div className={style.ShowTime}>
            <div className={style.title}>
                <h4>{projectName} <span>(Client)</span></h4>
                <p>{taskName}-{notes}</p>
               
            </div>
            <div className={style.start_time}>
                <h1>{timer}:00</h1>
            { !start? <button onClick={()=>handlestart(true)} disabled={disable}>START</button>
                :<div onClick={()=>handlestart(false)} className={style.Start_button}>
                    <TimeRing />
                    <p>START</p>
                </div>
            }    
                <button onClick={()=>handleEdit(true)}>Edit</button>
            </div>
            { openedit&& <Edit id={id} date={date} timer={timer} setOpenedit={setOpenedit}/>}
        </div>
    )
}
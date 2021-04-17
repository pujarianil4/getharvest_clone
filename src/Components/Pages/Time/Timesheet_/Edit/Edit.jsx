import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletetask, edittask } from "../../../../../Redux/Timer/timeAction"
import { TimeRing } from "../Tab/Ring"
import style from "./Edit.module.css"
export function Edit( {id,date,timer,setOpenedit}) {
    const dispatch=useDispatch()
    const [input,setInput]=useState("")
    const payload={
        timer:input
    }
   const taskloading= useSelector((state)=> state.time.taskloading)
   const TaskEntries = useSelector((state)=>state.time.TaskEntries)
    const handleUpdate=()=>{
       
        dispatch(edittask(id,payload))
      
         
        

        
    }
    const handleDelete=()=>{
          dispatch(deletetask(id))
    }

  
 const d= new Date()
    return (
        <div className={style.maindiv}>
          <div className={style.edit}>
            <div className={style.nav}>
             <h5>Edit Your Task</h5>
             <p>{date}</p>
             <button className={style.close} onClick={()=>setOpenedit(false)}>Close</button>
            </div>
            <div className={style.input}>
                <input type="text" placeholder="00:00"   onChange={(e)=>setInput(e.target.value)}/>
            </div>
            <div className={style.btn}>
             <button onClick={handleUpdate} style={{backgroundColor:"green"}}>Update</button>
             <button onClick={handleDelete} style={{backgroundColor:"red"}}>Delete</button>
            { taskloading&& <TimeRing color="blue" size="10px"/>}
            </div>
          </div>
        </div>
    )
}
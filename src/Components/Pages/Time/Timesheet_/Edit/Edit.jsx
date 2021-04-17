import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { edittask } from "../../../../../Redux/Timer/timeAction"
import style from "./Edit.module.css"
export function Edit( {id,date,timer,setOpenedit}) {
    const dispatch=useDispatch()
    const [input,setInput]=useState("")
    const payload={
        timer:input
    }
   const isLoading= useSelector((state)=> state.time.isLoading)
   const TaskEntries = useSelector((state)=>state.time.TaskEntries)
    const handleUpdate=()=>{
       
        dispatch(edittask(id,payload))
        setOpenedit(false)
         
        

        
    }
    const handleDelete=()=>{

    }

  
 const d= new Date()
    return (
        <div className={style.maindiv}>
          <div className={style.edit}>
            <div className={style.nav}>
             <h5>Edit Your Task</h5>
             <p>{date}</p>
            </div>
            <div className={style.input}>
                <input type="text" placeholder="00:00"   onChange={(e)=>setInput(e.target.value)}/>
            </div>
            <div className={style.btn}>
             <button onClick={handleUpdate} style={{backgroundColor:"green"}}>Update</button>
             <button onClick={handleDelete} style={{backgroundColor:"red"}}>Delete</button>
            </div>
          </div>
        </div>
    )
}
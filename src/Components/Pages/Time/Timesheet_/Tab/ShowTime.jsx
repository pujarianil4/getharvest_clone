import React, { useState } from "react"
import style from "./ShowTime.module.css"
import { Ring } from "react-awesome-spinners"
import { TimeRing } from "./Ring"
export function ShowTime({ id, notes, projectName, taskName, timer }) {
const [start,setStart]= useState(false)


    return (
        <div className={style.ShowTime}>
            <div className={style.title}>
                <h4>{projectName} <span>(Client)</span></h4>
                <p>{taskName}-{notes}</p>
            </div>
            <div className={style.start_time}>
                <h1>{timer}:00</h1>
            { !start? <button>START</button>
                :<div className={style.Start_button}>
                    <TimeRing />
                    <p>START</p>
                </div>
            }    
                <button>Edit</button>
            </div>
        </div>
    )
}
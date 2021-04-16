import React from "react"
import style from "./ShowTime.module.css"
export function ShowTime({id,notes,projectName,taskName,timer}){

    return(
        <div className={style.ShowTime}>
            <div className={style.title}>
                <h4>{projectName} <span>(Client)</span></h4>
                <p>{taskName}-{notes}</p>
            </div>
            <div className={style.start_time}>
                <h1>{timer}:00</h1>
                <button>START</button>
                <button>Edit</button>
            </div>
        </div>
    )
}
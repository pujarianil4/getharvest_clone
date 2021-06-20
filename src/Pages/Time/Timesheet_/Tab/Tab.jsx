import React from "react"
import style from "./Tab.module.css"
export function Tab({title,handlechange,active,time}){
 const activestyle=active?`${style.active}`:`${style.tab}`
    return (
        <div className={activestyle} onClick={()=>handlechange(title)}>
         {title}
         <p>{time}:00</p>
        </div>
    )
}
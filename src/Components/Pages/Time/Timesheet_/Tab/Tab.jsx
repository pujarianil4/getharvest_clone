import React from "react"
import style from "./Tab.module.css"
export function Tab({title,handlechange,active}){
 const activestyle=active?`${style.active}`:`${style.tab}`
    return (
        <div className={activestyle} onClick={()=>handlechange(title)}>
         {title}
        </div>
    )
}